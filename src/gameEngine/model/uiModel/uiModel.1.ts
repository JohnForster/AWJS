import LogicModel from "../logicModel/logicModel";
import InGameUIObject from "./uiObjects/uiObject";
import Cursor from "./uiObjects/cursor/cursor";
import RangeIndicator from "./uiObjects/rangeIndicator/rangeIndicator";
import IScreenObjects from "../IScreenObjects";
import IGameState from "../logicModel/IGameState";
import Unit from "../logicModel/unit/unit";

import UnitBox from '../../view/subrenderers/uiRenderer/unitBox/unitBox'

// We will have multiple UI states, eg but IGNORE FOR NOW:
// * loading
// * mainMenu
// * inGame

// THIS IS THE IN-GAME UI ONLY

interface InGameUIState {
  unitSelected: Boolean,
  selectedUnit?: Unit,
  
  // Separate UI objects from their location?
  // objects: {
  //   object: InGameUIObject,
  //   gridPosX: number,
  //   gridPosY: number
  // }[]
  objects: InGameUIObject[],
}

export default class InGameUIModel {
  state: InGameUIState
  getState () {
    return this.state
  }
}