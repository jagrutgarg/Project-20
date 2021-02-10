var car;
var speed, weight;
var wall;
function setup() {
  createCanvas(1800,1000);
  wall = createSprite(1750, 500, 30, 1000);
  car = createSprite(70, 500, 80,40);
  speed = Math.round(random(55,90));
  weight = Math.round(random(400,1500));
  console.log("Speed",speed);
  console.log("Weight",weight);  
  car.shapeColor = "blue";
}

function draw() {
  background(255,255,255);
  
  car.velocityX = 15;
  
  if (wall.x - car.x < car.width/2 + wall.width/2){
    car.velocityX = 0;
    
    var deformation = 0.5*weight*speed*speed/22500;
    console.log("Deformation",deformation);
    if (deformation > 100){
      car.shapeColor = "green";
    }
    if (deformation > 100 && deformation < 180){
      car.shapeColor = "yellow";
    }
    if (deformation > 180){
      car.shapeColor = "red";
    }
    
    
  }
  
  drawSprites();
}