import ISpritesheetData from 'src/assets/ISpritesheetData'

export default class ImageLoader {
  public static async load(...spritesheetDataArray: ISpritesheetData[]) {
    spritesheetDataArray.forEach(async (spritesheetData) => {
      const spritesheet = await ImageLoader.addImageProcess(spritesheetData.path) as HTMLImageElement
      const tempContext = ImageLoader.getContext(spritesheet)
      for (const id in spritesheetData.data.sprites) {
        const sprite = spritesheetData.data.sprites[id]
        sprite.imageData = ImageLoader.getImageData(sprite, tempContext)
      }
    })
  }

  public static getContext(image: HTMLImageElement) {
    const canvas = ImageLoader.setupCanvas(image)
    const context = canvas.getContext('2d');
    context.drawImage(image, 0, 0)
    return context
  }

  public static setupCanvas(image: HTMLImageElement) {
    const canvas: HTMLCanvasElement = document.createElement('canvas')
    canvas.width = image.width;
    canvas.height = image.height;
    return canvas
  }

  public static addImageProcess(src: string) {
    return new Promise((resolve, reject) => {
      const img: HTMLImageElement = new Image();
      img.onload = () => resolve(img);
      img.onerror = (err) => reject(err);
      img.src = src;
    });
  }

  public static getImageData(sprite: ISpritesheetData['data']['sprites'][0], context: CanvasRenderingContext2D): ImageData {
    const {x, y, w, h} = sprite
    return context.getImageData(x, y, w, h)
  }
}
