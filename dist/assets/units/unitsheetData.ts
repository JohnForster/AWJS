import ISpritesheetData from '../ISpritesheetData'
// Store these files in assets with their images?
const unitsheetData: ISpritesheetData = {
  path: 'assets/units/unitSprites.png',
  data: {
    type: 'units',
    sprites: {
      0: {
        name: 'infantary_orange',
        x: 24,
        y: 4,
        w: 14,
        h: 15,
        ax: 0,
        ay: 1,
      },
      4: {
        name: 'tank_orange',
        x: 96,
        y: 6,
        w: 13,
        h: 13,
        ax: 2,
        ay: 1,
      },
    }
  }
}

export default unitsheetData