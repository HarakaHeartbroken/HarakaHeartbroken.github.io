// A series of map arrays that represent rendering layers of the game screen.

// Map Key:
// 00- empty Tile
// 01- horizontal wall
// 02- vertical wall
// 03- top left corner
// 04- top right corner
// 05- interior wall
// 06- bottom left corner
// 07- bottom right corner
// 08- Left laser emitter
// 09- laser beam
// 10- right laser emitter
// 11- computer terminal
// 12- green goo
// 13-


var backMap = [
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00]
  ];


var demoMap = [
    [03,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,04],
    [02,12,12,00,00,00,00,00,00,00,02,13,13,02,00,00,00,00,00,00,00,14,00,02],
    [02,00,00,00,00,00,00,00,00,00,02,00,00,02,00,00,00,00,00,00,00,00,00,02],
    [02,00,00,00,00,00,00,00,00,00,02,00,00,02,00,00,00,00,00,00,00,00,00,02],
    [02,00,00,00,00,00,00,00,00,00,02,00,00,02,00,00,00,00,00,00,00,00,00,02],
    [02,00,00,00,00,00,00,00,00,00,02,00,00,02,00,00,00,00,00,00,00,00,00,02],
    [02,00,00,00,00,00,00,03,01,01,07,00,00,06,01,01,04,00,00,00,00,00,00,02],
    [02,00,00,00,00,00,00,02,00,00,00,00,00,00,00,00,02,00,00,00,00,00,00,02],
    [02,00,00,00,00,00,00,02,00,00,00,00,00,00,00,00,02,00,00,00,00,00,00,02],
    [02,00,00,00,00,00,00,06,01,01,04,00,00,03,01,01,07,00,00,00,00,00,00,02],
    [02,00,00,00,00,00,00,00,11,00,02,00,00,02,00,00,00,00,00,00,00,00,00,02],
    [02,00,00,00,00,00,00,00,00,00,02,00,00,02,00,00,00,00,00,00,00,00,00,02],
    [02,00,00,00,00,00,00,00,00,00,08,09,09,10,00,00,00,00,00,00,00,00,00,02],
    [02,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,02],
    [02,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,02],
    [06,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,07]
  ];

  var decMap = [
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00]
  ];

  // takes a given array map and renders it according to the map key/tile definitions
// at the z-index passed

// TODO: Refactor to case switch or other cleaner instead of 20x else if statements
// function F => (name, x, y, w, h)
// switch(map[i][j]){

    // case(00) 
    // case(01)
    // case(10)
    // etc

// something like Crafty.e(switch(day[i][j])) since all the normal attributes are the same?
// could use something similiar to tag NPCs once created

//} 


function mapRender(map, z){
    for(i = 0; i<map.length; i++){
        for(j = 0; j<map[i].length; j++){
            if(map[i][j] === 00){
                Crafty.e("floorTile")
                .attr({x: (16*j), y: (16*i), z: z, w: 16, h: 16})
            }
            else if(map[i][j] === 01){
                Crafty.e("horWallTile")
                .attr({x: (16*j), y: (16*i), z: z, w: 16, h: 16})
            }
            else if(map[i][j] === 02){
                Crafty.e("vertWallTile")
                .attr({x: (16*j), y: (16*i), z: z, w: 16, h: 16})
            }
            else if(map[i][j] === 03){
                Crafty.e("topLeftTile")
                .attr({x: (16*j), y: (16*i), z: z, w: 16, h: 16})
            }
            else if(map[i][j] === 04){
                Crafty.e("topRightTile")
                .attr({x: (16*j), y: (16*i), z: z, w: 16, h: 16})
            }
            else if(map[i][j] === 05){
                Crafty.e("interiorWallTile")
                .attr({x: (16*j), y: (16*i), z: z, w: 16, h: 16})
            }
            else if(map[i][j] === 06){
                Crafty.e("bottomLeftTile")
                .attr({x: (16*j), y: (16*i), z: z, w: 16, h: 16})
            }
            else if(map[i][j] === 07){
                Crafty.e("bottomRightTile")
                .attr({x: (16*j), y: (16*i), z: z, w: 16, h: 16})
            }
            else if(map[i][j] === 08){
                Crafty.e("leftLaserTile")
                .attr({x: (16*j), y: (16*i), z: z, w: 16, h: 16})
            }
            else if(map[i][j] === 09){
                Crafty.e("redLaserTile")
                .attr({x: (16*j), y: (16*i), z: z, w: 16, h: 16})
                .addComponent("laserBeam")
            }
            else if(map[i][j] === 10){
                Crafty.e("rightLaserTile")
                .attr({x: (16*j), y: (16*i), z: z, w: 16, h: 16})
            }
            else if(map[i][j] === 11){
                Crafty.e("computerTerminalTile")
                .attr({x: (16*j), y: (16*i), z: z, w: 16, h: 16})
            }
            else if(map[i][j] === 12){
                Crafty.e("gooTile")
                .attr({x: (16*j), y: (16*i), z: z, w: 16, h: 16})
            }
            else if(map[i][j] === 13){
                Crafty.e("hazardTile")
                .attr({x: (16*j), y: (16*i), z: z, w: 16, h: 16})
            }
            else if(map[i][j] === 14){
                Crafty.e("buttonTile")
                .attr({x: (16*j), y: (16*i), z: z, w: 16, h: 16})
            }

        }
    } 
}