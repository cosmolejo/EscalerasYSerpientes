// Daniel Shiffman
// Snakes and Ladders

// What is the state?
const ROLL_STATE = 0; // Rolling the die
const MOVE_STATE = 1; // Moving to next spot
const SNADDER_STATE = 2; // Moving along a Snake or Ladder
let state = ROLL_STATE;

// Array of tiles
let tiles = [];
// One player
let player;
let contador;

// Unecessary for playing the game
// these variables or for storing all the rolls over time
let rolls = [];
let index = 0;
let averageRolls = 0;
let avgP;
var t;

function setup() {
  if(localStorage.tablero=="8x8")   { createCanvas(480, 480); t=64;  }
  if(localStorage.tablero=="9x9")   { createCanvas(540, 540); t=81;  }
  if(localStorage.tablero=="10x10") { createCanvas(600, 600); t=100; }
  if(localStorage.tablero=="11x11") { createCanvas(660, 660); t=121; }
  
  //11: 660 10: 600 9: 540 8:480
  avgP = createP('');

  rolls[index] = 0;

  // Size of tile, columns and rows
  let resolution = 60;
  let cols = width / resolution;
  let rows = height / resolution;

  // Create all the tiles from bottom to top
  let x = 0;
  let y = (rows - 1) * resolution;
  let dir = 1;
  for (let i = 0; i < cols * rows; i++) {
    let tile = new Tile(x, y, resolution, i, i + 1);
    tiles.push(tile);
    x = x + (resolution * dir);
    // Move along a winding path up the rows
    if (x >= width || x <= -resolution) {
      dir *= -1;
      x += resolution * dir;
      y -= resolution;
    }
  }

  var e; var s;
  if(localStorage.escaleras=="1")   { e=1;   }
  if(localStorage.escaleras=="2")   { e=2;   }
  if(localStorage.escaleras=="3")   { e=3;   }
  if(localStorage.escaleras=="4")   { e=4;   }
  if(localStorage.escaleras=="5")   { e=5;   }
  if(localStorage.escaleras=="6")   { e=6;   }
  if(localStorage.escaleras=="7")   { e=7;   }
  if(localStorage.escaleras=="8")   { e=8;   }
  if(localStorage.escaleras=="9")   { e=9;   }
  if(localStorage.escaleras=="10")  { e=10;  }
  if(localStorage.serpientes=="1")  { s=1;   }
  if(localStorage.serpientes=="2")  { s=2;   }
  if(localStorage.serpientes=="3")  { s=3;   }
  if(localStorage.serpientes=="4")  { s=4;   }
  if(localStorage.serpientes=="5")  { s=5;   }
  if(localStorage.serpientes=="6")  { s=6;   }
  if(localStorage.serpientes=="7")  { s=7;   }
  if(localStorage.serpientes=="8")  { s=8;   }
  if(localStorage.serpientes=="9")  { s=9;   }
  if(localStorage.serpientes=="10") { s=10;  }
  var e2=e/2; var s2=s/2;
  var escaleras = ((t*e2)/100);
  var serpientes = ((t*s2)/100);
  

  // Pick random Snakes
  for (let i = 0; i < serpientes; i++) {
    let index = floor(random(cols, tiles.length - 1));
    // -1 makes in a Snake (drop down a number of spots)
    tiles[index].snadder = -1 * floor(random(index % cols, index - 1));
    
  }

  // Pick random Ladders
  for (let i = 0; i < escaleras; i++) {
    let index = floor(random(0, tiles.length - cols));
    tiles[index].snadder = floor(random(cols - (index % cols), tiles.length - index - 1));
  }
  // A new player
  player = new Player();
}

function draw() {
   frameRate(1);
  background(51);

  // Draw all the tiles, snakes, and ladders
  for (let tile of tiles) {
    tile.show();
  }
  for (let tile of tiles) {
    tile.showSnadders();
  }

  // Rolling the die
  if (state === ROLL_STATE) {
    player.rollDie();
    rolls[index]++;
    player.showPreview();
    state = MOVE_STATE;
    // Moving the player
  } else if (state === MOVE_STATE) {
    player.move();

    if (player.isSnadder()) {
      state = SNADDER_STATE;
    } else {
      state = ROLL_STATE;
    }
    // Moving along a Snake or Ladder
  } else if (state === SNADDER_STATE) {
    player.moveSnadder();
    state = ROLL_STATE;
  }

  // Draw the player
  player.show();

  // Is the game over?
  if (player.spot >= tiles.length - 1) {
    state = ROLL_STATE;
    player.reset();
    index++;
    rolls[index] = 0;
  }

  // Compute average rolls to complete game
  let sum = 0;
  for (let i = 0; i < rolls.length - 1; i++) {
    sum += rolls[i];
  }
  let avg = sum / (rolls.length - 1);
  if (avg) {
    avgP.html(avg);
  }

 

}