interface IMapObject{}
interface ITileData {id:number, name:string, x:number, y:number, w:number, h:number}
interface ITileSheetData {image: HTMLImageElement, ids: ITileData[]}

export class BgRenderer{
  tileSheet: HTMLImageElement;
  map: IMapObject;
  tileIds: ITileData[];
  mapCanvas: HTMLCanvasElement;
  // Animation frame?

  constructor (tileSheetData: ITileSheetData) {
    this.tileSheet = tileSheetData.image
    this.tileIds = tileSheetData.ids
  }

  renderMap(map?: IMapObject) {
    if (map) this.map = map
    if (!this.map) throw new Error ('No map to render.')
    return this.draw()
  }

  private draw(){
    const tempCanvas: HTMLCanvasElement = document.createElement('canvas');
    const tempContext: CanvasRenderingContext2D = tempCanvas.getContext('2d');
    const tileSize = { x:16, y:16}
    this.map.forEach((row, rowNumber) => {
      row.forEach((id, colNumber) => {
        const x = (colNumber * tileSize.x)
        const y = (rowNumber * tileSize.y)
        tempContext.putImageData(this.sprites[id], x, y)
      })
    })
    const mapSize = this.getMapSize(map, tileSize)
    const top = { x: Math.ceil((this.canvas.width - mapSize.x) / 2), y: 20 };
    // this.context.drawImage(tempCanvas, top.x, top.y)
    this.mapCanvas = tempCanvas // Store mapCanvas so recreating the canvas every frame isn't necessary?
    return tempCanvas
  }
}

