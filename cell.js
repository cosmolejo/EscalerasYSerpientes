// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// Minesweeper
// Video: https://youtu.be/LFU5ZlrR21E

function Cell(i, j, w) {
  this.i = i;
  this.j = j;
  this.x = i * w;
  this.y = j * w;
  this.w = w;
  
}

Cell.prototype.show = function() {
  stroke(0);
  noFill();
  rect(this.x, this.y, this.w, this.w);
  textAlign(CENTER);
  text(this.numero(9-this.j,this.i),this.x+this.w/2,this.y+this.w*0.5);
  
}
Cell.prototype.numero= function(i,j){
    if(i%2== 0){
      return (i*10)+(j+1);
    }
    else{
      return (i*10)+(10-j);
    }

}

