import IScreenObject from '../IScreenObject'

export enum uiStates {
  'inGame',
}

export default interface IUIState {
  state: uiStates,
  elements: IScreenObject[]
}
