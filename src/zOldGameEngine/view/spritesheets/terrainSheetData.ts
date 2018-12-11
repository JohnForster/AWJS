import { ISpritesheetData } from './ISpritesheetData'

const terrainsheetData: ISpritesheetData = {
  path: 'assets/spriteSheet.png',
  data: {
    type: 'terrain',
    sprites: [
      {
        id: 0, 
        name: 'grass',
        x: 217, 
        y: 1567, 
        w: 16, 
        h: 16, 
      },
      {
        id: 1,
        name: 'sea',
        x: 340,
        y: 1567,
        w: 16,
        h: 16
      }
      // etc. etc.
    ]
  }
}

export default terrainsheetData