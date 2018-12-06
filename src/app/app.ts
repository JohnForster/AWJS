import Engine from '../gameEngine_2/engine'

export default new class App {
  run () {
    const engine = new Engine()
    console.log('Engine set up')
  }
}