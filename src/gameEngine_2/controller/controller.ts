import UIModel from "../model/uiModel/uiModel";

export default class Controller {
  uiModel: UIModel;
  constructor(uiModel: UIModel){
    this.uiModel = uiModel
  }

  handleKeyPress(e: KeyboardEvent){
    const input = e.keyCode.toString() // parse input here
    this.uiModel.send(input)
  }
}