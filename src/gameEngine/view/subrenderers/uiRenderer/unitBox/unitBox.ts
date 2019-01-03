import Unit from '../../../../model/logicModel/unit/unit'
import IScreenObjects from '../../../../model/IScreenObjects'

// Terrible code
export default class UnitBox {
  static makeBox(unit: Unit): HTMLCanvasElement[] {
    const bg = document.createElement('canvas')
    bg.height = 128
    bg.width = 64
    const bgContext = bg.getContext('2d')
    bgContext.globalAlpha = 0.7
    bgContext.fillRect(0,0,bg.width,bg.height)
    
    const canvas = document.createElement('canvas')
    canvas.height = bg.height
    canvas.width = bg.width
    const context = canvas.getContext("2d");
    context.font = "10px Menlo";
    context.fillStyle = 'white'
    const h = (canvas.width - unit.type.name.length * 6) / 2
    context.fillText(unit.type.name,h,15);
    
    bgContext.drawImage(canvas, 0, 0)

    return  [bg, canvas] 
  }
}