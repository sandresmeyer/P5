/* eslint no-undef: 0 */
var y = 0;
var x = 0;
var i = 0;

function setup() {
  var winw=windowWidth;
  var winh=windowHeight;
  createCanvas(winw, winh);
  stroke("#8DF78D");
  noStroke();
  background("#FF4C55");
}

function draw() {
  var winw=windowWidth;
  var winh=windowHeight;

    while (y<winh){
      while (x<winw){
        fill(random(255),196,203);
        square(x, y, 5);
        x = x + 5;
      }
      y=y+5;
      x=0;
    }
    y=0;
    noLoop();
    print(windowWidth);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}
