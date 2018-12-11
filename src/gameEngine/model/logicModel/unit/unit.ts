import { IUnit } from "./unitDataStructure";

export default class Unit {
  id: number
  playerId: number
  type: IUnit
  gridPosX: number
  gridPosY: number
  currentHealth: number
  currentFuel: number
  currentAmmo: number
  loadedUnits: Unit[] = []
  hidden: boolean = false

  constructor(unitType: IUnit, playerId: number, x: number, y: number){
    // this.id = someStaticIDGenerationMethod()
    this.type = unitType
    this.playerId = playerId
    this.gridPosX = x
    this.gridPosY = y

    this.currentHealth = unitType.totalHealth
    this.currentFuel = unitType.maxFuel
    this.currentAmmo = unitType.maxAmmo
  }
  // Or some method like this?
  destroy () {
    this.gridPosX = this.gridPosY = this.currentAmmo = 
    this.currentFuel = this.currentHealth = -1
  }

  damage (n: number) {
    this.currentHealth -= n
    if (this.currentHealth < 0) this.destroy()
  }
}