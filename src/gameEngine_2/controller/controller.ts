import UIModel from "../model/uiModel/uiModel";

export default class Controller {
  uiModel: UIModel;

  keyMappings: {[keyname: string]: string} = {
    w: 'up', // w
    s: 'down', // s
    a: 'left', // a
    d: 'right', // d
    ' ': 'A', // space
  }

  constructor(uiModel: UIModel){
    this.uiModel = uiModel
    document.onkeypress = this.handleKeyPress.bind(this)
  }

  handleKeyPress(e: KeyboardEvent){
    // Think of a solution to deal with multiple key presses? (Eg. holding B to see the range
    //  of the unit, and using the arrow keys to navigate around the map?)
    const input = this.keyMappings[e.key.toLowerCase()]
    if(input){
      this.uiModel.send(input)
    }
  }
}