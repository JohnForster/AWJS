// move exports to separate files?

export enum unitKind {
  'infantary',
  'vehicle',
  'helicopter',
  'plane',
  'ship',
  'submarine',
}

export enum weaponType {
  'direct',
  'indirect',
}

export enum unitAbility {
  'capture',
  'dive',
  'load',
}
// Static properties
export interface IUnit {
  id: number,
  name: string,
  totalHealth: number,
  type: unitKind,
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
