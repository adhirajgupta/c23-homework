const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var stick1;
var stick2g;
var stick3;
var stick4;
var stick5;
var stick6;
var stick7;
var stick8;
var stick9;

function setup() {
  createCanvas(1550,800);
  engine = Engine.create();
    world = engine.world;
  //createSprite(400, 200, 50, 50);
  stick1 = new Stick(760,120,150,200,0);
  stick2g = new Stick(775,700,1550,50,0);
  stick3 = new Stick(100,380,100,600,0);
  stick4 = new Stick(1450,380,100,600,0);
  stick5 = new Stick(205,450,100,500,0);
  stick6 = new Stick(1345,450,100,500,0);
  stick7 = new Stick(775,273,1040,150,0);
  //stick8 = new Stick(775,450,10,50,0);
  //stick9 = new Stick(790,465,10,50,90);
}

function draw() {
  background(0,0,0);  
  //stick3.collide(stick2g);
  drawSprites();
  stick1.display();
  stick2g.display();
  stick3.display();
  stick4.display();
  stick5.display();
  stick6.display();
  stick7.display();
  //stick8.display();
  //stick9.display();
}