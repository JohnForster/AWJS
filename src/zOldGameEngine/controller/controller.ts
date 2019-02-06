import { Cursor } from "../cursor";

export default class Controller {
  public cursor: Cursor
  public pressedKeys: {[keyname: number]: boolean}

  // This allows us to easily change the keybindings programatically
  // Could reverse order, so that actions can be looked up via keycode rather
  // Than the other way round? Allows for a generic handleKeyPress method?
  // keyMappings: {[keyName: string]: number} = {
  //   upCode: 87,   // W
  //   downCode: 83, // S
  //   leftCode: 65, // A
  //   rightCode: 68, // D
  // }

  // Extend to use GameObject instead of Cursor so multiple things can be moved?
  // GameObject could be an interface that uses a move method?
  constructor(cursor: Cursor) {
    this.pressedKeys = {}
    this.cursor = cursor;
    this.handleKeyPress = this.handleKeyPress.bind(this);
    document.onkeydown = document.onkeyup = this.handleKeyPress;
  }

  // TODO extract keybindings to config file
  public handleKeyPress(e: KeyboardEvent) {
    // This method allows multiple keys to be pressed at once.
    // Stores an object of {<keyCode>: true, <keyCode2>: false} for example.

    this.pressedKeys[e.keyCode] = (e.type === 'keydown')
    console.log()
    for (const keyCode in this.pressedKeys) {
      // Skip this loop if the key is from prototype
      if (!this.pressedKeys.hasOwnProperty(keyCode)) { continue; }
      console.log(this.pressedKeys)

      if (this.pressedKeys[keyCode] && this.keyMappings[keyCode]) {
        // After UIModel is written, this line will look something like:
        // if (pressedKeys[keyCode]) controller.send(this.keyMappings[keyCode])
        // with some interface to change the 'up' string to the appropriate UIModel.up() method
        this.cursor.move(this.keyMappings[keyCode])
      }
    }
  }
}
