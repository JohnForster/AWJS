import IScreenObjects from '../IScreenObject'
import IGameState from '../logicModel/IGameState'
import LogicModel from '../logicModel/logicModel'
import IUIState, {uiStates} from './IUIState'
import Cursor from './uiObjects/cursor/cursor'
import UIObject from './uiObjects/uiObject'

import findUnit from '../../utils/findUnit'
import Unit from '../logicModel/unit/unit'
import unitSelector from './unitSelector/unitSelector'

// This class is responsible for manipulating the UI state. Moving cursor around,
//  selecting units, checking units etc.

// This code is bad.
export default class UIModel {
  // TODO Where do we get the grid size from?
  // public currentUIState: IScreenObjects = {elements: []}
  public currentUIState: IUIState = {state: uiStates.inGame, elements: []}
  public logicModel: LogicModel
  public gameState: IGameState
  public selectedObject: UIObject
  public focussedUnit: Unit
  public objects: UIObject[] = []
  public cursor: UIObject

  constructor(logicModel: LogicModel) {
    this.logicModel = logicModel
    this.gameState = logicModel.getState()
    this.cursor = this.createObject(Cursor, {x: 0, y: 0, z: 0})
    this.selectedObject = this.cursor
    this.refreshState()
  }

  public sendInstruction(instruction: string) {
    if (instruction === 'A') {
      this.selectWithCursor()
    } else {
      this.cursor.sendInstruction(instruction)
    }
    // const {x, y} = this.selectedObject.position
    this.refreshState()

    // Why would we change gridElements while sending an element an instruction?
    // this.currentUIState.gridElements[y][x] = this.selectedObject.id // Awful code
  }

  public createObject <T extends UIObject>(
    UIObjectClass: new(x: number, y: number, z: number, ...args: any) => T,
    args: { x: number, y: number, z: number },
    setupFn?: (object: T) => void,
  ): T {
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

    this.objects.forEach(({position, id, isVisible}) => {
      this.currentUIState.elements.push({id, isVisible, ...position})
    })

    return this.currentUIState
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

  public getState(): IUIState {
    return this.currentUIState
  }

  // public select <T extends UIObject>(uiObject?: T) {
  //   this.selectedObject = uiObject ? uiObject : this.cursor
  // }

  public selectWithCursor() {
    return this.select(this.cursor.position.x, this.cursor.position.y)
  }

  public select(x: number, y: number) {
    // This method is called either on a click, or on pushing the
    // select key.
    // It will contain the logic of how to handle the input.

    // inGame is the regular game state.
    if (this.currentUIState.state === uiStates.inGame) {
      const selectedUnit = findUnit(this.gameState, x, y)
      if (selectedUnit) {
        this.setState(unitSelector(this.currentUIState, selectedUnit))
        console.log(selectedUnit)
      }
      return selectedUnit
    }
  }

  private setState(uiState: IUIState) {
    this.currentUIState = uiState
  }
}
