import UIModel from "../uiModel";

export default abstract class UIObject {
  uiModel: UIModel
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


  constructor(uiModel: UIModel, x:number, y:number, z:number, ...args:any) {
    this.uiModel = uiModel
    this.position = { x, y, z }
    this.init(args)
  }

  init(args: any[]): void {};

  sendInstruction(instruction:string) {
    this.instructions[instruction]()
  }
}