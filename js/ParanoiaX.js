Crafty.init(600, 400,);

// a series of asset definitions using sprite tilesheet terminology
var map_assets = {
    "sprites": {
        "tileset.png": {
            tile: 16,
            tileh: 16,
            map: {
                floor: [2,2],
                vertWall: [2,0],
                horWall: [3,0],
                topLeft: [1,0],
                topRight: [0,3],
                bottomLeft:[0,1],
                bottomRight:[1,1]
            }
        }
    }
};
var button_assets = {
    "sprites": {
        "button.png": {
            tile: 16,
            tileh: 16,
            map: {
                buttonUp: [0,0],
                buttonDown: [1,0],
            }
        }
    }
};
var red_assets = {
    "sprites": {
        "redshirt.png": {
            tile: 16,
            tileh: 16,
            map: {
                    redwalk_down: [1, 0],
                    redwalk_up: [1, 1],
                    redwalk_left: [1, 2],
                    redwalk_right: [1, 3],
                    redstatic: [0, 0]
            }
        }
    }
};

var green_assets = {
    "sprites": {
        "greenshirt.png": {
            tile: 16,
            tileh: 16,
            map: {
                    greenwalk_down: [1, 0],
                    greenwalk_up: [1, 1],
                    greenwalk_left: [1, 2],
                    greenwalk_right: [1, 3],
                    greenstatic: [0, 0]
                }
        }
    }
};
   
var computer_assets = {
    "sprites": {
        "computer.png": {
            tile: 16,
            tileh: 16,
            map: {
                    termOn: [0, 0],
                    termOff: [1, 0]
                }
        }
    }
};

var environmental_assets = {
    "sprites": {
        "doodads.png": {
            tile: 16,
            tileh: 16,
            map: {
                    gooPour: [0, 0],
                    gooSpat1: [5, 3],
                    radSymbol: [3, 1],
                    blood1: [2, 0],
                    blood2: [3, 0],
                    blood3: [4, 0],
                    blood4: [5, 0],
                    hazStripe: [0, 3],
                    extinguisher: [2, 3],
                    hazSymbol: [3, 1],
                    readOut: [5, 1]
                }
        }
    }
};

var laser_assets = {
    "sprites": {
        "lasers.png": {
            tile: 16,
            tileh: 16,
            map: {
                    rightLaser: [9, 5],
                    leftLaser: [9, 6],
                    redLaser: [1, 0],
                }
        }
    }
};

// Instructs the canvas to load all of the defined assets for use
Crafty.load(red_assets);
Crafty.load(green_assets);
Crafty.load(map_assets);
Crafty.load(computer_assets);
Crafty.load(environmental_assets);
Crafty.load(laser_assets);
Crafty.load(button_assets);












// Defines a series of screens for various gamestate purposes, including the main "gameScreen"

