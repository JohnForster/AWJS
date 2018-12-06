import LogicModel from '../logicModel'

export default class Mediator implements LogicModel {
  logicModel: LogicModel;
  constructor(){
    this.logicModel = new LogicModel
  }
  getState():IState{
    return {
      idGrid: [
        [1,1,0,1,0,1],
        [1,1,0,1,0,1],
        [1,1,0,1,0,1],
        [1,1,0,1,0,1],
        [1,1,0,1,0,1],
        [1,1,0,1,0,1],
      ]
    }
  }
}