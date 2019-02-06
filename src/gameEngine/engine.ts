import View from './view/view'
import Controller from './controller/controller'
import InGameUIModel from './model/uiModel/uiModel'
import Mediator from './model/logicModel/mediator/mediator'
import ImageLoader from './view/subrenderers/imageLoader/imageLoader';
import LogicModel from './model/logicModel/logicModel';

// Load spritesheetData by config?
import terrainsheetData from '../assets/terrain/terrainsheetData'
import uisheetData from '../assets/ui/uiSheetData'
import unitsheetData from '../assets/units/unitsheetData'

export default class Engine {
  view: View;
  controller: Controller;
  inGameUIModel: InGameUIModel;
  logicModel: LogicModel;
  constructor () {
    // this could be `new LogicModel()` in a local version, as mediator will implement the LogicModel interface
    this.logicModel = new Mediator()
    this.inGameUIModel = new InGameUIModel(this.logicModel)

    this.view = new View(this.logicModel, this.inGameUIModel, {terrain: terrainsheetData, ui: uisheetData, units: unitsheetData}) // get spritesheet data from a config file?
    this.controller = new Controller(this.inGameUIModel) // And this.view if using mouse input?

    this.performAsyncSetup()
      .then(this.runGame)
  }

  async performAsyncSetup() {
    // Call and await all initial async functions here.
    // Eg. this.view.loadSpritesheets()
    await Promise.all([
      ImageLoader.load(terrainsheetData, uisheetData, unitsheetData)
      // Any other async set up functions
    ])
  }

  runGame = () => {
    setInterval(() => {
      this.view.render()
    }, 1000 / 30)
  }
}