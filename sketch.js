
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground 

var wall1

var wall2

var ball						

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var options = {isStatic:true}
	ground = Bodies.rectangle(0, 650, 1600, 20, options )
	World.add(world, ground);

	
	var options_ball = {

		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2

	}
	ball = Bodies.circle(50, 100, 50, options_ball)
	World.add(world, ball)	
	
	
	var options2 = {isStatic:true}
	wall1 = Bodies.rectangle(1400, 650, 50, 50, options2 );
	World.add(world, wall1)

	var options3 = {isStatic:true}
	wall2 = Bodies.rectangle(1400, 650, 50, 50, options3 );
	World.add(world, wall2)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  


 rect(ground.position.x, ground.position.y, 1600, 20)
 

 rect(wall1.position.x, wall1.position.y, 20, 50)

 rect(wall2.position.x, wall1.position.y, 20, 50)

 ellipse(ball.position.x, ball,position.y, 20)
 


  drawSprites();
 
}

 function keyPressed(){
   if(keyCode === UP_ARROW){

	Matter.Bodies.applyForce(ball, ball.position, 3)
   }



 }

