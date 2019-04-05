import UIModel from '../model/uiModel/uiModel'
import View from '../view/view'
import controllerParser from './controllerParser/controllerParser'
import ControllerParser from './controllerParser/controllerParser'
import inputs from './input'

export default class Controller {

  public uiModel: UIModel
  public view: View

  public keyMappings: {[keyname: string]: inputs} = {
    'w': 'up', // w
    's': 'down', // s
    'a': 'left', // a
    'd': 'right', // d
    ' ': 'A', // space
  }

  private controllerParser: ControllerParser

  constructor(uiModel: UIModel, view: View) {
    this.uiModel = uiModel
    this.view = view
    this.controllerParser = new ControllerParser(uiModel)
    document.onkeypress = this.handleKeyPress
  }

  // TODO multiple simultaneous key presses?
  public handleKeyPress = (e: KeyboardEvent) => {
    const input = this.keyMappings[e.key.toLowerCase()]
    if (!input) { return }
    const currentUIContext = this.uiModel.currentUIState.context
    this.controllerParser.send(input, currentUIContext, () => {})
  }

  // public handleClick(e: MouseEvent) {
  //   // Reference view to find where was clicked?
  //   // can use clientX, pageX, screenX and offsetX to get coords
  //   const {clientX, clientY} = e
  //   const [x, y] = this.view.getMousePos(clientX, clientY)
  //   this.uiModel.sendClick(x, y)
  // }
}
