const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas, player, comp, player_base, comp_base;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   comp_base = new Comp_Base(width-300,450,180,150);x
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  push();
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
  pop();

  comp_base.display();

   //Display Playerbase and computer base 


   //display Player and computerplayer


}
