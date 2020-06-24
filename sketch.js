function setup() {
  createCanvas(1500,400);
  speed = random(55, 90);
  weight = random(400, 1500);
  car = createSprite(50, 200, 50, 50);
  block = createSprite(1500, 200, 60, height/2);
}

function draw() {
  background(0);

  //Speed.random(5, 9);

  car.velocityX = speed;

  if(block.x - car.x < block.width/2 + car.width/2)
  {
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22500;
    if (deformation > 180) {
      car.shapeColor = color(250, 0, 0);
    }
    if (deformation < 180 && deformation > 100) {
      car.shapeColor = color(230, 230, 0);
    }

    if (deformation < 100) {
      car.shapeColor = color(0, 255, 0);
    }
  }

  drawSprites();
}
var car;
var block;
var speed;
var weight;