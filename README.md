# HarakaHeartbroken.github.io
Final Submission for Milestone Project Webgame
# Milestone-One-ParanoiaX
A top-down sprite-based adventure puzzle game set in the world of Paranoia, in the labrynthine emergency shelter "Complex Alpha", where the color-coded human masses are watched over obsessively and constantly by the all-powerful, utterly benficent, and completely insane AI overlord "Friend Computer".

The year is 2440. It has always been 2440. Friend Computer is a crumbling mass of corrided wires and scrambled code. Friend Computer is flawless and perfect.

Fun is mandatory. Happiness is mandatory. 

ParanoiaX is a puzzle game, with lots of interactive items to find, hidden niches to explore, and devious traps to spring. The player is controlled by the arrow keys, and there is some keyboard input required. 

index.html is the main HTML landing page, and there is a seperate JS directory for the script assets. ParanoiaX.js is the main script, includes the styling and logic for the start, end, and lose screens, as well as the main gameplay screen and player info. 

All assets are drawn from spritesheets included in the main directory. 

components.js has a list of component classes/superclasses to reduce redundancy on other pages.

maps.js contains the tile maps as compound arrays and logic functions to render the maps in visual layers.

crafty.js is a library of the most recent Crafty API, a library used for rendering images onto a virtual canvas.

Upcoming functionalities include: 
cleaner code seperation by creation of "player", "tile", and other component superclasses with common parameters/properties prebuilt.
time and objective based scoring and localdata saves
Deeper and more complex maps and puzzles
Asset collection and management into a subdirectory to leave top directory clean

Written by Christopher Foster for the UNLV Full Stack Development program, 12/2021
Assets drawn from free libraries
