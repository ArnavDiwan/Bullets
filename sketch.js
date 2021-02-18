var border1, border2, border3;
var wall1, wall2, wall3, wall4;
var thickness1, thickness2, thickness3, thickness4;
var bullet1, bullet2, bullet3, bullet4;
var speed1, weight1;
var speed2, weight2;
var speed3, weight3;
var speed4, weight4;


function setup() {
  createCanvas(1600,400);
  speed1 = random(223, 321);
  weight1 = random(30, 52);

  speed2 = random(223, 321);
  weight2 = random(30, 52);

  speed3 = random(223, 321);
  weight3 = random(30, 52);

  speed4 = random(223, 321);
  weight4 = random(30, 52);

  thickness1 = random(22, 83);
  thickness2 = random(22, 83);
  thickness3 = random(22, 83);
  thickness4 = random(22, 83);

  bullet1 = createSprite(50, 50, 20, 10);
  bullet2 = createSprite(50, 150, 20, 20);
  bullet3 = createSprite(50, 250, 20, 20);
  bullet4 = createSprite(50, 350, 20, 20);

  border1 = createSprite(800, 100, 1600, 20);
  border2 = createSprite(800, 200, 1600, 20);
  border3 = createSprite(800, 300, 1600, 20);

  wall1 = createSprite(1500, 50, thickness1, 50);
  wall2 = createSprite(1500, 150, thickness2, 50);
  wall3 = createSprite(1500, 250, thickness3, 50);
  wall4 = createSprite(1500, 350, thickness4, 50);

  bullet1.velocityX = speed1;
  bullet2.velocityX = speed2;
  bullet3.velocityX = speed3;
  bullet4.velocityX = speed4;

  

  
 

  


}

function draw() {
  background(0, 0, 0); 
  
  hasCollided();
  
  drawSprites();
}

function hasCollided(lbullet, lwall){

bulletRightEdge = lbullet.x + lbullet.width;
wallLeftEdge = lwall.x

if (bulletRightEdge>=wallLeftEdge){

    return true

}

return false



}