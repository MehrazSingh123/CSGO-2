var bullet, wall;
var speed, wheight, thickness;

function setup() {
  createCanvas(1100,400);

  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  bullet = createSprite(200, 200, 65, 50);
  bullet.velocityX = speed;
  wall = createSprite(1000, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);


}

function draw() {
  background(255,255,255); 

  if (wall.x - bullet.x < (bullet.width+wall.width)/2)
  {
    bullet.veloctiyX = 0;
    var deformation = 0.5 * weight * speed * speed/22500;
    if (deformation > 180)
    {
      bullet.shapeColor = color(255, 0, 0);
    }

    if (deformation < 180 && deformation > 100)
    {
      bullet.shapeColor = color(230, 230, 0);
    }

    if (deformation<100)
    {
      bullet.shapeColor = color(0, 255, 0);
    }
  }
  bullet.collide(wall);

  if (hasCollided(bullet, wall))
  {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if (damage > 10)
    {
      wall.shapeColor = color(255, 0, 0);
    }

    if (damage < 10)
    {
      wall.shapeColor = color(0, 255, 0);
    }
  }

  console.log(damage);
  console.log(weight);
  console.log(thickness);
  console.log(speed);
  
  drawSprites();
}