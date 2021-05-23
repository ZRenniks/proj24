const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var ball1,rocc,rocc2,fancyRocc

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    ball1 = new Rubber(1100,20,80);
    rocc = new Stone(300,300);
    rocc2 = new Stone(200,300);
    fancyRocc = new Iron(200,200);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    ball1.display();
    rocc.display();
    rocc2.display();
    fancyRocc.display();
}