# Advance Wars JS
## Usage
* Clone this repo.
* Run `yarn install` (requires yarn)
* Run `yarn host`
* Navigate to `localhost:8080`

## Structure
Something like this?
* Engine (Responsible for drawing to screen, UI, rendering sprites etc. What the user interacts with) (Client side eventually)
* Game (Where the main logic and data resides, contains the rules that the Engine has to abide by) (Server side eventually)
* Server
* AI

### Engine
Split into:
* Renderer class. Paints to canvas.
  * Split into BgRenderer, UnitRenderer, UIRenderer etc?

### Game



## TODO
* Engine
  * Refactor Engine into Renderer and Controller
  * Move cursor around map
  * Draw units to canvas
  * Select units with cursor
  * Split spritesheet into multiple sheets (inc. dealing with transparency)
  * Import more tiledata from spritesheet
  * Rework how tile/sprite data is loaded/stored
    * Store tiledata along with name etc. in a JSON
    * Store spritedata along with name etc. in a JSON?
  * Refactor refactor refactor

* Game
  * Units move
  * Unit class
  * Terrain class?
  * Damage Calculation
  * 