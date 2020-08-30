var car,wall,bullet;
var speed,weight;

function setup() {
  createCanvas(1600,400);
bullet=createSprite(100,200,50,50);
wall=createSprite(1500,200,60,height/2);
wall.shapeColor=color(180,80,80);
thickness=random(22,83)
speed=random(55,90);
  weight=random(400,1500);
  bullet.velocityX=speed;
}

function draw() {
  background(0);  
  //car.x=World.mouseX;
  
  /*if(wall.x-car.x<(car.width+wall.width)/2)
  {  
  car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180)
    {
      car.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100)
    {
      car.shapeColor=color(230,230,0);
    }
    if(deformation<100)
    {
      car.shapeColor=color(0,255,0);
    }

  }*/
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    
    if(damage>10)
    {
      wall.shapeColor=color(255,0,0);
    }
    if(damage<10)
    {
      wall.shapeColor=color(0,255,0);
    }
  }

  drawSprites();
}

function hasCollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false
}