// Start screen, names and explains game, listens for keydown to move to gameScreen
Crafty.defineScene("startScreen", function(){
    Crafty.background("#000");    
    var decoration1 = Crafty.e("2D, Canvas, hazSymbol")
        .attr({w: 32, h: 32, x: 40, y: 40})
    var decoration2 = Crafty.e("2D, Canvas, hazSymbol")
        .attr({w: 32, h: 32, x: 490, y: 40})
    var decoration3 = Crafty.e("2D, Canvas, hazSymbol")
        .attr({w: 32, h: 32, x: 40, y: 300})
    var decoration4 = Crafty.e("2D, Canvas, hazSymbol")
        .attr({w: 32, h: 32, x: 490, y: 300})
    var decoration5 = Crafty.e("2D, Canvas, blood1")
        .attr({w: 32, h: 32, x: 240, y: 75})
    var decoration6 = Crafty.e("2D, Canvas, blood2")
        .attr({w: 32, h: 32, x: 95, y: 170})
    var welcomeText = Crafty.e("2D, DOM, Text")
        .attr({w: 150, h: 20, x: 200, y: 120,})
        .text("Welcome to Alpha Complex, Citizen! Friend Computer would like" +
        " to remind you that you may control your character with the arrow keys!" +
        " Reminder: Happiness is Mandatory. Fun is Mandatory. Unhappiness is TREASON.")
        .textColor("#0fdc13");
    var startText = Crafty.e("2D, DOM, Text")
        .attr({w: 150, h: 20, x: 200, y: 220})
        .text("Your job is to get to the door at the end of the hall." +
        " Press any key to start the game!")
        .textColor("#0fdc13");
    welcomeText.bind('KeyDown', function(evt){
        console.log("Registered key input")
        Crafty.enterScene("gameScreen");
    });
});
// The main game, defines the player as a 16x16 rectangle with fourway control and handled 
// directional image control, defines a series of responses for player events and animations
// for various gamestates
Crafty.defineScene("gameScreen", function(){
    mapRender(backMap)
    mapRender(demoMap)

    Crafty.e("2d, Canvas, greenstatic, SpriteAnimation, Collision, NPC")
    .attr({x: 160, y: 110, z: 2, w: 16, h: 16})
    
var player = Crafty.e("2D, Canvas, redstatic, SpriteAnimation, Collision, Fourway, Player")
    .attr({lives: 6, x: 50, y: 50, z: 2, w: 16, h: 16})
    .fourway(100)
    .onHit('Wall', function(evt){
      console.log("Hit a wall at X = "+ this.x + ", Y = " + this.y)
      this.shift(2*evt[0].nx, 2*evt[0].ny)
    })
    .onHit('hazardTile', function(evt){
        console.log("Made it to the door at "+ this.x + ", Y = " + this.y + "!")
        window.alert("You made it! You've won the game!")
        Crafty.enterScene("gameWin")
    })
    .onHit('laserBeam', function(evt){
      console.log("Got blowed up at X = "+ this.x + ", Y = " + this.y + "!")
      this.lives -= 1;
      if(this.lives > 0){
      window.alert(
          "You stepped into a laser above your clearance level!" + 
          " Your sizzling ashes slowly sink to the floor. You have " +
          this.lives + 
          " clones remaining!")
      console.log(this.lives);
      player.animate("death", 2)
      this.shift(2*evt[0].nx, 2*evt[0].ny)
      }
      else{
          Crafty.enterScene("gameOver")
      }
    })
    .onHit("Interactible", function(){
        console.log("Hit an interactible!")
    })
    .onHit('computerTerminalTile', function(evt){
        this.shift(2*evt[0].nx, 2*evt[0].ny)
        window.alert("That's a computer!")
        let chat1 = window.prompt("Do you want to speak to Friend Computer? Enter 'YES' or 'NO' now.", "YES")
        switch(chat1){
            case "YES":
                let chat2 = window.prompt("'H4ll0!' Friend Computer challenges you to a game, citizen!" + 
                " Do you choose ROCK, PAPER or SCISSORS?")
                switch(chat2){
                    case "ROCK": 
                        this.lives -= 1;
                        if(this.lives>0){
                            window.alert("Friend Computer has selected: PAPER. You lose, citizen, and that " + 
                        "must make you unhappy. Please report for Mandatory Happiness Re-Edutainment at once.");
                            player.animate("death", 2);
                            window.alert("You have " + this.lives + " clones remaining!");
                        }
                        else{
                            player.animate("death", 2);
                            Crafty.enterScene("gameOver");
                        }
                    break;
                    case "PAPER":
                        this.lives -= 1;
                        if(this.lives>0){
                            window.alert("Friend Computer has selected: SCISSORS, and also you for Reactor " +
                            "Shielding Duty. Please report to the Reactor Core at once.");
                            player.animate("death", 2);
                            window.alert("You have " + this.lives + " clones remaining!");
                        }
                        else{
                            player.animate("death", 2);
                            Crafty.enterScene("gameOver");
                        }
                    break;
                    case "SCISSORS":
                        this.lives -= 1;
                        if(this.lives>0){
                            window.alert("Friend Computer has selected: ROCK. Friend Computer is now delivering:" +
                            " ROCK. Please do not move.");
                            player.animate("death", 2);
                            window.alert("You have " + this.lives + " clones remaining!");
                        }
                        else{
                            player.animate("death", 2);
                            Crafty.enterScene("gameOver");
                        }
                    break;
                }
            case "NO":
                window.alert("You wisely realize Friend Computer has far better things to do than talk to you.")
        }
    })
    .onHit("NPC", function(evt){
        console.log("Hit an NPC at X = "+ this.x + ", Y = " + this.y + "!")
        window.alert("Hey! Don't push me!")
        this.shift(2*evt[0].nx, 2*evt[0].ny)
    })
    .onHit("buttonTile", function(evt){
        Crafty.e("2d, Canvas, buttonDown, Collision, Wall")
        .attr({x: 336, y: 16, z: 2, w: 16, h: 16})
        console.log("Hit an button at X = "+ this.x + ", Y = " + this.y + "!")
        window.alert("You pressed a big red button! There's an ominous rumbling of machinery powering up and...")
        window.alert("...")
        window.alert("Nothing happens. Well, that was disappointing.")
        this.shift(2*evt[0].nx, 2*evt[0].ny)
        })
    .onHit("gooTile", function(evt){
        console.log("Hit goo at X = "+ this.x + ", Y = " + this.y + "!")
        this.shift(2*evt[0].nx, 2*evt[0].ny)
        window.alert("You got covered in noxious, acidic goo! That can't be good." +
        " It is a good color on you, though.")
        player.animate("death", 2)
        player.destroy()
        var greenPlayer = Crafty.e("2D, Canvas, greenstatic, Collision, SpriteAnimation, Fourway, Player")
          .attr({x: this.x, y: this.y, z: 2, w: 16, h: 16})
          .fourway(100)
        .onHit('hazardTile', function(evt){
            console.log("Made it to the door at "+ this.x + ", Y = " + this.y + "!")
            window.alert("You made it! You've won the game!")
            Crafty.enterScene("gameWin")
        })
        .onHit('computerTerminalTile', function(evt){
            this.shift(2*evt[0].nx, 2*evt[0].ny)
            window.alert("That's a computer!")
            window.prompt("Do you want to speak to Friend Computer? Enter 'YES' or 'NO' now.")
        })
        .onHit('gooTile', function(evt){
            this.shift(2*evt[0].nx, 2*evt[0].ny)
            window.alert("You don't need any more goo. Probably mutate you, anyways.")
        })
        .onHit('Wall', function(evt){
            console.log("Hit a wall at X = "+ this.x + ", Y = " + this.y)
            this.shift(2*evt[0].nx, 2*evt[0].ny)
          })
        .onHit('laserBeam', function(evt){
            window.alert("You stepped into a laser above your clearance level! " +
            "Buuut the green goo covering you seems to have faked Green Clearance for you. " +
            "Lucky you.")
            this.shift(-30*evt[0].nx, -30*evt[0].ny)
        })    
        .onHit("NPC", function(evt){
            console.log("Hit an NPC at X = "+ this.x + ", Y = " + this.y + "!")
            window.alert("Hey! Don't push me!")
            this.shift(2*evt[0].nx, 2*evt[0].ny)
            })
        .onHit("buttonTile", function(evt){
            Crafty.e("2d, Canvas, buttonDown, Collision, Wall")
            .attr({x: 336, y: 16, z: 2, w: 16, h: 16})
            console.log("Hit an button at X = "+ this.x + ", Y = " + this.y + "!")
            window.alert("You pressed a big red button! There's an ominous rumbling of machinery powering up and...")                
            window.alert("...")
            window.alert("Nothing happens. Well, that was disappointing.")
            this.shift(2*evt[0].nx, 2*evt[0].ny)
            })
            
          

        //   "You stepped into a laser above your clearance level! Buuut the green goo " +
        //   "covering you seems to have faked Green Clearance for you. Lucky you."
greenPlayer.reel("greenwalkDown", 1000, [
    [0,0],
    [1,0],
    [2,0],
    [3,0],
])
greenPlayer.reel("greenwalkUp", 1000, [
    [0,1],
    [1,1],
    [2,1],
    [3,1]
])
greenPlayer.reel("greenwalkLeft", 1000, [
    [0,2],
    [1,2],
    [2,2],
    [3,2]
])
greenPlayer.reel("greenwalkRight", 1000, [
    [0,3],
    [1,3],
    [2,3],
    [3,3]
])

greenPlayer.bind("KeyDown", function(evt){
      if(evt.key === Crafty.keys.UP_ARROW){
        greenPlayer.animate("greenwalkUp", -1)
      }
      if(evt.key === Crafty.keys.DOWN_ARROW){
        greenPlayer.animate("greenwalkDown", -1)
      }
      if(evt.key === Crafty.keys.LEFT_ARROW){
        greenPlayer.animate("greenwalkLeft", -1)
      }
      if(evt.key === Crafty.keys.RIGHT_ARROW){
        greenPlayer.animate("greenwalkRight", -1)
      }
  }) 
    })
 
  
  // a series of reel definitions to create gifs from the same sprite sheet, passing a name
  // and number of milliseconds for the animation to run in
  player.reel("redwalkDown", 1000, [
      [0,0],
      [1,0],
      [2,0],
      [3,0],
  ])
  player.reel("redwalkUp", 1000, [
      [0,1],
      [1,1],
      [2,1],
      [3,1]
  ])
  player.reel("redwalkLeft", 1000, [
      [0,2],
      [1,2],
      [2,2],
      [3,2]
  ])
  player.reel("redwalkRight", 1000, [
      [0,3],
      [1,3],
      [2,3],
      [3,3]
  ])
  player.reel("death", 1000, [
      [0,4],
      [2,5],
      [3,4],
      [2,4],
  ])
  
  // handles directional input and animates the appropriate reel
  //TODO: add in a stop point to return the character to rest after keys are released
  player.bind("KeyDown", function(evt){
        if(evt.key === Crafty.keys.UP_ARROW){
            player.animate("redwalkUp", -1)
        }
        if(evt.key === Crafty.keys.DOWN_ARROW){
          player.animate("redwalkDown", -1)
        }
        if(evt.key === Crafty.keys.LEFT_ARROW){
          player.animate("redwalkLeft", -1)
        }
        if(evt.key === Crafty.keys.RIGHT_ARROW){
          player.animate("redwalkRight", -1)
        }
    })

})


