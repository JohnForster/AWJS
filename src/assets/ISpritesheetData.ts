// Separate these interfaces into multiple files?

export default interface ISpritesheetData {
  path: string,
  image?: HTMLImageElement, // String or HTMLImageElement? What generates this object?
  data: {
    type: string // terrain, units, UI etc
    // Perhaps sprites should be an object rather than an array, with the id being the key.
    // This avoids duplicate id values.
    sprites: {
      id: number,
      name: string,
      x: number,
      y: number,
      w: number,
      h: number,
      imageData?: ImageData,
    }[]
  }
}
