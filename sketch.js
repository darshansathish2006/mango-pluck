
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject, Sling;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stoneObj = new stone(100,100);
	
	//Sling = new sling(boy.body, {x:200, y:100});


	Engine.run(engine);

}

function draw() {

  background(230);
  image(boy ,200,340,200,300);

  treeObj.display();
  mango1.display();

  groundObject.display();
  stoneObj.display();
  //Sling.display();
}
