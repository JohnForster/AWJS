import { BgRenderer } from "./bgRenderer/bgRenderer";
import { UIRenderer } from './UIRenderer/uiRenderer'
import { IMap } from './IMap'
import { SpritesheetLoader } from "./spriteSheetLoader/spritesheetLoader";

// pass config into renderer constructor instead of hard coding dependency?
import { terrainsheetData } from './spritesheets/terrainSheetData'
import { UISheetData } from './spritesheets/UISheetData'
import { Cursor } from "../cursor";

// Currently Unimplemented
export class Renderer {
  gameCanvas: HTMLCanvasElement;
  gameContext: CanvasRenderingContext2D;
  // map: MapObject;
  bgRenderer: BgRenderer
  uiRenderer: UIRenderer
  // unitRenderer: UnitRenderer

  // Maybe renderer takes a map and cursor? Or a gamestate object that
  //  contains map, game and UI data?
  constructor(cursor: Cursor) {
    this.gameCanvas = this.setupMainCanvas();
    this.gameContext = this.gameCanvas.getContext('2d')
    SpritesheetLoader.load(terrainsheetData)
    SpritesheetLoader.load(UISheetData)
    this.bgRenderer = new BgRenderer(terrainsheetData)
    this.uiRenderer = new UIRenderer(cursor, UISheetData)
    // this.unitRenderer = new UnitRenderer()
    // effects renderer? etc.
  }

  loadMap(map:IMap){
    this.bgRenderer.loadMap(map)
  }

  render () {
    this.gameContext.clearRect(0, 0, this.gameCanvas.width, this.gameCanvas.height)
    // Map, gamestate and ui state required
    // Perhaps have each of these methods return a canvas which can then be drawn in the main renderer?
    console.log(this)
    const canvases = this.getCanvases(this.bgRenderer, this.uiRenderer)//, this.unitRenderer)
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

  private getCanvases(bgRenderer:BgRenderer, uiRenderer:UIRenderer): HTMLCanvasElement[] {
    // Return array ordered from background to foreground
    return [
      this.bgRenderer.render(), // Keep map static instead of reading it every time?
      // this.unitRenderer.render(gameState.units),
      this.uiRenderer.render(),
    ]
  }
}