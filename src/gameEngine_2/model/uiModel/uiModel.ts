import LogicModel from "../logicModel/logicModel";
import UIObject from "./uiObjects/uiObject";
import Cursor from "./uiObjects/cursor/cursor";

// This class is responsible for manipulating the UI state. Moving cursor around,
//  selecting units, checking units etc.


export default class UIModel{
  // TODO Where do we get the grid size from?
  currentUIState: IState = {idGrid: Array.from(Array(32), x => Array(32))}
  gameState: IState
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
    this.currentUIState.idGrid[y][x] = this.selectedObject.id // Awful code
  }


  create <T extends UIObject>(UIObjectClass: {new(x:number, y:number, z:number, ...args:any): T}, args: {x: number, y:number, z:number}, setupFn?: Function){
    const {x, y, z} = args
    const object = new UIObjectClass(x, y, z)
    if (setupFn) setupFn(object) // Probably a better way of doing this
    this.objects.push(object)
    return object
  }

  refreshState () {
    this.currentUIState.idGrid = Array.from(Array(32), x => Array(32))

    this.objects = this.objects.sort((a, b) => {
      return a.position.z - b.position.z
    })
    this.objects.forEach((uiObject) => {
      const { x, y } = uiObject.position
      // Check if at integer position, and render to state differently? (See IState interface)
      this.currentUIState.idGrid[y][x] = uiObject.id
    })
  }

  getState ():IState {
    return this.currentUIState
  }

  select <T extends UIObject>(uiObject?: T) {
    this.selectedObject = uiObject ? uiObject : this.cursor
  }
}