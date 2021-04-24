const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var base, slingshot;

function preload(){
    slingshot=loadImage("polygon.png");
}

function setup(){
    canvas = createCanvas(1600,800);

    engine = Engine.create();
    world = engine.world;

    base = new Ground(800, 450, 50, 10);
    slingshot = new SlingShot()
}

function draw(){
    Engine.update(engine);

    base.display();

}