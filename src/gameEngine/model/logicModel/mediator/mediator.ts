import LogicModel from '../logicModel'
import IGameState from '../IGameState';

import Player from '../player/player';
import Unit from '../unit/unit';
import tank from '../../../../resources/units/tank';
import infantry from '../../../../resources/units/infantry';

const myPlayer = new Player()

export default class Mediator implements LogicModel {
  logicModel: LogicModel;
  gameState: IGameState = {
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
        [0,0,1,0,0,1,1,1,1,1,1,1,1,1,1],
        [0,1,1,1,0,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,0,1,1,1,1,1,1],
        [0,1,1,1,0,1,1,1,1,1,1,1,0,1,1],
        [0,0,1,0,0,1,1,1,1,1,1,1,1,1,1],
        [0,0,1,0,0,1,1,1,1,1,1,1,1,1,1],
        [0,1,1,1,0,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,0,1,1,1,0,0,1],
        [0,1,1,1,0,1,1,1,1,1,1,1,1,0,1],
        [0,0,1,0,0,1,1,1,1,1,1,1,1,1,1],
      ],
    },
    units: [
      new Unit(tank, 0, 2, 2), 
      new Unit(tank, 0, 2, 3), 
      new Unit(infantry, 0, 4, 2),
      new Unit(tank, 0, 1, 1),
    ]
  }

  constructor(){
    this.logicModel = new LogicModel

  }

  getState(): IGameState {
    return this.gameState
  }

  findUnitAt(x: number, y:number): Unit {
    return this.gameState.units.find((unit) => {
      return (unit.gridPosX === x && unit.gridPosY === y)
    })
  }
}