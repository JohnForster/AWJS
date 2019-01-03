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
    document.onkeyup = this.handleKeyUp.bind(this)
  }

  handleKeyPress(e: KeyboardEvent){
    // Think of a solution to deal with multiple key presses? (Eg. holding B to see the range
    //  of the unit, and using the arrow keys to navigate around the map?)
    const input = this.keyMappings[e.key.toLowerCase()]
    if(input){
      this.uiModel.send(input)
    }
  }

  handleKeyUp(){
    this.uiModel.send()
  }
}

// handleKeyPress(e: KeyboardEvent) {
//   this.handleKeyPress = this.handleKeyPress.bind(this);
//   document.onkeydown = document.onkeyup = this.handleKeyPress;
//   // This method allows multiple keys to be pressed at once.
//   // Stores an object of {<keyCode>: true, <keyCode2>: false} for example.
  
//   this.pressedKeys[e.keyCode] = (e.type === 'keydown')
//   console.log()
//   for (let keyCode in this.pressedKeys){
//     // Skip this loop if the key is from prototype
//     if (!this.pressedKeys.hasOwnProperty(keyCode)) continue;
//     console.log(this.pressedKeys)

//     if (this.pressedKeys[keyCode] && this.keyMappings[keyCode]) {
//       // After UIModel is written, this line will look something like:
//       // if (pressedKeys[keyCode]) controller.send(this.keyMappings[keyCode])
//       // with some interface to change the 'up' string to the appropriate UIModel.up() method
//       this.cursor.move(this.keyMappings[keyCode])
//     }
//   }
// }
// }