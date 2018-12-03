import { Renderer } from './renderer/renderer'
import { IMap } from './renderer/IMap'

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

  constructor(){
    this.renderer = new Renderer
    this.renderer.loadMap(map)
  }

  run(){
    setInterval(() => {
      console.log(this)
      this.renderer.render()
    }, 2000)
  }
}