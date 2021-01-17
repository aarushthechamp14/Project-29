const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(600,height,1200,20);
  stand = new Ground(600,350,600,20);

  box1 = new Box(800,300,50,70);
  box2 = new Box(400,300,50,70);
  box3 = new Box(450,300,50,70);
  box4 = new Box(500,300,50,70);
  box5 = new Box(550,300,50,70);
  box6 = new Box(600,300,50,70);
  box7 = new Box(650,300,50,70);
  box8 = new Box(700,300,50,70);
  box9 = new Box(750,300,50,70);
  box10 = new Box(450,250,50,70);
  box11 = new Box(500,250,50,70);
  box12 = new Box(550,250,50,70);
  box13 = new Box(600,250,50,70);
  box14 = new Box(650,250,50,70);
  box15 = new Box(700,250,50,70);
  box16 = new Box(750,250,50,70);
  box17 = new Box(500,200,50,70);
  box18 = new Box(550,200,50,70);
  box19 = new Box(600,200,50,70);
  box20 = new Box(650,200,50,70);
  box21 = new Box(700,200,50,70);
  box22 = new Box(550,150,50,70);
  box23 = new Box(600,150,50,70);
  box24 = new Box(650,150,50,70);
  box25 = new Box(600,100,50,70);

}

 function draw(){
    background("black");
    Engine.update(engine);

    ground.display();
    stand.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
 }
