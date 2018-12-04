// Separate these interfaces into multiple files?

export interface ISpritesheetData {
  path: string,
  image?: HTMLImageElement, // String or HTMLImageElement? What generates this object?
  data: {
    type: string // terrain, units, UI etc
    sprites: ISpriteData[],
  }
}

export interface ISpriteData {
  id: number,
  name: string,
  x: number,
  y: number,
  w: number,
  h: number,
  imageData?: ImageData,
}