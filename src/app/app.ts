import Engine from '../gameEngine/engine'

export default new class App {
  run () {
    const engine = new Engine()
    engine.run()
  }
}