const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var boy;
var stone;
var tree;
var mango1, mango2;
var mango3, mango4;
var slingshot;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,650,850,20);

	boy = new Boy(150,550,150,400);

	stone = new Stone(100,450,50,50);

	tree = new Tree(500,365,400,600);

	mango1 = new Mango(370,250,60);
	mango2 = new Mango(550,120,60);
	mango3 = new Mango(630,200,60);
	mango4 = new Mango(570,300,60);

	slingshot =  new Slingshot(boy,stone);

	Engine.run(engine);
  
}


function draw() {
rectMode(CENTER);
background("grey");

  ground.display();

  boy.display();

  stone.display();

  tree.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();

  slingshot.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);


  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function detectCollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<-lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}

function setPosition(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:100,y:450});
		slingshot.attach(stone.body);
	}
}
