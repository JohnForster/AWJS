import { BgRenderer } from "./bgRenderer";
import { ISpritesheetData, ISpriteData } from './ISpritesheetData'
import { IMap } from './IMap'


// pass config into renderer constructor instead of hard coding dependency?
import { terrainsheetData } from './terrainSheetData'
import { SpritesheetLoader } from "./spritesheetLoader";

// Currently Unimplemented
export class Renderer {
  gameCanvas: HTMLCanvasElement;
  gameContext: CanvasRenderingContext2D;
  // map: MapObject;
  bgRenderer: BgRenderer
  // uiRenderer: UIRenderer
  // unitRenderer: UnitRenderer

  constructor() {
    this.gameCanvas = this.setupMainCanvas();
    this.gameContext = this.gameCanvas.getContext('2d')
    SpritesheetLoader.load(terrainsheetData)
    this.bgRenderer = new BgRenderer(terrainsheetData)
    // this.uiRenderer = new UIRenderer()
    // this.unitRenderer = new UnitRenderer()
    // effects renderer? etc.
  }

  loadMap(map:IMap){
    console.log('loading map...')
    this.bgRenderer.loadMap(map)
  }

  render () {
    // Map, gamestate and ui state required
    // Perhaps have each of these methods return a canvas which can then be drawn in the main renderer?
    console.log(this)
    const canvases = this.getCanvases(this.bgRenderer)//, this.unitRenderer, this.uiRenderer)
    canvases.forEach((canvas) => {
      // change 0,0 to topLeft adjustment?
      this.gameContext.drawImage(canvas, 0, 0)
    })
  }

  private setupMainCanvas(): HTMLCanvasElement {
    const canvas = <HTMLCanvasElement>document.getElementById('canvas');
    canvas.height = 600; // set dimensions in config?
    canvas.width = 800;
    return canvas;
  }

  private getCanvases(bgRenderer:BgRenderer): HTMLCanvasElement[] {
    // Return array ordered from background to foreground
    return [
      this.bgRenderer.render(), // Keep map static instead of reading it every time?
      // this.unitRenderer.render(gameState.units),
      // this.uiRenderer.render(uiState),
    ]
  }
}