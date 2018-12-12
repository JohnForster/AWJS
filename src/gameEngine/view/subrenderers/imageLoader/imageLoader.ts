import ISpritesheetData from 'src/assets/ISpritesheetData'

export default class ImageLoader {
  static async load(...spritesheetDataArray: ISpritesheetData[]) {
    spritesheetDataArray.forEach(async (spritesheetData) => {
      const spritesheet = <HTMLImageElement> await ImageLoader.addImageProcess(spritesheetData.path)
      const tempContext = ImageLoader.getContext(spritesheet)
      for (let id in spritesheetData.data.sprites) {
        let sprite = spritesheetData.data.sprites[id]
        sprite.imageData = ImageLoader.getImageData(sprite, tempContext)
      }
    })
  }

  static getContext(image: HTMLImageElement){
    const canvas = ImageLoader.setupCanvas(image)
    const context = canvas.getContext('2d');
    context.drawImage(image, 0, 0)
    return context
  }

  static setupCanvas(image:HTMLImageElement) {
    const canvas:HTMLCanvasElement = document.createElement('canvas')
    canvas.width = image.width;
    canvas.height = image.height;
    return canvas
  }

  static addImageProcess(src: string) {
    return new Promise((resolve, reject) => {
      const img:HTMLImageElement = new Image();
      img.onload = () => resolve(img);
      img.onerror = (err) => reject(err);
      img.src = src;
    });
  }

  static getImageData (sprite: ISpritesheetData['data']['sprites'][0], context:CanvasRenderingContext2D):ImageData {
    const {x, y, w, h} = sprite
    let imageData = context.getImageData(x, y, w, h)
    if (sprite.alpha) {
      for (let i = 3; i < imageData.data.length; i += 4) {
        imageData.data[i] = sprite.alpha
      }
    }
    return imageData
  }
}