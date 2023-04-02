
function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,50,50);
}

function draw() 
{
  background(30);
  drawSprites();
  if (keyIsDown(RIGHT_ARROW)){
    box.position.x+=10;
  }
  if (keyIsDown(LEFT_ARROW)){
    box.position.x-=10;
  }
  if (keyIsDown(UP_ARROW)){
    box.position.y-=10;
  }
  if (keyIsDown(DOWN_ARROW)){
    box.position.y+=10;
  }
  
}




