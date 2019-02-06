import UIObject from '../uiObject';

export default class Cursor extends UIObject {
  // have a layer (z-value) associated with uiObjects and render them in order?
  public name: string = 'cursor'
  public id: number = 0
  public instructions: {[key: string]: Function} = {
    up: () => { this.moveUp() },
    down: () => { this.moveDown() },
    left: () => { this.moveLeft() },
    right: () => { this.moveRight() },
    A: () => {},
    B: () => {},
    L: () => {},
    R: () => {},
    start: () => {},
    select: () => {},
  }

  public moveUp(n: number = 1) {
    if (this.position.y > 0) { this.position.y -= n }
  }
  public moveDown(n: number = 1) {
    this.position.y += n
  }
  public moveLeft(n: number = 1) {
    if (this.position.x > 0) { this.position.x -= n }
  }
  public moveRight(n: number = 1) {
    this.position.x += n
  }
}
