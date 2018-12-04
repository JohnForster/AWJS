import { Renderer } from './renderer/renderer'
import { IMap } from './renderer/IMap'
import Controller from './controller/controller';
import { Cursor } from './cursor';

const TICKS_PER_SECOND: number = 30
const map: IMap = {
  data: [
    [0,0,0,1,1,0],
    [0,0,0,1,1,0],
    [0,0,1,1,1,0],
    [0,1,1,1,1,0],
    [0,0,0,1,1,0],
    [1,1,0,1,1,1],
  ]
}

export default class Engine {
  renderer: Renderer;
  controller: Controller;
  cursor: Cursor


  constructor(){
    this.cursor = new Cursor
    this.renderer = new Renderer(this.cursor)
    this.controller = new Controller(this.cursor)
    this.renderer.loadMap(map)

  }

  run(){
    setInterval(() => {
      this.renderer.render()
    }, 1000 / TICKS_PER_SECOND)
  }
}