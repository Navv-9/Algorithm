var fixedrect, movingrect;




function setup() {
  createCanvas(800,400);
  fixedrect= createSprite(400,200,50,50);
  fixedrect.shapeColor="green";
  movingrect= createSprite(400,400,60,50);
  movingrect.shapeColor="green";
  movingrect.velocityY= -3;
  fixedrect.velocityY= 1;
}

function draw() {
  background("black");  
  movingrect.x= World.mouseX;
  movingrect.y= World.mouseY;
  if (movingrect.x - fixedrect.x<fixedrect.width/2 + movingrect.width/2 && 
    fixedrect.x - movingrect.x<fixedrect.width/2 + movingrect.width/2){
    fixedrect.velocityX=fixedrect.velocityX*(-1);
    movingrect.velocityX=movingrect.velocityX*(-1) ;
  }
  else if ( movingrect.y - fixedrect.y<fixedrect.width/2 + movingrect.width/2 && 
  fixedrect.y - movingrect.y<fixedrect.width/2 + movingrect.width/2) {
    fixedrect.velocityY= fixedrect.velocityY*(-1);
    movingrect.velocityY=movingrect.velocityY*(-1);
  }
  
  
  
  
  
  drawSprites();
}