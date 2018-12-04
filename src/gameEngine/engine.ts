import { Renderer } from './renderer/renderer'
import { IMap } from './renderer/IMap'
import Controller from './controller/controller';
import { Cursor } from './cursor';

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
    this.renderer = new Renderer
    this.renderer.loadMap(map)
    this.cursor = new Cursor
    this.controller = new Controller(this.cursor)
  }

  run(){
    setInterval(() => {
      this.renderer.render()
    }, 2000)
  }
}