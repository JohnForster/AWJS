import Controller from './controller/controller'
import LogicModel from './model/logicModel/logicModel';
import Mediator from './model/logicModel/mediator/mediator'
import UIModel from './model/uiModel/uiModel'
import ImageLoader from './view/subrenderers/imageLoader/imageLoader';
import View from './view/view'

// Load spritesheetData by config?
import terrainsheetData from '../assets/terrain/terrainsheetData'
import uisheetData from '../assets/ui/uiSheetData'
import unitsheetData from '../assets/units/unitsheetData'

export default class Engine {
  public view: View;
  public controller: Controller;
  public uiModel: UIModel;
  public logicModel: LogicModel;
  constructor() {
    // this could be `new LogicModel()` in a local version, as mediator will implement the LogicModel interface
    this.logicModel = new Mediator()
    this.uiModel = new UIModel(this.logicModel)

    this.view = new View(this.logicModel, this.uiModel, {terrain: terrainsheetData, ui: uisheetData, units: unitsheetData}) // get spritesheet data from a config file?
    this.controller = new Controller(this.uiModel) // And this.view if using mouse input?

    this.performAsyncSetup()
  }

  public async performAsyncSetup() {
    // Call and await all initial async functions here.
    // Eg. this.view.loadSpritesheets()
    await Promise.all([
      ImageLoader.load(terrainsheetData, uisheetData, unitsheetData),
      // Any other async set up functions
    ])
    this.runGame()
  }

  public runGame() {
    setInterval(() => {
      this.view.render()
    }, 1000 / 30)
  }
}