Crafty.defineScene("gameOver", function(){
    Crafty.background("#000");
    var decoration1 = Crafty.e("2D, Canvas, hazSymbol")
        .attr({w: 32, h: 32, x: 40, y: 40})
    var decoration2 = Crafty.e("2D, Canvas, hazSymbol")
        .attr({w: 32, h: 32, x: 490, y: 40})
    var decoration3 = Crafty.e("2D, Canvas, hazSymbol")
        .attr({w: 32, h: 32, x: 40, y: 300})
    var decoration4 = Crafty.e("2D, Canvas, hazSymbol")
        .attr({w: 32, h: 32, x: 490, y: 300})
    var decoration5 = Crafty.e("2D, Canvas, blood3")
        .attr({w: 32, h: 32, x: 95, y: 75})
    var decoration6 = Crafty.e("2D, Canvas, blood4")
        .attr({w: 32, h: 32, x: 400, y: 170})
    var gameOverText = Crafty.e("2D, DOM, Text")
          .attr({ w: 150, h: 20, x: 200, y: 120 })
          .text("You have run out of clones! Friend Computer sadly marks your" +
          " permanent file as TRAITOROUS FAILURE, then deletes you from its" +
          " memory banks so it won't be sad anymore. YOU LOSE!")
          .textAlign("center")
          .textColor("#0fdc13");
    var hintText = Crafty.e("2D, DOM, Text")
          .attr({ w: 150, h: 20, x: 200, y: 240 })
          .text("Press any key to play again! Remember: Fun is Mandatory!")
          .textAlign("center")
          .textColor("#0fdc13");
    hintText.bind('KeyDown', function(evt){
        Crafty.enterScene("startScreen")
    })
});


