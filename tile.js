
// Cada baldosa utilizada en el programa.

class Tile {

  constructor(x, y, wh, index, next) 
  {
    this.x = x;
    this.y = y;
    this.wh = wh
    this.index = index;
    this.next = next;
    this.snadder = 0;

    // Coloreando las baldosas.
    
    if (this.index!=0 && this.index!= t-1 && this.index % 2 == 0)
    { 
      this.color = color(63, 61, 61); 
    } 
    else 
    { 
      this.color = color(0, 0, 0); 
    }
    if (this.index == 0) 
    { 
      this.color = color(116, 224, 44); 
    } 
    if(this.index == t-1) 
    { 
      this.color = color(193, 36, 19); 
    }
  }
  
  // Encuentra el centro de la baldosa.

  getCenter()
  {
    let cx = this.x + this.wh / 2;
    let cy = this.y + this.wh / 2;
    return [cx, cy];
  } 
  
  // Dibuja un rectángulo.

  show() 
  {
    fill(this.color);
    noStroke();
    rect(this.x, this.y, this.wh, this.wh);
  }
  
  // Resalta el rectángulo.

  highlight() 
  {
    fill(0, 0, 255, 100);
    noStroke();
    rect(this.x, this.y, this.wh, this.wh);
  }
  
  // Revisar la baldosa conetada, y si se conecta con una serpiente o escalera.

  showSnadders() 
  {
    if (this.snadder != 0) 
    {
      let myCenter = this.getCenter();
      let nextCenter = tiles[this.index + this.snadder].getCenter();
      strokeWeight(4);
      if (this.snadder < 0) 
      { 
        stroke(255, 0, 0, 200); 
      } 
      else 
      { 
        stroke(0, 255, 0, 200); 
      }
      line(myCenter[0], myCenter[1], nextCenter[0], nextCenter[1]);
    }
  }
}
