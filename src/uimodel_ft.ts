// /* tslint:disable */

// import UIModel from "./gameEngine_2/model/uiModel/uiModel";
// import LogicModel from "./gameEngine_2/model/logicModel/logicModel";

// const logicModel = new LogicModel
// const uiModel = new UIModel(logicModel)

// uiModel.state // loading
// uiModel.state // mainmenu, options: Map Maker, Vs, Load Game, View Replays etc.
// uiModel.choose('New Game')
// uiModel.state // newGameMenu, options: Choose Map, back
// uiModel.choose('Choose Map')
// uiModel.state // mapMenu, options: [map array]
// uiModel.chooseMap(23456)
// uiModel.state // confirmMap options: Begin Game, back
// uiModel.choose('Begin game')
// uiModel.state // inGame, uiState = { cursorLocation: [0,1], hoverUnit: tank3 }
// uiModel.checkAttackRange(tank3) // Return array of coordinates? Return UIState { [[0, 1, 1, 1, 0],]}?
// uiModel.getStats(apc2) // => { id: 434, team: 1, health: 56, fuel: 30, ammo: 0 }
// uiModel.select(apc2)
// uiModel.state // unitSelected, unit = apc2,  movableSquares = <array of coordinates>
// uiModel.move([1,2])
// uiModel.state // unitMoving, initialSquare = [1,1], path = [[1,2]]
// uiModel.move([2,2])
// uiModel.state // unitMoving, initialSquare = [1,1], path = [[1,2], [2,2]]
// uiModel.move([2,1])
// uiModel.state // unitMoving, initialSquare = [1,1], path = [[1,2], [2,2], [2,1]]
// uiModel.confirmMove([2,1], [[1,2], [2,2], [2,1]])
// uiModel.state // unitMoving, <state>
