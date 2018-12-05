import BgRenderer from './subrenderers/bgRenderer/bgRenderer'
import UIRenderer from './subrenderers/uiRenderer/uiRenderer';
import UIModel from '../model/uiModel/uiModel';
import LogicModel from '../model/logicModel/logicModel';
import ISpritesheetData from '../../assets/ISpritesheetData';
import UnitRenderer from './subrenderers/unitRenderer.ts/unitRenderer';

export default class View {
  bgRenderer: BgRenderer;
  uiRenderer: UIRenderer;
  unitRenderer: any;
  uiModel: UIModel;
  logicModel: LogicModel;

  constructor(logicModel: LogicModel, uiModel:UIModel, spritesheets:{[key:string]:ISpritesheetData}) {
    this.logicModel = logicModel
    this.uiModel = uiModel
    this.bgRenderer = new BgRenderer(spritesheets.terrain)
    this.uiRenderer = new UIRenderer(spritesheets.ui)
    this.unitRenderer = new UnitRenderer(spritesheets.units)
  }

  render () {
    const gameCanvas = this.renderGame(this.getGameState())
    const uiCanvas = this.renderUI(this.getUIState())
    this.paintToCanvas(gameCanvas, uiCanvas)
  }

  renderGame(gameState:IState): HTMLCanvasElement{
    return this.bgRenderer.render(gameState)
  }

  renderUI(uiState: IState): HTMLCanvasElement {
    return this.bgRenderer.render(uiState)
  }

  getGameState(){
    return this.logicModel.getState()
  }

  getUIState(){
    return this.uiModel.getState()
  }

  paintToCanvas(...canvases: HTMLCanvasElement[]){
    canvases.forEach((canvas) => {
      // Paint to the game canvas
    })
  }
}