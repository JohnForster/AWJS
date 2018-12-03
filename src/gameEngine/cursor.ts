interface IPosition {
  x: number,
  y: number
}

export class Cursor {
  position: IPosition;

  constructor () {
    // Store image data in cursor class or only position data?
    this.position = {x: 0, y: 0}
  }

  setPosition(x:number, y:number){
    this.position.x = x
    this.position.y = y
  }
  
  moveUp(){
    this.position.y -= 1
  }
  moveDown(){
    this.position.y += 1
  }
  moveLeft(){
    this.position.x -= 1
  }
  moveRight(){
    this.position.x += 1
  }
}