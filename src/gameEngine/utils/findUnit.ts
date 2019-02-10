import IGameState from '../model/logicModel/IGameState'
import Unit from '../model/logicModel/unit/unit'

export default function findUnit(gameState: IGameState, x: number, y: number): Unit {
  return gameState.units.find((unit: Unit) => {
    return unit.gridPosX === x && unit.gridPosY === y
  })
}
