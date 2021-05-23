var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(width/2,height,width,10);
  ground2 = new Ground(height-width,width/2,10,width);
  ground3 = new Ground(height,width/2,10,width);

  //create division objects
  for (var k = 0; k <=800; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,150));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,250));
  }

  //create 3rd row of plinko objects
  for (var j = 75; j <=width; j=j+50) {
    plinkos.push(new Plinko(j,350));
  }
  
  //create 4th row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,450));
  } 
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground1.display();
  ground2.display();
  ground3.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //create particle objects
  if (frameCount%60 === 0) {
    particles.push(new Particales(random(0,800),0,10,10))
  }

  //display the paricles 
  for (var m = 0; m < particles.length; m++) {
    particles[m].display();
  }
}