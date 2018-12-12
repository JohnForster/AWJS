import ISpritesheetData from '../ISpritesheetData'
// Store these files in assets with their images?
const uisheetData: ISpritesheetData  = {
  path: 'assets/ui/UISprites.png',
  data: {
    type: 'UI',
    sprites: {
      0: {
        name: 'cursor',
        x: 44,
        y: 6,
        w: 28,
        h: 31,
        ax: -3,
        ay: -3,
      },
      1: {
        name: 'attack_overlay',
        x: 7,
        y: 10,
        w: 16,
        h: 16,
        ax: 0,
        ay: 0,
        alpha: 128,
      }
    }
  }
}

export default uisheetData