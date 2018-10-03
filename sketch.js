// Estado actual jugador 1.

const ROLL_STATE = 0; // Tirando el dado.
const MOVE_STATE = 1; // Movimiento en baldosas.
const SNADDER_STATE = 2; // Movimiento en escalera o serpiente.
let state = ROLL_STATE; // Estado del juego.

// Estado actual jugador 2.

const ROLL_STATE_P2 = 0; // Tirando el dado.
const MOVE_STATE_P2 = 1; // Movimiento en baldosas.
const SNADDER_STATE_P2 = 2; // Movimiento en escalera o serpiente.
let state2 = ROLL_STATE_P2; // Estado del juego.

// Estado actual jugador 3.

const ROLL_STATE_P3 = 0; // Tirando el dado.
const MOVE_STATE_P3 = 1; // Movimiento en baldosas.
const SNADDER_STATE_P3 = 2; // Movimiento en escalera o serpiente.
let state3 = ROLL_STATE_P3; // Estado del juego.

// Estado actual bot.

const ROLL_STATE_BOT = 0; // Tirando el dado.
const MOVE_STATE_BOT = 1; // Movimiento en baldosas.
const SNADDER_STATE_BOT = 2; // Movimiento en escalera o serpiente.
let statebot = ROLL_STATE_BOT; // Estado del juego.


// Variables secundarias.

let tiles = []; // Vector con las baldosas.
let player; // Jugador con el que basarse.
let player2;
let Lista; // Variable para el modelo
let index = 0; // Posición para crear una escalera o serpiente.
let averageRolls = 0; // Promedio a tener en cuenta.
let nodo; // Nodo auxiliar.
var t; // Tamaño del tablero.



function setup() {
  if (localStorage.tablero == "8x8") {
    createCanvas(480, 480);
    t = 64;
  }
  if (localStorage.tablero == "9x9") {
    createCanvas(540, 540);
    t = 81;
  }
  if (localStorage.tablero == "10x10") {
    createCanvas(600, 600);
    t = 100;
  }
  if (localStorage.tablero == "11x11") {
    createCanvas(660, 660);
    t = 121;
  }

  //Creacción del modelo Lista del juego

  Lista = new lista();

  // Tamaño de las baldosas, filas y columnas.

  let resolution = 60;
  let cols = width / resolution;
  let rows = height / resolution;

  // Crear todas las baldosas y sus nodos equivalentes

  let x = 0;
  let y = (rows - 1) * resolution;
  let dir = 1;

  for (let i = 0; i < cols * rows; i++) {
    let n = new nodoDoble();
    let tile = new Tile(x, y, resolution, i, i + 1);
    tiles.push(tile);
    x = x + (resolution * dir);

    Lista.conectar(n);

    if (x >= width || x <= -resolution) {
      dir *= -1;
      x += resolution * dir;
      y -= resolution;
    }
  }


  // Manejo del promedio de escaleras y serpientes.

  var e;
  var s;
  e = parseInt(localStorage.escaleras);
  s = parseInt(localStorage.serpientes);



  // Cálculo del promedio.

  var e2 = e / 2;
  var s2 = s / 2;
  var escaleras = ((t * e2) / 100);
  var serpientes = ((t * s2) / 100);

  // Tomar serpientes de manera aleatoria.

  for (let i = 1; i <= serpientes; i++) {
    let index = floor(random(cols, tiles.length - 1));
    let destino = -1 * floor(random(index % cols, index - 1))
    tiles[index].snadder = destino;

    
    n = Lista.retornaNodo(index);
    n.asignaIndi(0);
    n.asignaLInd(Lista.retornaNodo(destino));
    console.log(index,Lista.retornaIndex(n));
  }

  // Tomar escaleras de manera aleatoria.

  for (let i = 1; i <= escaleras; i++) {
    let index = floor(random(0, tiles.length - cols));
    let destino= floor(random(cols - (index % cols), tiles.length - index - 1))
    tiles[index].snadder = destino;


    n = Lista.retornaNodo(index);
    n.asignaIndi(1);
    n.asignaLInd(Lista.retornaNodo(destino));
  }

  
  // Nuevo jugador.

  if (localStorage.modalidad == "1V1") {
    player = new Player();
    player2 = new Player();
  } else {
    player3 = new Player();
    playerbot = new Player();
  }

}

function draw() {
  background(51);

  // Dibuja todas las baldosas, escaleras y serpientes.

  for (let tile of tiles) {
    tile.show();
  }
  for (let tile of tiles) {
    tile.showSnadders();
  }

  if (localStorage.modalidad == "1V1") {

    // Acciones jugador 1.

    if (state === ROLL_STATE) {
      player.rollDice();
      state = MOVE_STATE;

      // Moviendo el jugador 1.

    } else if (state === MOVE_STATE) {
      if (localStorage.lanzar == 1) {
        player.move();

        if (player.isSnadder()) {
          state = SNADDER_STATE;
        } else {
          state = ROLL_STATE;
        }
      }

      // Moviéndose por una escalera o serpiente.

    } else if (state === SNADDER_STATE) {
      player.moveSnadder();
      state = ROLL_STATE;
    }

    // Acciones jugador 2.

    if (state2 === ROLL_STATE_P2) {
      player2.rollDice();
      state2 = MOVE_STATE_P2;

      // Moviendo el jugador 2.

    } else if (state2 === MOVE_STATE_P2) {
      if (localStorage.lanzar2 == 1) {
        player2.move();

        if (player2.isSnadder()) {
          state2 = SNADDER_STATE_P2;
        } else {
          state2 = ROLL_STATE_P2;
        }
      }

      // Moviéndose por una escalera o serpiente.

    } else if (state2 === SNADDER_STATE_P2) {
      player2.moveSnadder();
      state2 = ROLL_STATE_P2;
    }

    // Dibuja los jugadores.

    player.show();
    player2.show2();

    // Organiza los turnos.

    localStorage.lanzar = 2;
    localStorage.lanzar2 = 2;

  } else {

    // Acciones jugador 1.

    if (state3 === ROLL_STATE_P3) {
      player3.rollDice();
      state3 = MOVE_STATE_P3;

      // Moviendo el jugador 1.

    } else if (state3 === MOVE_STATE_P3) {
      if (localStorage.lanzar3 == 1) {
        player3.move();

        if (player3.isSnadder()) {
          state3 = SNADDER_STATE_P3;
        } else {
          state3 = ROLL_STATE_P3;
        }
      }

      // Moviéndose por una escalera o serpiente.

    } else if (state3 === SNADDER_STATE_P3) {
      player3.moveSnadder();
      state3 = ROLL_STATE_P3;
    }

    // Acciones bot.

    if (statebot === ROLL_STATE_BOT) {
      playerbot.rollDice();
      statebot = MOVE_STATE_BOT;

      // Moviendo el bot.

    } else if (statebot === MOVE_STATE_BOT) {
      if (localStorage.lanzar4 == 1) {
        playerbot.move();

        if (playerbot.isSnadder()) {
          statebot = SNADDER_STATE_BOT;
        } else {
          statebot = ROLL_STATE_BOT;
        }
      }

      // Moviéndose por una escalera o serpiente.

    } else if (statebot === SNADDER_STATE_BOT) {
      playerbot.moveSnadder();
      statebot = ROLL_STATE_BOT;
    }

    // Dibuja el jugador.

    player3.show();
    playerbot.show2();

    // Organiza los turnos.

    localStorage.lanzar3 = 2;
    localStorage.lanzar4 = 2;
  }
}