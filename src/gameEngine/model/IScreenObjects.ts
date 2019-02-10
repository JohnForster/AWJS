// ? Refactor this to be IScreenObject[]?
export default interface IScreenObjects {
  elements: {id: number, isVisible: boolean, x: number, y: number, z?: number}[],
  // Remove gridElements when done
  // gridElements?: number[][],
  // nonGridElements?: {id:number, x: number, y: number}[]
}
