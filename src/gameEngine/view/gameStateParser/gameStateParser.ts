import IScreenObject from '../../model/IScreenObject'
import IGameState from '../../model/logicModel/IGameState'

export default class GameStateParser {
  public static getTerrainScreenObjects(gameState: IGameState): IScreenObject[] {
    const terrainTiles: IScreenObject[] = []
    gameState.terrain.mapIdGrid.forEach((row, rowNumber) => {
      row.forEach((id, colNumber) => {
        terrainTiles.push({id, x: colNumber, y: rowNumber, z: 4, isVisible: true})
      })
    })
    return terrainTiles
  }

  public static getUnitsScreenObjects(gameState: IGameState): IScreenObject[] {
    const units = gameState.units.map((unit) => {
      return {
        id: unit.type.id,
        isVisible: true,
        x: unit.gridPosX,
        y: unit.gridPosY,
        z: 3,
      }
    })
    return units
  }
}
