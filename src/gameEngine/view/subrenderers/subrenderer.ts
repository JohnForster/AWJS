import ISpritesheetData from 'src/assets/ISpritesheetData'
import IScreenObjects from '../../model/IScreenObjects';

export default class Subrenderer {
  sprites: ISpritesheetData['data']['sprites'];
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  cachedCanvas: HTMLCanvasElement;

  constructor(spritesheetData: ISpritesheetData){
    this.canvas = this.setupCanvas()
    this.context = this.canvas.getContext('2d')
    this.cachedCanvas = document.createElement('canvas')
    this.sprites = spritesheetData.data.sprites
  }

  render(screenObjects?: IScreenObjects): HTMLCanvasElement {

    // Return the cached canvas if no new state has been given
    if (!screenObjects) return this.cachedCanvas

    // Clear the existing canvas context 
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)

    // Cycle through the state's idGrid and render each sprite to the context
    // Is this function too nested? Refactor?
    if (screenObjects.gridElements) {
      screenObjects.gridElements.forEach((row, rowNumber) => {
        row.forEach((id, colNumber) => {
          if (id !== undefined){
            const sprite = this.sprites[id]
            const x = colNumber * 16 + (sprite.ax || 0) // Tile width (get from where?)
            const y = rowNumber * 16 + (sprite.ay || 0)
            this.context.putImageData(sprite.imageData, x + 8, y + 8) // TODO WHY + 8 ??
          }
        })
      })
    }

    if(screenObjects.nonGridElements){
      screenObjects.nonGridElements.forEach((element) => {
        const sprite = this.sprites[element.id]
        const x = element.x * 16 + (sprite.ax || 0) // Tile width (get from where?)
        const y = element.y * 16 + (sprite.ay || 0)
        this.context.putImageData(sprite.imageData, x + 8, y + 8)
      })
    }

    // Cache this canvas for future use
    this.cachedCanvas = Subrenderer.cloneCanvas(this.canvas)

    return this.canvas
  }

  static cloneCanvas(oldCanvas: HTMLCanvasElement) {
    
    //create a new canvas
    var newCanvas = document.createElement('canvas');
    var context = newCanvas.getContext('2d');

    //set dimensions
    newCanvas.width = oldCanvas.width;
    newCanvas.height = oldCanvas.height;

    //apply the old canvas to the new one
    context.drawImage(oldCanvas, 0, 0);

    //return the new canvas
    return newCanvas;
  }

  private setupCanvas(): HTMLCanvasElement {
    const canvas = document.createElement('canvas');
    canvas.height = 600; // set dimensions in config?
    canvas.width = 800;
    return canvas;
  }
}