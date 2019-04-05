type inputs = 'up' | 'down' | 'left' | 'right'

type uiContexts = 'mainMenu' | 'subMenu'

class Parser {
  private contexts: {[context in uiContexts]: {[i in inputs]: () => void}} = {
    mainMenu: {
      up: () => {},
      down: () => {},
      left: () => {},
      right: () => {},
    },
    subMenu: {
      up: () => {},
      down: () => {},
      left: () => {},
      right: () => {},
    },
  }
}