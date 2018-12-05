import View from './view/view'
import Controller from './controller/controller'
import UIModel from './model/uiModel/uiModel'
import Mediator from './model/logicModel/mediator/mediator'
// import LogicModel from './logicModel/logicModel/logicModel'

// Load spritesheetData by config?
const terrainsheetData: ISpritesheetData = {}
const uisheetData: ISpritesheetData = {}

class Engine {
  view: View;
  controller: Controller;
  uiModel: UIModel;
  logicModel: LogicModel;
  constructor () {
    // this could be `new LogicModel` in a local version, as mediator will implement the LogicModel interface
    this.logicModel = new Mediator()

    this.uiModel = new UIModel(this.logicModel)
    this.view = new View(this.logicModel, this.uiModel, {terrain: terrainsheetData, ui: uisheetData}) // get spritesheet data from a config file?
    this.controller = new Controller(this.uiModel) // And this.view if using mouse input?
  }
}