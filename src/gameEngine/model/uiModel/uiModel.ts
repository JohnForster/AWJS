import LogicModel from "../logicModel/logicModel";
import UIObject from "./uiObjects/uiObject";
import Cursor from "./uiObjects/cursor/cursor";
import RangeIndicator from "./uiObjects/rangeIndicator/rangeIndicator";
import IScreenObjects from "../IScreenObjects";
import IGameState from "../logicModel/IGameState";
import Unit from "../logicModel/unit/unit";

// This class is responsible for manipulating the UI state. Moving cursor around,
//  selecting units, checking units etc.

// This code is bad.
export default class UIModel{
  // TODO Where do we get the grid size from?
  currentUIState: IScreenObjects = { gridElements: Array.from(Array(32), x => Array(32))}
  gameState: IGameState
  focussedObject: UIObject;
  objects: UIObject[] = [];
  cursor: UIObject;
  logicModel: LogicModel;
  hoveredUnit: import("/Users/johnforster/Repos/awjs/src/gameEngine/model/logicModel/unit/unit").default;

  constructor (logicModel:LogicModel){
    console.log('New UI Model created')
    this.logicModel = logicModel
    this.gameState = logicModel.getState()
    this.cursor = this.create(Cursor, {x: 0, y: 0, z: 0})
    this.focus(this.cursor)
    this.refreshState()
  }

  send (instruction?:string){
    if (instruction) this.focussedObject.sendInstruction(instruction)
    // const {x, y} = this.focussedObject.position
    this.refreshState()
    // this.currentUIState.gridElements[y][x] = this.selectedObject.id // Awful code
  }

  create <T extends UIObject> (UIObjectClass: { new(uiModel: UIModel, x:number, y:number, z:number, ...args:any): T }, pos: { x: number, y:number, z:number }, setupFn?: Function){
    const {x, y, z} = pos
    const object = new UIObjectClass(this, x, y, z)
    if (setupFn) setupFn(object) // Probably a better way of doing this
    this.objects.push(object)
    return object
  }

  refreshState () {
    if (this.focussedObject === this.cursor) {
      this.objects.push(this.cursor)
      this.hoveredUnit = this.logicModel.findUnitAt(this.cursor.position.x, this.cursor.position.y) || undefined
      if (this.hoveredUnit) {
        console.log(`${this.hoveredUnit.type.name} has ${this.hoveredUnit.currentAmmo} health, ${this.hoveredUnit.currentFuel} fuel and ${this.hoveredUnit.currentAmmo} ammo remaining.`)
      }
    }
    this.currentUIState.gridElements = Array.from(Array(32), x => Array(32))


    this.objects = this.objects.sort((a, b) => {
      return a.position.z - b.position.z
    })
    // Converts objects into a grid
    this.objects.forEach((uiObject) => {
      const { x, y } = uiObject.position
      // Check if at integer position, and render to state differently? (See IState interface)
      this.currentUIState.gridElements[y][x] = uiObject.id
    })
    this.objects = []
  }

  getState ():IScreenObjects {
    return this.currentUIState
  }

  focus <T extends UIObject>(uiObject?: T) {
    this.focussedObject = uiObject ? uiObject : this.cursor
  }

  select(objectToSelect: any){
    if (objectToSelect instanceof Unit) this.showMovementRange(objectToSelect)
  }

  showMovementRange(unit: Unit){
    // This will need to be replaced with the path-finding algorithm when it's written
    const range = unit.type.movementRange
    for (let v:number = -range; v <= range; v++ ) {
      const horizontalRange = range - Math.abs(v)
      for (let h:number = -horizontalRange; h <= horizontalRange; h++){
        if (unit.gridPosX + h >= 0 && unit.gridPosY + v >= 0){
          this.objects.push(new RangeIndicator(this, unit.gridPosX + h, unit.gridPosY + v, 1))
        }
      }
    }
  }

  openUnitSelectMenu(unit: Unit){
    console.log(`${unit.type.name} has ${unit.currentFuel} fuel left`)
  }
}