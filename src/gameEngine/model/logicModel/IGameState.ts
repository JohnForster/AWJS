import Player from './player/player';
import Unit from './unit/unit';

export default interface IGameState {
  gameID: number,
  numberOfPlayers: number,
  players: {
    id: number
    player: Player, // class
    money: number,
    color: string, // enum
  }[],
  terrain: {
    sizeX: number, // might be unnecessary as can be got from mapIdGrid[0].length
    sizeY: number,
    mapIdGrid: number[][],
  },
  units: Unit[], // Or do we want our units to be done by grid?
}
