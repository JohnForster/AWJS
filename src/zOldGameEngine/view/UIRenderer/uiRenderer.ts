import { Cursor } from '../../cursor'
import { ISpritesheetData } from '../spritesheets/ISpritesheetData';

// This class is a mess. I think we could fix this by having a UIMap object that
//  acts in the same manner as a terrainMap/entityMap type thing.
// TODO build generic renderer class? Takes in a spriteSheetData object.
export class UIRenderer {
  cursor: Cursor
  lastCursorPosition: {x: number, y:number}
  spritesheetData: ISpritesheetData;
  cursorCanvas: HTMLCanvasElement

  // TODO change UIRenderer to take in some form of UIMap object
  //  that contains all UI data? Or even some generic map object 
  //  that could be used for terrain, units AND UI?
  constructor(cursor:Cursor, spriteSheetData:ISpritesheetData){
    this.spritesheetData = spriteSheetData
    this.cursor = cursor
  }

  // On generic renderer class, render takes in a map
  //  ( eg. UIMap, terrainMap, entityMap) ? 
  render(): HTMLCanvasElement {
    const noMovement = this.cursor.position === this.lastCursorPosition
    if (noMovement) return this.cursorCanvas
    return this.draw()
  }

  private draw(): HTMLCanvasElement {
    const cursorID = 0 // THIS SHOULD NOT BE HARD CODED
    const tempCanvas: HTMLCanvasElement = document.createElement('canvas')
    const tempContext: CanvasRenderingContext2D = tempCanvas.getContext('2d')
    // There's gotta be a better way of doing this. How should the cursor know
    //  how big the tiles are? Should the main renderer decide where to render
    //  the cursor?
    const cursor = this.spritesheetData.data.sprites[0]
    const {x, y} = this.cursor.getTopLeftPixelCoordinates()
    tempContext.putImageData(cursor.imageData, x, y)
    this.cursorCanvas = tempCanvas
    return tempCanvas
  }
}