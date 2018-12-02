export default class Engine {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  ticksPerSecond: number = 30; // set ticksPerSecond in config?
  sprites: ImageData[] = [];

  map: number[][] = [
    [0,0,0,1,1,0],
    [0,0,0,1,1,0],
    [0,0,1,1,1,0],
    [0,1,1,1,1,0],
    [0,0,0,1,1,0],
    [1,1,0,1,1,1],
  ]
  
  constructor () {
    this.canvas = this.setupCanvas();
    this.context = this.canvas.getContext('2d')
    console.log(this.context)
    // load images etc.
  }

  private setupCanvas(): HTMLCanvasElement {
    const canvas = <HTMLCanvasElement>document.getElementById('canvas');
    canvas.height = 600; // set dimensions in config?
    canvas.width = 800;
    return canvas;
  }

  async run () {
    await this.loadSprites()
    console.log(this.context)
    this.gameTick()
    // setInterval(this.gameTick, 1000/this.ticksPerSecond) // setInterval changes 'this'
  }

  async loadSprites () {
    let spriteSheet: HTMLImageElement
    await Engine.addImageProcess('./src/assets/spriteSheet.png').then((res) => {
      console.log('Res type = ' + typeof res)
      if (res instanceof HTMLImageElement){
        spriteSheet = res
      }
    })
    this.sprites.push(Engine.getImageData(spriteSheet, 217, 1567, 16, 16)) // grass
    this.sprites.push(Engine.getImageData(spriteSheet, 340, 1567, 16, 16)) // sea
  }

  private async gameTick () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    // const map = this.game.currentMapState
    // const units = this.game.currentUnitState // Map class holds current map data?
    // this.renderer.drawMap(map)
    // this.renderer.drawUnits(units)
    // TODO move into renderer class.
    this.printMap(this.map)
  }

  private printMap (map: number[][]) {
    const tempCanvas: HTMLCanvasElement = document.createElement('canvas');
    const tempContext: CanvasRenderingContext2D = tempCanvas.getContext('2d');
    const top = { x: Math.ceil(this.canvas.width / 2), y: 20 };
    const tileWidth = 16
    const tileHeight = 16
    map.forEach((row, rowNumber) => {
      row.forEach((id, colNumber) => {
        const x = colNumber * tileWidth
        const y = rowNumber * tileHeight
        tempContext.putImageData(this.sprites[id], x, y)
        this.context.drawImage(tempCanvas, x, y)
      })
    })
  }



  static addImageProcess(src: string) {
    return new Promise((resolve, reject) => {
      const img:HTMLImageElement = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
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