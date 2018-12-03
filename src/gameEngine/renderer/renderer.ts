import { BgRenderer } from "./bgRenderer";

// Currently Unimplemented

export class Renderer {
  gameCanvas: HTMLCanvasElement;
  gameContext: CanvasRenderingContext2D;
  map: MapObject;
  bgRenderer: BgRenderer
  uiRenderer: UIRenderer
  unitRenderer: UnitRenderer


  constructor() {
    this.gameCanvas = this.setupMainCanvas();
    this.gameContext = this.gameCanvas.getContext('2d')
    this.bgRenderer = new BgRenderer()
    this.uiRenderer = new UIRenderer()
    this.unitRenderer = new UnitRenderer()
    // effects renderer? etc.
  }

  render (gameState, uiState) {
    // Perhaps have each of these methods return a canvas which can then be drawn in the main renderer?
    // This allows temp
    const canvases = this.getCanvases(this.bgRenderer, this.unitRenderer, this.uiRenderer)
    canvases.forEach((canvas) {
      this.gameContext.drawImage(canvas, topLeft.x, topLeft.y)
    })
  }

  private setupMainCanvas(): HTMLCanvasElement {
    const canvas = <HTMLCanvasElement>document.getElementById('canvas');
    canvas.height = 600; // set dimensions in config?
    canvas.width = 800;
    return canvas;
  }

  private getCanvases(bgRenderer, unitRenderer, uiRenderer): HTMLCanvasElement[] {
    return [
      this.bgRenderer.render(), // Keep map static instead of reading it every time?
      this.unitRenderer.render(gameState.units),
      this.uiRenderer.render(uiState),
    ]
  }
}