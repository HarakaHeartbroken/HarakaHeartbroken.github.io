# HarakaHeartbroken.github.io
Final Submission for Milestone Project Webgame
# Milestone-One-ParanoiaX
First milestone project
paranoia roguelike game- start with the RPS game screen on like green/black LED computer, then pull out to top-down pixel art (hopefully from free file library).

Sierra adventure game style, basically closed room puzzles with lots of objects to pick up and use. Combat would be a "stretch goal", not necessary but would be fun to have if I go nuts

Functionality list:
- customizable protagonist, including a name in the correct Name-Clearance-SectorTLA format. Stretch goal to be able to unlock characters with higher starting clearance than red. Stretch goal for infrared joke mode/ending.
- Protagonist should have an inventory and character sheet detailing their traits and history- basically console.log achievements/record
- A list of past protagonists and their fates
- Protagonist should be freely movable in the world as per story/game state limitations. and able to interact with objects, areas of interest, and NPCs.
- Inventory and/or traits should be usable on  the objects et al, and receive responses, including changing game state and character traits
- There should be at least a single full room available with a challenge to overcome and multiple paths to success or failure. 


Stretch Goals:
- Rogue-Lite metagame, lasting unlocks saved to local data. Clearance level unlocks especially. 
- Combat system with game state changes (Try not to use the nuke hand grenade except on the teleporter)
- Two/More Player Mode
- Randomized NPC and NPC interactions based on subfaction and traits
- sprite animation via Flash/Actionscript

Ideas
XY coordinate "grid" of old school dungeon 30x30 rooms, consoles let you move around faster if it's big enough as a stretch goal. Doors at each exit are interactables that if passed set you to the correct next state. 
"bounded web" of game states/story paths for basic design, lots of objects for fun interactions, several correct answers for any problem, but:

A
B    C    D
E    F    G
H    I    J
K
A leads to B, C, or D. B leads to E or F; C leads to E, F, or G; D leads to F or G. Allows for a feeling of freedom without having a million different locations.
Try to make game state as boolean as possible to save yourself work- this is a prototype and concept, not finished game. The background is always the same with new layers/doors/objects/NPCs. Rooms are things like "Guard: true; power: true; Clearance: red;" etc, spawning the corresponding interactibles and modifying game state/starting prompts that match. 
Give each room a page to start for clarity and documentation, then parse it down from there towards the end into a single set of documents. 







File Needs:

html page for launching game

css for game window styling

assets folder with all character subfolders and assets

JS for RPS intro

JS? for background room styling, or CSS?

JS for interactible... tables? Whatever. Database of (if) (selector)object is used on (specific selector) NPC (then) do A (else if) (selector) NPC do B... yadda yadda. (dialogue)Trees for every NPC's interactions, kinda like:
greetings -> present "chapter" problem -> radio input of dialogue/interactions -> present object/trait -> change gamestate, give hint, easter egg, etc -> attempt to solve chapter problem -> solve/reject/easter egg...

CSS for menu screens such as character selection/customization/saves

JS for saves

JS for moving around the map

JS for user input to open menu/close menu/menu interactions



Sprint Summary:

build demo page (Working skeleton from browser game module)
    code for background images
    Code for movement
    code for inventory
    code for interactibles
    Code for local storage/game menu

expand demo page to Module 1 functionality
    Node tree for story/gameplay 

Finish styling/game functionality

Module 2+ skeleton


    
