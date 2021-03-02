
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var stone;
var ground;
var rubber;
var iron;
var sand1, sand2, sand3, sand4, sand5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	hammer = new Hammer(200,200,150,50);
	stone = new Stone(600,350,70,70);
  ground = new Ground(400,700,800,100);
  rubber = new Rubber(500,400,50);
  iron = new Iron(250,250,90,90);

  sand1 = new Sand(330,450,10);
  sand2 = new Sand(340,450,5);
  sand3 = new Sand(350,450,12);
  sand4 = new Sand(360,450,15);
  sand5 = new Sand(370,450,8);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  
  hammer.display();
  stone.display();
  ground.display();
  rubber.display();
  iron.display();

  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();

  drawSprites();
 
}



