// interface ISpritesheetData{}


// const terrainsheetData: ISpritesheetData = {}
// const uisheetData: ISpritesheetData = {}

// class Engine2 {
//   view: View;
//   controller: Controller;
//   uiModel: UIModel;
//   logicModel: LogicModel;
//   constructor () {
//     // this could be `new LogicModel` in a local version, as mediator will implement the LogicModel interface
//     this.logicModel = new Mediator()

//     this.uiModel = new UIModel(this.logicModel)
//     this.view = new View(this.logicModel, this.uiModel, {terrain: terrainsheetData, ui: uisheetData}) // get spritesheet data from a config file?
//     this.controller = new Controller(this.uiModel) // And this.view if using mouse input?
//   }
// }

// class LogicModel{
//   getState():IState{return}
// }
// class Mediator implements LogicModel {
//   logicModel: LogicModel;
//   constructor(){
//     this.logicModel = new LogicModel
//   }
//   getState():IState{return}
// }

// class UIModel{
//   constructor(logicModel:LogicModel){}
//   send(instruction:string){}
//   getState():IState{return}
// }

// class View2 {
//   bgRenderer: BgRenderer;
//   uiRenderer: UIRenderer;
//   unitRenderer: any;
//   uiModel: UIModel;
//   logicModel: LogicModel;

//   constructor(logicModel: LogicModel, uiModel:UIModel, spritesheets:{[key:string]:ISpritesheetData}) {
//     this.logicModel = logicModel
//     this.uiModel = uiModel
//     this.bgRenderer = new BgRenderer(spritesheets.terrain)
//     this.uiRenderer = new UIRenderer(spritesheets.ui)
//     this.unitRenderer = new UnitRenderer(spritesheets.units)
//   }

//   render () {
//     const gameCanvas = this.renderGame(this.getGameState())
//     const uiCanvas = this.renderUI(this.getUIState())
//     this.paintToCanvas(gameCanvas, uiCanvas)
//   }

//   renderGame(gameState:IState): HTMLCanvasElement{
//     return this.bgRenderer.render(gameState)
//   }

//   renderUI(uiState: IState): HTMLCanvasElement {
//     return this.bgRenderer.render(uiState)
//   }

//   getGameState(){
//     return this.logicModel.getState()
//   }

//   getUIState(){
//     return this.uiModel.getState()
//   }

//   paintToCanvas(...canvases: HTMLCanvasElement[]){
//     canvases.forEach((canvas) => {
//       return
//     })
//   }
// }

// class SubRenderer {
//   constructor(spritesheetData: ISpritesheetData){}
//   render(state: IState): HTMLCanvasElement {return}
// }

// class BgRenderer extends SubRenderer {} // Add any bg specific rendering
// class UIRenderer extends SubRenderer {} // Add any UI specific rendering
// class UnitRenderer extends SubRenderer {} // Add any Unit specific rendering

// class Controller2 {
//   uiModel: UIModel;
//   constructor(uiModel: UIModel){
//     this.uiModel = uiModel
//   }

//   handleKeyPress(e: KeyboardEvent){
//     const input = e.keyCode.toString() // parse input here
//     this.uiModel.send(input)
//   }
// }