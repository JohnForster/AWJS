enum unitType {
  infantary,
  vehicle,
  helicopter,
  plane,
  ship,
  submarine,
}

enum weaponType {
  direct,
  indirect,
}

enum unitAbility {
  capture,
  dive,
  load,
}

interface IUnit {
  id: number,
  name: string,
  totalHealth: number,
  type: unitType,
  visionRange: number,
  movementRange: number,
  maxFuel: number,
  maxAmmo: number,
  weapons: {
    primary: {
      name: string,
      type: weaponType,
      range?: number,
      baseDamage: number,
      efficacy: {
        infantary: number,
        vehicle: number,
        helicopter: number,
        plane: number,
        ship: number,
        submarine: number,
      },
    },
    secondary?: {
      name: string,
      type: weaponType,
      range?: number,
      baseDamage: number,
      efficacy: {
        infantary: number,
        vehicle: number,
        helicopter: number,
        plane: number,
        ship: number,
        submarine: number,
      },
    },
  },
  capacity?: number,
  abilities: unitAbility[],
}
