const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    box2 = new Box(100,100,50,50)
    box1 = new Box(120,50,50,50);
    g = new ground();

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
   box2.display();
g.display();
}
