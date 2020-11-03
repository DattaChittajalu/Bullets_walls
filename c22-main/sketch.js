const World= Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;

var engine, world;
var ground;
var ball

function setup() {
  createCanvas(400,400);
  engine= Engine.create();
  world= engine.world;

  var ground_options= {
    isStatic : true
  }

  ground = Bodies.rectangle(200,380,400,10,ground_options);
  World.add(world,ground)
  console.log(ground)
  ball_options={
    restitution:0.5
  }
  ball= Bodies.circle(200,100,25, ball_options)
  World.add(world,ball)
}

function draw() {
  background(0); 
  Engine.update(engine) 
  rectMode(CENTER)
  
  rect( ground.position.x , ground.position.y ,400,10);

  ellipseMode(CENTER)
  ellipse(ball.position.x, ball.position.y, 50, 50)
  
  drawSprites();
}