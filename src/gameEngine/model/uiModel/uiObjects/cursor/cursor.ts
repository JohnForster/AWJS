import UIObject from "../uiObject";

export default class Cursor extends UIObject {
  // have a layer (z-value) associated with uiObjects and render them in order?
  name: string = 'cursor'
  id: number = 0
  instructions: {[key:string]: Function} = {
    up: () => { this.moveUp() },
    down: () => { this.moveDown() },
    left: () => { this.moveLeft() },
    right: () => { this.moveRight() },
    A: () => { this.uiModel.select(this.uiModel.hoveredUnit) },
    B: () => {},
    L: () => {},
    R: () => {},
    start: () => {},
    select: () => {},
  }

  moveUp(n:number = 1){
    if (this.position.y > 0) this.position.y -= n
  }
  moveDown(n:number = 1){
    this.position.y += n
  }
  moveLeft(n:number = 1){
    if (this.position.x > 0) this.position.x -= n
  }
  moveRight(n:number = 1){
    this.position.x += n
  }
}