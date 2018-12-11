export default abstract class UIObject {
  position: {
    x: number,
    y: number,
    z: number,
  }
  name:string
  id: number

  instructions: {[key:string]: Function} = {
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

  constructor(x:number, y:number, z:number, ...args:any) {
    this.position = {x: x, y: y, z: z}
    this.init(args)
  }

  init(args: any[]): void {};

  sendInstruction(instruction:string) {
    this.instructions[instruction]()
  }
}