var car;
var wall;

function setup() {
  createCanvas(800,400);
  car = createSprite(100, 200, 20, 20);
  wall = createSprite(750,200,20,400);
}

function draw() {
  background("black");  
  car.velocityX = 5;
    if(car.x - wall.x < car.width/2 + wall.width/2
    && wall.x - car.x < car.width/2 + wall.width/2
    && wall.y - car.y < car.height/2 + wall.height/2
    && car.y - wall.y < car.height/2 + wall.height/2){
    wall.shapeColor = "grey";
    car.shapeColor = "green";
    car.velocityX=0;
  }
  else {
    car.shapeColor = "white";
    wall.shapeColor = "grey";
  }
  drawSprites();
}