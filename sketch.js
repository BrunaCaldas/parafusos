
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var minecraft 
var chocolate
var pokebola
var chao

var minecraftconfig
var chocolateconfig
var pokebolaconfig
var chaoconfig

function setup() {
	createCanvas(800, 700);
	engine = Engine.create(); 
	world = engine.world;
    minecraftconfig = {
	restitution: 0.5,
	friction: 0.02,
	frictionAir: 0,
}
chocolateconfig = {
	restitution: 0.7,
	friction: 0.01,
	frictionAir: 0.1,
}
pokebolaconfig = {
	restitution: 0.01,
	friction: 0.1,
	frictionAir: 1,
}
chaoconfig = {
	isStatic: true
}   
chao= Bodies.rectangle (600, 580, 1200, 2,chaoconfig);
World.add (world,chao)

	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
    minecraft = Bodies.rectangle (110, 50, 20, 20,minecraftconfig);
	World.add (world,minecraft)
    
	chocolate = Bodies.rectangle (350, 50, 40, 20,chocolateconfig);
	World.add (world,chocolate)
	Engine.run(engine);
  
	pokebola = Bodies.circle(220, 50, 20,pokebolaconfig);
	World.add (world,pokebola)
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update (engine)
  drawSprites();
  rect(minecraft.position.x,minecraft.position.y,20,20);
  rect(chocolate.position.x,chocolate.position.y,40,20);
  ellipse(pokebola.position.x,pokebola.position.y,20,20);
  rect(chao.position.x,chao.position.y,1200,2)
} 



