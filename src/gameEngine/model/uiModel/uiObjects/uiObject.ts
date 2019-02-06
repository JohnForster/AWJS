export default abstract class UIObject {
  public position: {
    x: number,
    y: number,
    z: number,
  }
  public name: string
  public id: number

  public instructions: {[key: string]: Function} = {
    up: () => {},
    down: () => {},
    left: () => {},
    right: () => {},
    A: () => {},
    B: () => {},
    L: () => {},
    R: () => {},
    start: () => {},
    select: () => {},
  }

  constructor(x: number, y: number, z: number, ...args: any) {
    this.position = {x, y, z}
    this.init(args)
  }

  public init(args: any[]): void {};

  public sendInstruction(instruction: string) {
    this.instructions[instruction]()
  }
}
