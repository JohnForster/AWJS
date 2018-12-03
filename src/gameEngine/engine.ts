import { Cursor } from './cursor'

export default class Engine {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  ticksPerSecond: number = 0.5; // set ticksPerSecond in config?
  sprites: ImageData[] = [];
  cursor: Cursor;
  cursorTile = { x: 1, y: 1 }

  // Temporarily hard coded
  map: number[][] = [
    [0,0,0,1,1,0],
    [0,0,0,1,1,0],
    [0,0,1,1,1,0],
    [0,1,1,1,1,0],
    [0,0,0,1,1,0],
    [1,1,0,1,1,1],
  ]
  
  constructor () {
    // Inject cursor dependency?
    this.canvas = this.setupCanvas();
    this.context = this.canvas.getContext('2d')
    this.cursor = new Cursor
  }

  private setupCanvas(): HTMLCanvasElement {
    const canvas = <HTMLCanvasElement>document.getElementById('canvas');
    canvas.height = 600; // set dimensions in config?
    canvas.width = 800;
    return canvas;
  }

  async run () {
    await this.loadSprites()
    this.gameTick()
    setInterval(this.gameTick.bind(this), 1000/this.ticksPerSecond)
  }

  async loadSprites () {
    // Write generic method for this?
    let spriteSheet: HTMLImageElement
    let UISprites: HTMLImageElement
    await Engine.addImageProcess('assets/spriteSheet.png')
    .then(res => spriteSheet = <HTMLImageElement>res)
    await Engine.addImageProcess('assets/UISprites.png')
    .then(res => UISprites = <HTMLImageElement>res)
    this.sprites.push(Engine.getImageData(spriteSheet, 217, 1567, 16, 16)) // grass
    this.sprites.push(Engine.getImageData(spriteSheet, 340, 1567, 16, 16)) // sea
    this.sprites.push(Engine.getImageData(UISprites, 44, 6, 28, 31)) // cursor
  }

  private async gameTick () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    // const map = this.game.currentMapState
    // const units = this.game.currentUnitState // Map class holds current map data?
    // this.renderer.drawMap(map)
    // this.renderer.drawUnits(units)
    // TODO move into renderer class.
    this.printMap(this.map)
    this.printCursor(this.cursor.position, 2)
    this.cursor.moveDown()
  }

  private printMap (map: number[][]) {
    const tempCanvas: HTMLCanvasElement = document.createElement('canvas');
    const tempContext: CanvasRenderingContext2D = tempCanvas.getContext('2d');
    const tileSize = { x:16, y:16}
    map.forEach((row, rowNumber) => {
      row.forEach((id, colNumber) => {
        const x = (colNumber * tileSize.x)
        const y = (rowNumber * tileSize.y)
        tempContext.putImageData(this.sprites[id], x, y)
      })
    })
    const mapSize = this.getMapSize(map, tileSize)
    const top = { x: Math.ceil((this.canvas.width - mapSize.x) / 2), y: 20 };
    this.context.drawImage(tempCanvas, top.x, top.y)
  }

  private getMapSize(map: number[][], tileSize: { x: number; y: number; }) {
    return { x: (map.length * tileSize.x), y: (map[0].length * tileSize.y) };
  }

  private printCursor(cursorTile:any, id:number) {
    const tempCanvas: HTMLCanvasElement = document.createElement('canvas');
    const tempContext: CanvasRenderingContext2D = tempCanvas.getContext('2d');
    tempContext.putImageData(this.sprites[id], 0, 0);
    const mapSize = this.getMapSize(this.map, {x:16, y:16})
    const top = { x: Math.ceil((this.canvas.width - mapSize.x) / 2), y: 20 };
    const x = cursorTile.x * 16 + top.x - 3 // Cursor square is 6 pixels wider/taller than a tile, 3 on each side
    const y = cursorTile.y * 16 + top.y - 3
    this.context.drawImage(tempCanvas, x, y)
  }

  static addImageProcess(src: string) {
    return new Promise((resolve, reject) => {
      const img:HTMLImageElement = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => reject();
      img.src = src;
    });
  }

  static getImageData(image: HTMLImageElement, topLeftX:number, topLeftY:number, width:number, height:number):ImageData {
    const tempCanvas = document.createElement('canvas');
    const tempContext = tempCanvas.getContext('2d');
    tempCanvas.width = image.width;
    tempCanvas.height = image.height;
    tempContext.drawImage(image, 0, 0)
    return tempContext.getImageData(topLeftX, topLeftY, width, height)
  }
}