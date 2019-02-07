import { IUnit, unitKind, weaponType } from '../../gameEngine/model/logicModel/unit/unitDataStructure'

const tank: IUnit = {
  id: 4,
  name: 'tank',
  cost: 5000,
  totalHealth: 100,
  type: unitKind.vehicle,
  visionRange: 3,
  movementRange: 5,
  maxFuel: 80,
  maxAmmo: 8,
  weapons: {
    primary: {
      name: 'cannon',
      type: weaponType.direct,
      baseDamage: 70,
      efficacy: {
        infantary: 1,
        vehicle: 1,
        helicopter: 1,
        plane: 1,
        ship: 1,
        submarine: 1,
      },
    },
    // Machine gun goes here
    // secondary?: {
    //   name: string,
    //   type: weaponType,
    //   range?: number,
    //   baseDamage: number,
    //   efficacy: {
    //     infantary: number,
    //     vehicle: number,
    //     helicopter: number,
    //     plane: number,
    //     ship: number,
    //     submarine: number,
    //   },
    // },
  },
  abilities: [],
}

export default tank
