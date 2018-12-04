import { Cursor } from "../cursor";


export default class Controller {
  cursor: Cursor

  // This allows us to easily change the keybindings programatically
  // Could reverse order, so that actions can be looked up via keycode rather
  // Than the other way round? Allows for a generic handleKeyPress method?
  keyMappings: {[keyName: string]: number} = {
    upCode: 87,   // W
    downCode: 83, // S
    leftCode: 65, // A
    rightCode: 68 // D
  }

  // Extend to use GameObject instead of Cursor so multiple things can be moved?
  // GameObject could be an interface that uses a move method?
  constructor(cursor: Cursor) {
    this.cursor = cursor;
    this.handleKeyPress = this.handleKeyPress.bind(this);
    document.onkeypress = document.onkeydown = this.handleKeyPress;
  }

  // TODO extract keybindings to config file
  handleKeyPress(e: KeyboardEvent) {
    // This method allows multiple keys to be pressed at once.
    // Stores an object of {<keyCode>: true, <keyCode2>: false} for example.
    const pressedKeys: {[key: number]: boolean} = {}
    pressedKeys[e.keyCode] = e.type === 'keydown'

    const {upCode, downCode, leftCode, rightCode} = this.keyMappings
    if (pressedKeys[upCode]) this.cursor.move('up')
    if (pressedKeys[downCode]) this.cursor.move('down')
    if (pressedKeys[leftCode]) this.cursor.move('left')
    if (pressedKeys[rightCode]) this.cursor.move('right')
  }
}
