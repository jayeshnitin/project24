
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground;
var box, box1, box2;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box = new Box(250, 10);
	box1 = new Box1(10, 100);
	box2 = new Box2(10, 100);

	ball = new Ball(100, 400);

	//ball = new Ball(100, 400, 50);

	ground = new Ground (600, 550, 1200, 20);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  //ball.bounceOff(box1);

  if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball.body, ball.body.position, {x:1, y:-4});
}
if(keyCode === 	DOWN_ARROW){
	Matter.Body.applyForce(ball.body, ball.body.position, {x:1, y:4});
}
  
  box.display();
  box1.display();
  box2.display();
  ball.display();
  ground.display();

  

  drawSprites();
 
}






