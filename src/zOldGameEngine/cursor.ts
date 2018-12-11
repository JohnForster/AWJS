interface IPosition {
  x: number,
  y: number
}

export class Cursor {
  position: IPosition;
  imageData: ImageData;

  constructor () {
    // Store image data in cursor class or only position data?
    this.position = {x: 0, y: 0}
  }

  setPosition(x:number, y:number){
    this.position.x = x
    this.position.y = y
  }

  move(direction: string){
    direction = direction.toLowerCase()
    // Use a switch statement/object literal for this?
    if (direction === 'up') this.moveUp()
    if (direction === 'down') this.moveDown()
    if (direction === 'left') this.moveLeft()
    if (direction === 'right') this.moveRight()
  }

  // remove the below statements and only use .move('direction')? Or visa versa? Make private?
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

  getTopLeftPixelCoordinates(){
    const x = this.position.x * 16 - 3
    const y = this.position.y * 16 - 3
    return {x, y}
  }
}