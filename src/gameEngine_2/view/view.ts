import BgRenderer from './subrenderers/bgRenderer/bgRenderer'
import UIRenderer from './subrenderers/uiRenderer/uiRenderer';
import UIModel from '../model/uiModel/uiModel';
import LogicModel from '../model/logicModel/logicModel';
import ISpritesheetData from '../../assets/ISpritesheetData';
// import UnitRenderer from './subrenderers/unitRenderer.ts/unitRenderer';


export default class View {
  bgRenderer: BgRenderer;
  uiRenderer: UIRenderer;
  unitRenderer: any;
  uiModel: UIModel;
  logicModel: LogicModel;
  mainCanvas: HTMLCanvasElement;
  mainContext: CanvasRenderingContext2D;

  constructor(logicModel: LogicModel, uiModel:UIModel, spritesheets:{[key:string]:ISpritesheetData}) {
    this.logicModel = logicModel
    this.uiModel = uiModel

    this.mainCanvas = this.setupMainCanvas()
    this.mainContext = this.mainCanvas.getContext('2d')

    this.bgRenderer = new BgRenderer(spritesheets.terrain)
    this.uiRenderer = new UIRenderer(spritesheets.ui)
    // this.unitRenderer = new UnitRenderer(spritesheets.units)
  }

  render () {
    // Question - the variables defined here are purely for readability,
    //  would it be better to use a functional style here?
    const gameState = this.getGameState()
    const uiState = this.getUIState()
    const gameCanvas = this.renderGame(gameState)
    // Uncomment when UI is ready to be rendered
    const uiCanvas = this.renderUI(uiState)
    this.paintToMainCanvas(gameCanvas, uiCanvas)
    // this.paintToMainCanvas(gameCanvas)
  }

  private paintToMainCanvas(...canvases: HTMLCanvasElement[]){
    canvases.forEach((canvas) => {
      this.mainContext.drawImage(canvas, 0, 0)
    })
  }

  private renderGame(gameState:IState): HTMLCanvasElement{
    return this.bgRenderer.render(gameState)
  }

  private renderUI(uiState: IState): HTMLCanvasElement {
    return this.uiRenderer.render(uiState)
  }

  private getGameState(){
    return this.logicModel.getState()
  }

  private getUIState(){
    return this.uiModel.getState()
  }

  private setupMainCanvas(): HTMLCanvasElement {
    const canvas = <HTMLCanvasElement>document.getElementById('canvas');
    canvas.height = 600; // set dimensions in config?
    canvas.width = 800;
    return canvas;
  }
}