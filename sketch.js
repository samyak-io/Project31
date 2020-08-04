const Engine = Matter.Engine;
const Bodies  = Matter.Bodies;
const World = Matter.World;

var engine;
var world;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  var canvas = createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

  //create ground
  ground = new Ground(width/2, height, width, 20);

      //create division loop
      for(var k = 0; k <= width; k = k + 80) {
        divisions.push(new Division(k, height - divisionHeight/2 - 10, 10, divisionHeight));
      }
  
      for(var j = 40; j <= width; j=j+50){
        plinkos.push(new Plinko(j,75));
      }

      for(var j = 15; j<= width-10; j=j+50){
        plinkos.push(new Plinko(j,175));
      }

      // for(var l = 5; l<= width - 5; l=l+10){
      //   particles.push(new Particle(l,50,10));
      // }

}
    

function draw() {
  background("black");
  Engine.update(engine);  
  

  if(frameCount %60 === 0){
    particles.push(new Particle(random(width/2 -10, width/2+10),10,10));
  }

  //display bodies
  ground.display();

  for(var j = 0; j < particles.length; j++){
    particles[j].display();
  }
  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }
  for(var l = 0; l < plinkos.length; l++){
    plinkos[l].display();
  }

}