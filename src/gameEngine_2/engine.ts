import View from './view/view'
import Controller from './controller/controller'
import UIModel from './model/uiModel/uiModel'
import Mediator from './model/logicModel/mediator/mediator'
import ISpritesheetData from '../assets/ISpritesheetData';
import LogicModel from './model/logicModel/logicModel';
// import LogicModel from './logicModel/logicModel/logicModel'

// Load spritesheetData by config?
import terrainsheetData from '../assets/terrain/terrainsheetData'
import uisheetData from '../assets/ui/uiSheetData'
import ImageLoader from './view/subrenderers/imageLoader/imageLoader';

export default class Engine {
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
    console.log(Date.now())
    this.performAsyncSetup()
  }

  async performAsyncSetup() {
    // Call and await all initial async functions here.
    // Eg. this.view.loadSpritesheets()
    await Promise.all([
      ImageLoader.load(terrainsheetData, uisheetData)
      // Any other async set up functions
    ])
    console.log(Date.now())
    console.log('images Loaded')
    this.runGame()
  }

  runGame(){
    setInterval(() => {
      this.view.render()
    }, 1000)
  }
}