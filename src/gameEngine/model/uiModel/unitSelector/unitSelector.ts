import Unit from '../../logicModel/unit/unit'
import IUIState from '../IUIState'

export default function unitSelector(uiState: IUIState, unit: Unit): IUIState {
  // Some logic to determine what should be returned when this unit is selected.
  // ie. uiState = {state: inGame, menu: unitMenu: {move, wait, attack}}]
  return uiState
}
