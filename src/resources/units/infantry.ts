import { IUnit, unitKind, weaponType } from "../../gameEngine/model/logicModel/unit/unitDataStructure";

const infantary: IUnit = {
  id: 0,
  name: 'infantry',
  cost: 1000,
  totalHealth: 80,
  type: unitKind.infantary,
  visionRange: 3,
  movementRange: 3,
  maxFuel: 60,
  maxAmmo: 8,
  weapons: {
    primary: {
      name: 'machine gun',
      type: weaponType.direct,
      baseDamage: 30,
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

export default infantary