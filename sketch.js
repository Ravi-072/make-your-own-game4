const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ball1,ball2;
var ball3,ball4,ball5;
var ball6,attackBall7;

var engine, world;

var score = 0;

function preload() {
   }

function setup(){
    var canvas = createCanvas(600,600);   
    engine = Engine.create();
    world = engine.world

    ball1a= new Ball1(100,80);
    ball1b= new Ball1(150,80);
    ball1c = new Ball1(200,80);
    ball1d = new Ball1(250,80);
    ball1e= new Ball1(300,80);
    ball1f = new Ball1(350,80);
    ball1g = new Ball1(400,80);
    ball1h = new Ball1(450,80);
    
    ball2a = new Ball2(150,160);
    ball2b = new Ball2(200,160);
    ball2c = new Ball2(250,160);
    ball2d = new Ball2(300,160);
    ball2e = new Ball2(350,160);
    ball2f = new Ball2(400,160);

    ball3a = new Ball3(200,250);
    ball3b = new Ball3(270,250);
    ball3c = new Ball3(340,250);

   attackBall7 = new AttackBall7(280,550);
}

function draw(){
   background("green");
   
  Engine.update(engine);

  ball1a.display();
  ball1b.display();
  ball1c.display();
  ball1d.display();
  ball1e.display();
  ball1f.display();
  ball1g.display();
  ball1h.display();

  ball2a.display();
  ball2b.display();
  ball2c.display();
  ball2d.display();
  ball2e.display();
  ball2f.display();

  ball3a.display();
  ball3b.display();
  ball3c.display()

  attackBall7.display();
}

