const Bodies=Matter.Bodies
const World=Matter.World
const Engine=Matter.Engine
var bgimg;
var Snow =[];
function preload(){
  bgimg=loadImage("snow3.jpg");
}

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(900,800);
  
  Engine.run(engine);
}

function draw() {
  background(bgimg);  
 
  if(frameCount%40===0){
    for (var i=0;i<25;i=i+1){
      Snow.push(new snow(random(10,800),random(0,100),10));
    }
  }

  for (var k = 0; k < Snow.length; k++) {
    Snow[k].display();
}

drawSprites();
}