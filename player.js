
/**
 * Clase 'Player' que sirve para representar a un jugador
 * y sus acciones en la parte gráfica, y mediante el funcionamiento
 * con listas.
 * @class
 * @author Alejandro Mesa Gómez, Hernán Javier Aguilar.
 */

class Player {
  
  /**
   * Representa un jugador
   * @constructor
   * @param {lista} obj - Modelo de la lista.
   */

  constructor(obj) 
  {
    this.reset();
    this.l=obj;
    this.pos=obj.primerNodo();
  }
  
  /**
   * Reinicia las variables del jugador que se usan para 
   * el posicionamiento en la parte gráfica.
   */
  
  reset() 
  {
    this.spot = 0; // Posición actual.
    this.next = 0; // Posición posterior.
    this.roll = 0; // valor del dado.
  }  
  
  /**
   * Consigue un número aleatorio entre 1 y 6 para hacer
   * el movimiento de posición (función de lanzar dado).
   */

  rollDice() 
  {
    this.roll = floor(random(1, 7));
    this.next = this.spot + this.roll;
  }
  
  /**
   * Sirve para hacer el movimiento del jugador a la 
   * siguiente baldosa. (También en la lista).
   */

  move() 
  {
    this.spot = this.next;
    this.pos=this.l.avanzar(this.roll,this.pos);
  }
  
  /**
   * Verifica si la posición actual es una escalera o una serpiente.
   */

  isSnadder() 
  {
    let tile = tiles[this.spot];
    this.pos=this.l.verificaSnadder(this.l.retornaNodo(tile.index));
    return (tile && tile.snadder !== 0);
    
  }
  
  /**
   * Se mueve por una escalera o una serpiente si es el caso.
   */

  moveSnadder() 
  {
    let tile = tiles[this.spot];
    this.spot += tile.snadder;
  }

  /**
   * Muestra al jugador 1 en la baldosa actual.
   */

  show() 
  {
    let current = tiles[this.spot];
    if (!current) return;
    fill(color(204, 153, 255));
    stroke(0);
    let center = current.getCenter();
    ellipse(center[0], center[1], 26);
  }

  /**
   * Muestra al jugador 2 en la baldosa actual.
   */

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
