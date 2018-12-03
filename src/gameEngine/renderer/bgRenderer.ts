import { ISpritesheetData, ISpriteData } from './ISpritesheetData'
import { IMap } from './IMap'

export class BgRenderer {
  tileSheet: HTMLImageElement;
  map: IMap;
  tileData: ISpriteData[];
  mapCanvas: HTMLCanvasElement;
  // Animation frame?

  constructor (tileSheetData: ISpritesheetData) {
    this.tileSheet = tileSheetData.image
    this.tileData = tileSheetData.data.sprites
  }

  render(map?: IMap) {
    if (map) this.map = map
    if (!this.map) throw new Error ('No map to render.')
    return this.draw()
  }

  loadMap(map: IMap){
    this.map = map
  }

  // TODO Need imageData for tiles. ImageLoader class?
  private draw(){
    const tempCanvas: HTMLCanvasElement = document.createElement('canvas');
    const tempContext: CanvasRenderingContext2D = tempCanvas.getContext('2d');
    this.map.data.forEach((row, rowNumber) => {
      row.forEach((id, colNumber) => {
        const x = (colNumber * this.tileData[id].w)
        const y = (rowNumber * this.tileData[id].h)
        tempContext.putImageData(this.tileData[id].imageData, x, y)
      })
    })
    this.mapCanvas = tempCanvas // Store mapCanvas so recreating the canvas every frame isn't necessary?
    return tempCanvas
  }
}

