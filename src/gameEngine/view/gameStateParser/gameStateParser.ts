import IScreenObjects from '../../model/IScreenObjects'
import IGameState from '../../model/logicModel/IGameState'

export default class GameStateParser {
  public static getTerrainScreenObjects(gameState: IGameState): IScreenObjects {
    const terrainTiles: {id: number, x: number, y: number, z: number}[] = []
    gameState.terrain.mapIdGrid.forEach((row, rowNumber) => {
      row.forEach((id, colNumber) => {
        terrainTiles.push({id, x: colNumber, y: rowNumber, z: 4})
      })
    })
    return { elements: terrainTiles }
  }

  public static getUnitsScreenObjects(gameState: IGameState): IScreenObjects {
    const units = gameState.units.map((unit) => {
      return {
        id: unit.type.id,
        x: unit.gridPosX,
        y: unit.gridPosY,
        z: 3,
      }
    })
    return { elements: units }
  }
}
