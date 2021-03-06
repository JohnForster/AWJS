import ISpritesheetData from '../../assets/ISpritesheetData'
import IScreenObjects from '../model/IScreenObjects'
import LogicModel from '../model/logicModel/logicModel'
import UIModel from '../model/uiModel/uiModel'
import GameStateParser from './gameStateParser/gameStateParser'
import BgRenderer from './subrenderers/bgRenderer/bgRenderer'
import UIRenderer from './subrenderers/uiRenderer/uiRenderer'
import UnitRenderer from './subrenderers/unitRenderer.ts/unitRenderer'
// import UnitRenderer from './subrenderers/unitRenderer.ts/unitRenderer';

export default class View {
  public bgRenderer: BgRenderer
  public uiRenderer: UIRenderer
  public unitRenderer: any
  public uiModel: UIModel
  public logicModel: LogicModel
  public mainCanvas: HTMLCanvasElement
  public mainContext: CanvasRenderingContext2D

  constructor(logicModel: LogicModel, uiModel: UIModel, spritesheets: {[key: string]: ISpritesheetData}) {
    this.logicModel = logicModel
    this.uiModel = uiModel

    this.mainCanvas = this.setupMainCanvas()
    this.mainContext = this.mainCanvas.getContext('2d')

    this.bgRenderer = new BgRenderer(spritesheets.terrain)
    this.uiRenderer = new UIRenderer(spritesheets.ui)
    this.unitRenderer = new UnitRenderer(spritesheets.units)
  }

  public render() {
    // Question - the variables defined here are purely for readability,
    //  would it be better to use a functional style here?
    const gameState = this.getGameState()
    const terrainScreenObjects = GameStateParser.getTerrainScreenObjects(gameState)
    const unitsScreenObjects = GameStateParser.getUnitsScreenObjects(gameState)
    const [terrainCanvas, unitCanvas] = this.renderGame(terrainScreenObjects, unitsScreenObjects)

    const uiState = this.getUIState()

    // Uncomment when UI is ready to be rendered
    const uiCanvas = this.renderUI(uiState)
    this.paintToMainCanvas(terrainCanvas, unitCanvas, uiCanvas)
    // this.paintToMainCanvas(gameCanvas)
  }

  private paintToMainCanvas(...canvases: HTMLCanvasElement[]) {
    this.mainContext.clearRect(0, 0, this.mainCanvas.width, this.mainCanvas.height)
    canvases.forEach((canvas) => {
      // TODO If you are wondering why the elements are off-line, see todo in Subrenderer.render
      this.mainContext.drawImage(canvas, 0, 0)
    })
  }

  private renderGame(terrainScreenObjects: IScreenObjects, unitScreenObjects: IScreenObjects): HTMLCanvasElement[] {
    return [
      this.bgRenderer.render(terrainScreenObjects),
      this.unitRenderer.render(unitScreenObjects),
    ]
  }

  private renderUI(uiState: IScreenObjects): HTMLCanvasElement {
    return this.uiRenderer.render(uiState)
  }

  private getGameState() {
    return this.logicModel.getState()
  }

  private getUIState() {
    return this.uiModel.getState()
  }

  private setupMainCanvas(): HTMLCanvasElement {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement
    canvas.height = 600 // set dimensions in config?
    canvas.width = 800
    return canvas
  }
}
