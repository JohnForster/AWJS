import ImageLoader from './imageLoader/imageLoader'
import ISpritesheetData from 'src/assets/ISpritesheetData'

export default class Subrenderer {
  constructor(spritesheetData: ISpritesheetData){
    ImageLoader.load(spritesheetData)
  }

  render(state: IState): HTMLCanvasElement {return}
}