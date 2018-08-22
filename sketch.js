

function make2DArray(cols, rows) {
    var arr = new Array(cols);
    for (var i = 0; i < arr.length; i++) {
      arr[i] = new Array(rows);
    }
    return arr;
  }
  
  var grid;
  var cols;
  var rows;
  var w = 70;

function setup(){

    createCanvas(801, 801);
    cols = 10;
    rows = 10;
    grid = make2DArray(cols, rows);
    for (var i = 0; i < cols; i++) {
      for (var j = 0; j < rows; j++) {
        grid[i][j] = new Cell(i, j, w);
      }
    }
}

function draw(){
    //translate(0, canvas.height);
    //scale(1, -1);
    background(255);
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            grid[i][j].show();
        }
    }
    
}