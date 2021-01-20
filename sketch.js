
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  monkey = createSprite (80,310,10,10);
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
  
  ground = createSprite(400,345,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2
  console.log(ground.x);
}


function draw() {
background("white")
  if (ground.x<0){
     ground.x=ground.width/2
  }
 monkey.collide(ground);
  
if (keyDown("space") && monkey.y>270){
     monkey.velocityY=-18

   }
  monkey.velocityY=monkey.velocityY+0.8;
  obstaclesss();
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  drawSprites();
}
function obstaclesss(){
 if (frameCount % 300 === 0){
    obstacles = createSprite(400,303,10,40)
    obstacles.velocityX=-4
    obstacles.addImage(obstaceImage);
    obstacles.scale=0.2
   obstacles.lifetime = 150;
  }
  spawnbanana();
}
function spawnbanana(){
  if (frameCount % 80 === 0 ){
  banana = createSprite (400,Math.round(random(120, 200)), 10, 10);
  banana.velocityX=-4 
    banana.addImage(bananaImage);
    banana.scale=0.1
    banana.lifetime = 150;
  }
}



