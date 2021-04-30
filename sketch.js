var a,b,c,d,e;

function setup() {
  createCanvas(1200,1200);
 a=createSprite(200,200,40,40);
 a.shapeColor="red";
a.velocityX=3;

 b=createSprite(400,200,40,40);
 b.shapeColor="red";

 c=createSprite(600,200,40,40);
 c.shapeColor="red";

 d=createSprite(800,200,40,40);
 d.shapeColor="red";

 e=createSprite(1000,200,40,40);
 e.shapeColor="red";

}

function draw() {
  background(0,0,0);  
 

bounceoff(a,e);
  
 


  drawSprites();
}

function bounceoff(object1,object2){
  if(object1.x - object2.x < object2.width/2 +object1.width/2 && 
    object2.x-object1.x < object2.width/2 + object1.width/2 &&
    object1.y - object2.y < object2.height/2 +object1.height/2 && 
    object2.y-object1.y < object2.height/2 + object1.height/2){
      object1.velocityX=object1.velocityX*(-1)
      object2.velocityX=3;
    }
  }
