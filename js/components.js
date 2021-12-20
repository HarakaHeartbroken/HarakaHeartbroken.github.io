// a series of component definitions (Essentially classes)
//TODO: Create "Tile" component, then subdivide that into "Wall" etc to reduce redundant code
Crafty.c("floorTile", {
    init: function() {
        this.requires('Tile, 2D, Canvas, floor')
      },
})
Crafty.c("horWallTile", {
    init: function() {
        this.requires('Tile, 2D, Canvas, Wall, Collision, horWall')
      },
})
Crafty.c("vertWallTile", {
    init: function() {
        this.requires('Tile, 2D, Canvas, Wall, Collision, vertWall')
      },
})
Crafty.c("topLeftTile", {
    init: function() {
        this.requires('Tile, 2D, Canvas, Wall, Collision, topLeft')
      },
})
Crafty.c("topRightTile", {
    init: function() {
        this.requires('Tile, 2D, Canvas, Wall, Collision, topRight')
      },
})
Crafty.c("bottomLeftTile", {
    init: function() {
        this.requires('Tile, 2D, Canvas, Wall, Collision, bottomLeft')
      },
})
Crafty.c("bottomRightTile", {
    init: function() {
        this.requires('Tile, 2D, Canvas, Wall, Collision, bottomRight')
      },
})
Crafty.c("leftLaserTile", {
    init: function() {
        this.requires('Tile, 2D, Canvas, , leftLaser, Collision, Wall')
      },
})
Crafty.c("redLaserTile", {
    init: function() {
        this.requires('Tile, 2D, Canvas, redLaser, Collision, Hazard')
      },
})
Crafty.c("rightLaserTile", {
    init: function() {
        this.requires('Tile, 2D, Canvas, rightLaser, Collision, Wall')
      },
})
Crafty.c("computerTerminalTile", {
    init: function() {
        this.requires('Tile, 2D, Canvas, , termOn, Collision, Interactible')
      },
})
Crafty.c("gooTile", {
    init: function() {
        this.requires('Tile, 2D, Canvas, gooPour, Collision, Interactible')
      },
})
Crafty.c("hazardTile", {
        init: function() {
            this.requires('Tile, 2D, Canvas, hazStripe, Collision, Interactible')
          },
});