
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperball;
var dustbin1;

function preload()
{
  dustbinimg = loadImage("dustbingreen.png");
}
function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
  world = engine.world;
  
  binimg = createSprite(660,620,10,10);
  binimg.addImage(dustbinimg)
  binimg.scale = 0.5;
  
  paperball= new paper(150,680,35,35);
  dustbin1= new dustbin(600,635,10,80);
  dustbin2= new dustbin(660,700,120,10);
  dustbin3= new dustbin(720,635,10,80);
  ground1= new ground(0,700,1600,20);
	Engine.run(engine);
  
}


function draw() {
  background("white");
 // Engine.update(engine);
 drawSprites();
  
  paperball.display();
  ground1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

 // keyPressed(); 
  
  
}

function keyPressed(){
    if(keyCode === UP_ARROW)
    {
      Matter.Body.applyForce(paperball.body, paperball.body.position, {x:65,y:-50});
    }
    
}