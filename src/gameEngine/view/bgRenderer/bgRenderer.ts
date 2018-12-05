import { ISpritesheetData, ISpriteData } from '../spritesheets/ISpritesheetData'
import { IMap } from '../IMap'

export class BgRenderer {
  map: IMap;
  tileData: ISpriteData[];
  mapCanvas: HTMLCanvasElement;
  // Animation frame?

  constructor (tileSheetData: ISpritesheetData) {
    this.tileData = tileSheetData.data.sprites
  }

  render(map?: IMap):HTMLCanvasElement {
    if (map) this.map = map
    if (!this.map) throw new Error ('No map to render.')
    if (!map && this.mapCanvas) return this.mapCanvas
    return this.draw(map)
  }

  loadMap(map: IMap){
    this.map = map
  }

  // This method could be generic between all renderers? 
  private draw(map?: IMap):HTMLCanvasElement {
    const tempCanvas: HTMLCanvasElement = document.createElement('canvas');
    const tempContext: CanvasRenderingContext2D = tempCanvas.getContext('2d');
    this.map.data.forEach((row, rowNumber) => {
      row.forEach((id, colNumber) => {
        const x = colNumber * this.tileData[id].w
        const y = rowNumber * this.tileData[id].h
        tempContext.putImageData(this.tileData[id].imageData, x, y)
      })
    })
    this.mapCanvas = tempCanvas // Store mapCanvas so recreating the canvas every frame isn't necessary?
    return tempCanvas
  }
}

