const Engine=Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
var engine,world,object;
var ball;
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var groundOptions={isStatic:true}
  object=Bodies.rectangle(200,390,400,20,groundOptions);
  World.add(world,object);
  var ballOptions={restitution:1.0}
ball=Bodies.circle(200,100,20,ballOptions);

World.add(world,ball);

}

function draw() {
  background("purple"); 
  Engine.update(engine) ;
  rectMode (CENTER);
  fill ("yellow");
  rect(object.position.x,object.position.y,400,20);
fill ("orange");
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20,20);



}


