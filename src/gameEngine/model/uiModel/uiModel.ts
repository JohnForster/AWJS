import LogicModel from "../logicModel/logicModel";
import UIObject from "./uiObjects/uiObject";
import Cursor from "./uiObjects/cursor/cursor";
import IScreenObjects from "../IScreenObjects";
import IGameState from "../logicModel/IGameState";

// This class is responsible for manipulating the UI state. Moving cursor around,
//  selecting units, checking units etc.

// This code is bad.
export default class UIModel{
  // TODO Where do we get the grid size from?
  currentUIState: IScreenObjects = { gridElements: Array.from(Array(32), x => Array(32))}
  gameState: IGameState
  selectedObject: UIObject;
  objects: UIObject[] = [];
  cursor: UIObject;

  constructor (logicModel:LogicModel){
    console.log(this.currentUIState)
    this.gameState = logicModel.getState()
    this.cursor = this.create(Cursor, {x: 0, y: 0, z: 0})
    this.select(this.cursor)
    this.refreshState()
  }

  send (instruction:string){
    this.selectedObject.sendInstruction(instruction)
    const {x, y} = this.selectedObject.position
    this.refreshState()
    this.currentUIState.gridElements[y][x] = this.selectedObject.id // Awful code
  }

  create <T extends UIObject> (UIObjectClass: { new(x:number, y:number, z:number, ...args:any): T }, args: { x: number, y:number, z:number }, setupFn?: Function){
    const {x, y, z} = args
    const object = new UIObjectClass(x, y, z)
    if (setupFn) setupFn(object) // Probably a better way of doing this
    this.objects.push(object)
    return object
  }

  refreshState () {
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
  }

  getState ():IScreenObjects {
    return this.currentUIState
  }

  select <T extends UIObject>(uiObject?: T) {
    this.selectedObject = uiObject ? uiObject : this.cursor
  }
}