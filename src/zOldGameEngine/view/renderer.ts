import { BgRenderer } from './bgRenderer/bgRenderer';
import { IMap } from './IMap'
import { SpritesheetLoader } from './spriteSheetLoader/spritesheetLoader';
import { UIRenderer } from './UIRenderer/uiRenderer'

// pass config into renderer constructor instead of hard coding dependency?
import { Cursor } from '../cursor'
import { terrainsheetData } from './spritesheets/terrainSheetData'
import { uisheetData } from './spritesheets/UISheetData'

// Currently Unimplemented
export class Renderer {
  public gameCanvas: HTMLCanvasElement;
  public gameContext: CanvasRenderingContext2D;
  // map: MapObject;
  public bgRenderer: BgRenderer
  public uiRenderer: UIRenderer
  // unitRenderer: UnitRenderer

  // Maybe renderer takes a map and cursor? Or a gamestate object that
  //  contains map, game and UI data?
  constructor(cursor: Cursor) {
    this.gameCanvas = this.setupMainCanvas();
    this.gameContext = this.gameCanvas.getContext('2d')
    SpritesheetLoader.load(terrainsheetData, uisheetData)
    this.bgRenderer = new BgRenderer(terrainsheetData)
    this.uiRenderer = new UIRenderer(cursor, uisheetData)
    // this.unitRenderer = new UnitRenderer()
    // effects renderer? etc?.,.
  }

  public loadMap(map: IMap) {
    this.bgRenderer.loadMap(map)
  }

  public render() {
    this.gameContext.clearRect(0, 0, this.gameCanvas.width, this.gameCanvas.height)
    // Map, gamestate and ui state required
    // Perhaps have each of these methods return a canvas which can then be drawn in the main renderer?
    const canvases = this.getCanvases(this.bgRenderer, this.uiRenderer)// , this.unitRenderer)
    canvases.forEach((canvas) => {
      // change 0,0 to topLeft adjustment?
      this.gameContext.drawImage(canvas, 0, 0)
    })
  }

  private setupMainCanvas(): HTMLCanvasElement {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    canvas.height = 600; // set dimensions in config?
    canvas.width = 800;
    return canvas;
  }

  private getCanvases(bgRenderer: BgRenderer, uiRenderer: UIRenderer): HTMLCanvasElement[] {
    // Return array ordered from background to foreground
    return [
      this.bgRenderer.render(), // Keep map static instead of reading it every time?
      // this.unitRenderer.render(gameState.units),
      this.uiRenderer.render(),
    ]
  }
}
