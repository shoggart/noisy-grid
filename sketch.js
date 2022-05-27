var stepSize = 20;
function setup() {
  angleMode(DEGREES);
  createCanvas(500, 500);
}
function draw() {
  background(125);
  colorGrid();
  compassGrid();
}
function colorGrid(){
  // your code here
  for (var x = 0; x < 25; x = (x + 1)) {
    for (var y = 0; y < 25; y = (y+1)) {
      var noiseVar = noise(x, y, frameCount / 25.5);   
      let color1 = color(255, 5, 225);
      let color2 = color(100, 5, 5);
      let finalColor = lerpColor(color1, color2, noiseVar);

      strokeWeight(0.0);
      fill(finalColor);
      rect(x * stepSize, y * stepSize, stepSize, stepSize);
    }
  }
}



function compassGrid() {
  // your code here
  for (var x = 0; x < 25; (x = x + 1)) {
    for (var y = 0; y < 25; (y = y + 1)) {
      push();
      strokeWeight(1.5);
      var noiseVar2 = noise(x / 50, y / 50, frameCount * (mouseX / 1555));
      let m = map(noiseVar2, 0, 1, 0, 720);
      var s = map(noiseVar2, 0, 1, 0, 255);
      stroke(s, 50, 50);
      translate(x * stepSize + 10, y * stepSize);
      rotate(m);
      line(0, 0, 0, -stepSize);
      pop();
    }
  }
}