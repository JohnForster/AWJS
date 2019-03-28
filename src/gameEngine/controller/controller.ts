import UIModel from '../model/uiModel/uiModel'
import View from '../view/view'

export default class Controller {
  public uiModel: UIModel
  public view: View

  public keyMappings: {[keyname: string]: string} = {
    'w': 'up', // w
    's': 'down', // s
    'a': 'left', // a
    'd': 'right', // d
    ' ': 'A', // space
  }

  constructor(uiModel: UIModel, view: View) {
    this.uiModel = uiModel
    this.view = view
    document.onkeypress = this.handleKeyPress
  }

  public handleKeyPress = (e: KeyboardEvent) => {
    // Think of a solution to deal with multiple key presses? (Eg. holding B to see the range
    //  of the unit, and using the arrow keys to navigate around the map?)
    const input = this.keyMappings[e.key.toLowerCase()]
    if (input) {
      this.uiModel.sendInstruction(input)
    }
  }

  // public handleClick(e: MouseEvent) {
  //   // Reference view to find where was clicked?
  //   // can use clientX, pageX, screenX and offsetX to get coords
  //   const {clientX, clientY} = e
  //   const [x, y] = this.view.getMousePos(clientX, clientY)
  //   this.uiModel.sendClick(x, y)
  // }
}
