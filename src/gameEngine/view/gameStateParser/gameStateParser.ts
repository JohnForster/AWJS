import IScreenObjects from "../../model/IScreenObjects";
import IGameState from "../../model/logicModel/IGameState";

export default class GameStateParser {
  static getTerrainScreenObjects (gameState: IGameState): IScreenObjects {
    return { gridElements: gameState.terrain.mapIdGrid }
  }

  static getUnitsScreenObjects (gameState: IGameState): IScreenObjects {
    const unitsAsArray: number[][] = Array(32).fill(undefined).map(x => Array(32))
    gameState.units.forEach((unit) => {
      unitsAsArray[unit.gridPosY][unit.gridPosX] = unit.type.id
    })
    return { gridElements: unitsAsArray }
  }
}