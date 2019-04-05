import uiContexts from '../../model/uimodel/uiContexts'
import UIModel from '../../model/uiModel/uiModel'
import inputs from '../input'

export default class ControllerParser {
  private uiModel: UIModel
  private contexts: {[context in uiContexts]: { [i in inputs]?: () => void}} = {
    inGame: {
      // A: () => { console.log('hello') },
      A: () => { this.uiModel.selectWithCursor() },
      B: () => {},
      up: () => {this.uiModel.moveCursor('up')},
      down: () => {this.uiModel.moveCursor('down')},
      left: () => {this.uiModel.moveCursor('left')},
      right: () => {this.uiModel.moveCursor('right')},
    },
    commandMenu: {
      A: () => { this.uiModel.selectWithCursor() },
      B: () => {},
      up: () => {this.uiModel.moveCursor('up')},
      down: () => {this.uiModel.moveCursor('down')},
      left: () => {},
      right: () => {},
    },
  }

  constructor(uiModel: UIModel) {
    this.uiModel = uiModel
  }

  public send(input: inputs, context: uiContexts, callback: () => void) {
    this.contexts[context][input]()
    callback()
  }
}
