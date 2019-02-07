import Controller from './controller/controller';
import { Cursor } from './cursor';
import { IMap } from './view/IMap'
import { Renderer } from './view/renderer'

const TICKS_PER_SECOND: number = 30
const map: IMap = {
  data: [
    [0, 0, 0, 1, 1, 0],
    [0, 0, 0, 1, 1, 0],
    [0, 0, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 1, 0],
    [1, 1, 0, 1, 1, 1],
  ],
}

export default class Engine {
  public renderer: Renderer;
  public controller: Controller;
  public cursor: Cursor;

  constructor() {
    this.cursor = new Cursor ()
    this.renderer = new Renderer (this.cursor)
    this.controller = new Controller (this.cursor)
    this.renderer.loadMap(map)
  }

  public run() {
    setInterval(() => {
      this.renderer.render()
    }, 1000 / TICKS_PER_SECOND)
  }
}
