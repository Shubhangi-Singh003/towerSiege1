const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
var engine, world;
var ground, stand1, stand2;
var polygon;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10
var block11, block12, block13, block14, block15, block16
var  block17, block18, block19, block20, block21;
var  block22, block23, block24, block25;
var SlingShot;
function setup(){
createCanvas(1000,400);
engine = Engine.create();
world = engine.world;
ground = new Ground(500, 385,1000,30);
stand1 = new Ground(400,280,250,10);
stand2 = new Ground(770, 180, 200, 10);
block1 = new Box(310, 255, 30, 40);
block2 = new Box(340,255,30,40);
block3 = new Box(370,255, 30,40);
block4 = new Box(400, 255, 30,40);
block5 = new Box(430, 255, 30 ,40)
block6 = new Box(460,255,30,40);
block7 = new Box(490, 255, 30,40);
block8 = new Box(340,215,30,40)
block9 = new Box(370,215, 30, 40)
block10 = new Box(400, 215, 30 ,40)
block11 = new Box(430, 215, 30, 40)
block12 = new Box(460, 215, 30, 40)
block13 = new Box(370, 175, 30, 40)
block14 = new Box(400, 175, 30, 40)
block15 = new Box(430, 175, 30, 40)
block16 = new Box(400, 135,30,40);
block17 = new Box(710, 155,30,40);
block18 = new Box(740, 155,30,40);
block19 = new Box(770, 155,30,40);
block20 = new Box(800, 155,30,40);
block21 = new Box(830, 155,30,40);
block22 = new Box(740, 115,30,40);
block23 = new Box(770, 115,30,40);
block24 = new Box(800, 115,30,40);
block25 = new Box(770, 75,30,40);

polygon = Bodies.circle(50,200,20);
World.add(world, polygon);

slingShot = new SlingShot(this.polygon, {x:100, y:200})
}

function draw(){
background(22)
ground.display();
stand1.display();
stand2.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();
block22.display();
block23.display();
block24.display();
block25.display();
slingShot.display();

    
}