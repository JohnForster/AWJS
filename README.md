# Advance Wars JS
## Usage
* Clone this repo.
* Run `yarn install` (requires yarn)
* Run `yarn host`
* Navigate to `localhost:8080`

## Structure
Something like this?
* Engine (Responsible for drawing to screen, UI, rendering sprites etc. What the user interacts with)
* Game (Where the main logic and data resides, contains the rules that the Engine has to abide by)
* Server
* AI

### Engine
Split into:
* Renderer class. Paints to canvas.
  * Split into BgRenderer, UnitRenderer, UIRenderer etc?

### Game

