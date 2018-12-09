// Separate these interfaces into multiple files?

export default interface ISpritesheetData {
  path: string,
  image?: HTMLImageElement, // String or HTMLImageElement? What generates this object?
  data: {
    type: string // terrain, units, UI etc
    sprites: {
      [keyname: number]: {
        name: string,
        x: number,
        y: number,
        w: number,
        h: number,
        ax?: number,
        ay?: number,
        imageData?: ImageData,
      }
    }
  }
}
