import IGameState from '../IGameState'
import LogicModel from '../logicModel'

import tank from '../../../../resources/units/tank'
import Player from '../player/player'
import Unit from '../unit/unit'

const myPlayer = new Player()

export default class Mediator implements LogicModel {
  public logicModel: LogicModel
  constructor() {
    this.logicModel = new LogicModel ()

  }
  public getState(): IGameState {
    return {
      gameID: 1,
      numberOfPlayers: 1,
      players: [{
        id: 0,
        player: myPlayer, // class
        money: 1000,
        color: 'orange', // enum
      }],
      terrain: {
        sizeX: 5, // might be unnecessary as can be got from mapIdGrid[0].length
        sizeY: 5,
        mapIdGrid: [
          [0, 0, 1, 0, 0],
          [0, 1, 1, 1, 0],
          [1, 1, 1, 1, 1],
          [0, 1, 1, 1, 0],
          [0, 0, 1, 0, 0],
        ],
      },
      units: [
        new Unit(tank, 0, 2, 2),
        new Unit(tank, 0, 2, 3),
        new Unit(tank, 0, 4, 2),
        new Unit(tank, 0, 1, 1),
      ],
    }
  }
}
