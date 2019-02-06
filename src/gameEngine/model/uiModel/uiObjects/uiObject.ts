import InGameUIModel from "../uiModel";

export default abstract class InGameUIObject {
  uiModel: InGameUIModel
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


  constructor(inGameUIModel: InGameUIModel, x:number, y:number, z:number, ...args:any) {
    this.uiModel = inGameUIModel
    this.position = { x, y, z }
    this.init(args)
  }

  init(args: any[]): void {};

  sendInstruction(instruction:string) {
    this.instructions[instruction]()
  }
}