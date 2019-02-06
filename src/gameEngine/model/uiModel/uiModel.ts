import IScreenObjects from "../IScreenObjects";
import IGameState from "../logicModel/IGameState";
import LogicModel from "../logicModel/logicModel";
import Cursor from "./uiObjects/cursor/cursor";
import UIObject from "./uiObjects/uiObject";

// This class is responsible for manipulating the UI state. Moving cursor around,
//  selecting units, checking units etc.

// This code is bad.
export default class UIModel {
  // TODO Where do we get the grid size from?
  public currentUIState: IScreenObjects = {elements: []}
  public gameState: IGameState
  public selectedObject: UIObject
  public objects: UIObject[] = []
  public cursor: UIObject

  constructor(logicModel: LogicModel) {
    this.gameState = logicModel.getState()
    this.cursor = this.create(Cursor, {x: 0, y: 0, z: 0})
    this.select(this.cursor)
    this.refreshState()
  }

  public send(instruction: string) {
    this.selectedObject.sendInstruction(instruction)
    const {x, y} = this.selectedObject.position
    this.refreshState()
    // Why would we change gridElements while sending an element an instruction?
    // this.currentUIState.gridElements[y][x] = this.selectedObject.id // Awful code
  }

  public create <T extends UIObject>(UIObjectClass: new(x: number, y: number, z: number, ...args: any) => T, args: { x: number, y: number, z: number }, setupFn?: Function) {
    const {x, y, z} = args
    const object = new UIObjectClass(x, y, z)
    if (setupFn) { setupFn(object) } // Probably a better way of doing this
    this.objects.push(object)
    return object
  }

  public refreshState() {
    // Uses grid
    this.currentUIState.elements = []

    this.objects = this.objects.sort((a, b) => {
      return a.position.z - b.position.z
    })

    this.objects.forEach(({position, id}) => {
      this.currentUIState.elements.push({id, ...position})
    })

    return
    /*
    // Remove this once it is no longer relevant
    // Converts objects into a grid
    this.objects.forEach((uiObject) => {
      const { x, y } = uiObject.position
      // Check if at integer position, and render to state differently? (See IState interface)
      this.currentUIState.gridElements[y][x] = uiObject.id
    })
    */
  }

  public getState(): IScreenObjects {
    return this.currentUIState
  }

  public select <T extends UIObject>(uiObject?: T) {
    this.selectedObject = uiObject ? uiObject : this.cursor
  }
}
