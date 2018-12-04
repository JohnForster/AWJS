# Stuff in the Model that we have to consider (add to this as necessary)

- Representation and storage of units, terrain (incl. buildings)
- Repr of moves
- All the different actions a particular kind of unit can perform
- Interactions between units of all types, primarily attacking/defending

## Attributes, behaviours

(Some of the following attributes/behaviours will belong elsewhere.)

All unit types have:

- Primary and/or secondary weapon (and efficacy/applicability of those), or none
- Move range
- Vision range (in Fog of War)
- Fuel costs per terrain type (or inability to traverse them)
- Kind(s) of building that can create/resupply/repair it
- Cost

All unit instances have:

- Position
- Owning faction (allegiance)
- Fuel
- Health
- Ammo, if applicable
- Passenger(s), if applicable

All units can:

- Move
- Wait
- Run out of fuel
- Be created
- Be destroyed
- Be resupplied
- Be healed
- Join (when allowed)

Some units can:

- Attack directly after moving (or not moving)
- Attack indirectly instead of moving
- Enter/leave stealth
- Pick up/drop passengers
- Capture buildings
- Resupply others
- Hide during FoW

## Misc notes

In the GBA game, they have charts to show the efficacy of a unit's weapon(s)
against different categories of opponent: foot soldier, land vehicle, ship,
sub, copter, plane.

Likewise, there are charts of terrain fuel costs per "traversal category":
infantry, mech, tires, tracks, air, ship, lander.

## Players

A player/faction has:

- Funds
- Properties, incl. HQ
- Units

## Terrain

A terrain type has:

- Defence rating provided
- Traversal cost to different unit types
