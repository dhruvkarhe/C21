var movingrect;
var fixedrect;
var obj1,obj2,obj3,obj4

function setup() {
  createCanvas(1200,800);
  fixedrect=createSprite(500, 500, 80, 50);
  movingrect=createSprite(200,200,50,80);
  obj1= createSprite(100,100,80,50);
  obj2= createSprite(200,200,80,50);
  obj3= createSprite(300,300,80,50);
  obj4= createSprite(400,400,80,50);

  obj5 = createSprite(400, 100, 80, 50);
  obj6 = createSprite(400,700,50,80);

  obj7 = createSprite(200, 600, 80, 50);
  obj8 = createSprite(800,600,50,80);


  obj5.velocityY=+5;
  obj6.velocityY=-5;

  obj7.velocityX=+5;
  obj8.velocityX=-5;


  fixedrect.shapeColor="purple";
  movingrect.shapeColor="purple";
  
  fixedrect.debug=true;
  movingrect.debug=true;
  

}

function draw() {
  background(255,255,255);  
  movingrect.x=mouseX;
  movingrect.y=mouseY;

    var result = isTouching(movingrect,obj4);

    if(result === true )
    {
      obj4.shapeColor="blue";
      movingrect.shapeColor="blue";
    }
    else if(result === false)
    {
      obj4.shapeColor="purple";
      movingrect.shapeColor="purple";
    }
    bounceOff(obj7,obj8);
    bounceOff(obj5,obj6);

  drawSprites();
}