Crafty.defineScene("gameWin", function(){
    Crafty.background("#000");
    var decoration1 = Crafty.e("2D, Canvas, hazSymbol")
        .attr({w: 32, h: 32, x: 40, y: 40})
    var decoration2 = Crafty.e("2D, Canvas, hazSymbol")
        .attr({w: 32, h: 32, x: 490, y: 40})
    var decoration3 = Crafty.e("2D, Canvas, hazSymbol")
        .attr({w: 32, h: 32, x: 40, y: 300})
    var decoration4 = Crafty.e("2D, Canvas, hazSymbol")
        .attr({w: 32, h: 32, x: 490, y: 300})
    var decoration5 = Crafty.e("2D, Canvas, blood3")
        .attr({w: 32, h: 32, x: 340, y: 75})
    var decoration6 = Crafty.e("2D, Canvas, blood4")
        .attr({w: 32, h: 32, x: 300, y: 300})
    var winText = Crafty.e("2D, DOM, Text")
          .attr({ w: 150, h: 20, x: 200, y: 120 })
          .text("You have completed the colossal task of walking down a hallway!")
          .textAlign("center")
          .textColor("#0fdc13");
    var congratsText = Crafty.e("2D, DOM, Text")
          .attr({ w: 150, h: 20, x: 200, y: 200 })
          .text("YOU WIN, CONGRATULATIONS!")
          .textAlign("center")
          .textColor("#0fdc13");
    var hintText = Crafty.e("2D, DOM, Text")
          .attr({ w: 150, h: 20, x: 200, y: 240 })
          .text("Press any key to play again! Remember: Fun is Mandatory!")
          .textAlign("center")
          .textColor("#0fdc13");
    hintText.bind('KeyDown', function(evt){
        Crafty.enterScene("startScreen")
    })
});


Crafty.enterScene("startScreen")





