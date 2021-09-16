const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let myengine;
let myworld;

var ground;
var left;
var right;
var top_wall;

var ball;

var xbutton, ybutton;

function setup() {
  createCanvas(400,400);
  myengine = Engine.create();
  myworld = myengine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);

  ball = new Ball(200,200,10);
 
  xbutton = createImg("right.png");
  xbutton.position(60,50);
  xbutton.size(50,50);
  xbutton.mouseClicked(hforce);

  ybutton = createImg("up.png");
  ybutton.position(80,90);
  ybutton.size(50,50);
  ybutton.mouseClicked(vforce);

}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(myengine);

  ball.show();
}

function hforce()
{
  Body.applyForce(ball.mycircularbody, {x:0,y:0}, {x:-0.02,y:0});
}

function vforce()
{
  Body.applyForce(ball.mycircularbody, {x:0,y:0}, {x:0,y:-0.02});
}