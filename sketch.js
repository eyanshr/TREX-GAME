
var trex ,trex_running;
var ground, ground_image;

function preload(){
  trex_running = loadAnimation("trex3.png", "trex4.png");
  ground_image=loadImage("ground2.png");

}

function setup(){
  createCanvas(800,400)
  
  trex=createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  
  ground=createSprite(400, 220, 400, 20)
  ground.addImage("moving", ground_image);
}

function draw(){
  background("white")
  
  ground.velocityX = -2;
  
  if (keyDown("space")){
    trex.velocityY = -9;
  }
  if (ground.x<0){
    ground.x = ground.width/2;
  }
trex.velocityY = trex.velocityY +0.8; 

trex.collide(ground);

  
  drawSprites();

}
