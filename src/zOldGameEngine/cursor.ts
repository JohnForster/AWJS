interface IPosition {
  x: number,
  y: number
}

export class Cursor {
  public position: IPosition;
  public imageData: ImageData;

  constructor() {
    // Store image data in cursor class or only position data?
    this.position = {x: 0, y: 0}
  }

  public setPosition(x: number, y: number) {
    this.position.x = x
    this.position.y = y
  }

  public move(direction: string) {
    direction = direction.toLowerCase()
    // Use a switch statement/object literal for this?
    if (direction === 'up') { this.moveUp() }
    if (direction === 'down') { this.moveDown() }
    if (direction === 'left') { this.moveLeft() }
    if (direction === 'right') { this.moveRight() }
  }

  // remove the below statements and only use .move('direction')? Or visa versa? Make private?
  public moveUp() {
    this.position.y -= 1
  }
  public moveDown() {
    this.position.y += 1
  }
  public moveLeft() {
    this.position.x -= 1
  }
  public moveRight() {
    this.position.x += 1
  }

  public getTopLeftPixelCoordinates() {
    const x = this.position.x * 16 - 3
    const y = this.position.y * 16 - 3
    return {x, y}
  }
}
