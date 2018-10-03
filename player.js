
// Clase jugador.

class Player {
  
  // Crear un nuevo jugador.

  constructor() 
  {
    this.reset();
  }

  // Reiniciar las variables.
  
  reset() 
  {
    this.spot = 0; // Posición actual.
    this.next = 0; // Posición posterior.
    this.roll = 0; // Posición anterior.
  }  
  
  // Movimiento entre 1 y 6.

  rollDice() 
  {
    this.roll = floor(random(1, 7));
    this.next = this.spot + this.roll;
  }
  
  // Actualizar posición a la siguiente.

  move() 
  {
    this.spot = this.next;
  }
  
  // ¿Posición actual es escalera o serpiente?

  isSnadder() 
  {
    let tile = tiles[this.spot];
    return (tile && tile.snadder !== 0);
  }
  
  // Moverse si es escalera o serpiente.

  moveSnadder() 
  {
    let tile = tiles[this.spot];
    this.spot += tile.snadder;
  }

  // Mostrar jugador en la baldosa actual.

  show() 
  {
    let current = tiles[this.spot];
    if (!current) return;
    fill(color(204, 153, 255));
    stroke(0);
    let center = current.getCenter();
    ellipse(center[0], center[1], 26);
  }

  show2() 
  {
    let current = tiles[this.spot];
    if (!current) return;
    fill(color(255, 255, 0));
    stroke(0);
    let center = current.getCenter();
    ellipse(center[0], center[1], 26);
  }
}
