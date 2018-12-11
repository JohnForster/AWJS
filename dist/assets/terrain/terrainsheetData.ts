import ISpritesheetData from '../ISpritesheetData'

const terrainsheetData: ISpritesheetData = {
  path: 'assets/terrain/spriteSheet.png',
  data: {
    type: 'terrain',
    sprites: {
      0: {
        name: 'sea',
        x: 340,
        y: 1567,
        w: 16,
        h: 16
      },
      1: {
        name: 'grass',
        x: 217, 
        y: 1567, 
        w: 16, 
        h: 16, 
      },
      // etc. etc.
    }
  }
}

export default terrainsheetData