// ? Refactor this to be IScreenObject[]?
export default interface IScreenObject {
  id: number,
  isVisible: boolean,
  x: number,
  y: number,
  z?: number,
}
