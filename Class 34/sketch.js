const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, 500, 500, 30)

    box1 = new Box(700, 450, 100, 50)
    box2 = new Box(700, 450, 100, 50)
    box3 = new Box(700, 400, 100, 50 )
    box4 = new Box(700, 400, 100, 50 )
    box5 = new Box(700, 400, 100, 50 )
    box6 = new Box(700, 400, 100, 50 )
    box7 = new Box(500, 400, 100, 50 )
    box8 = new Box(500, 400, 100, 50 )
    box9 = new Box(500, 400, 100, 50 )
    box10 = new Box(500, 400, 100, 50 )

    box11 = new Box(500, 400, 100, 50 )
    box12 = new Box(500, 400, 100, 50 )
    box13 = new Box(600, 400, 100, 50 )
    box14 = new Box(600, 400, 100, 50 )
    box15 = new Box(600, 400, 100, 50 )    
    box16 = new Box(600, 400, 100, 50 )
    box17 = new Box(600, 400, 100, 50 )    
    box18 = new Box(600, 400, 100, 50 )
    box19 = new Box(400, 400, 100, 50 )
    box20 = new Box(500, 400, 100, 50 )

    ball = new Ball(100, 100, 50)

    rope = new Rope(ball.body, {x:500, y: 50})

}

function draw(){
    background(60, 46, 46);
   
    Engine.update(engine);
    ground.display()

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

    ball.display();

    rope.display();
}
