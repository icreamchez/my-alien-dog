function setup() {
  createCanvas(650, 650, WEBGL);
}

function draw() {
  background(100,150,200);
  // background(red,green,blue);
  triangle(180,250,100,50,20,100)
  triangle(100,250,100,50,20,100)
  triangle(-220,200,-100,50,20,100)
  triangle(-200,250,-100,50,20,100)
  triangle(300,0,50,20,80,75)
  rect(-150,20,300,150)
  arc(-50,-70,100,100,0,PI)
  circle(-150,-20,150)
  fill("black")
  circle(-200,-20,20)
  // eyes
  triangle(-100,10,-100,50,20,100)
  // nose, didnt finish yet
  fill("grey")

}
