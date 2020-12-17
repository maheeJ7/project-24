
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var rect1,rect2,rect3;

function setup() {
	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper = new Paper(200,150,3);


ground = new Ground(500,390,1000,20);


rec1=createSprite(850,height-50,200,20);
	rec1.shapeColor=color("yellow");

	rec2=createSprite(950,height-90,20,100);
	rec2.shapeColor=color("yellow");

	rec3=createSprite(750,height-90,20,100);
	rec3.shapeColor=color("yellow");




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  Engine.update(engine)
  paper.display();
  ground.display();
  
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:50})
  }
}

