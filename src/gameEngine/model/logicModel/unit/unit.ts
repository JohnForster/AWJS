import { IUnit } from './unitDataStructure'

export default class Unit {
  public static numberOfUnits = 0

  public id: number
  public playerId: number
  public type: IUnit
  public gridPosX: number
  public gridPosY: number
  public currentHealth: number
  public currentFuel: number
  public currentAmmo: number
  public loadedUnits: Unit[] = []
  public hidden: boolean = false

  constructor(unitType: IUnit, playerId: number, x: number, y: number) {
    this.id = Unit.numberOfUnits++
    this.type = unitType
    this.playerId = playerId
    this.gridPosX = x
    this.gridPosY = y

    this.currentHealth = unitType.totalHealth
    this.currentFuel = unitType.maxFuel
    this.currentAmmo = unitType.maxAmmo
  }

  // Or some method like this?
  public destroy() {
    this.gridPosX = this.gridPosY = this.currentAmmo =
    this.currentFuel = this.currentHealth = -1
  }

  public damage(n: number) {
    this.currentHealth -= n
    if (this.currentHealth < 0) { this.destroy() }
  }
}
