function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(0);

  // Rotate around the y-axis.
  rotateY(frameCount * 0.05);

  // Style the point.
  stroke('pink');
  strokeWeight(50);

  //Direction for point.
  point(-172, -50, 0);

}