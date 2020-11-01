var box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	box1=createSprite(width/2,height-45,120,10);

  box2=createSprite(335,height-90,10,100);

  box3=createSprite(460,height-90,10,100);


	ground = new Ground(width/2,600,800,20);
	paper = new Paper(300,600,50,50);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, this.body);

	paper = paperObject.Body(300, 600, width, 10 , {isStatic:false} );
	World.add(world, this.body);

	box1= Bodies.rectangle(width/2,height-45,100,10 , {isStatic:true} );

	 box2= Bodies.rectangle(350,height-90,10,50 , {isStatic:true} );
   
	 box3= Bodies.rectangle(450,height-90,10,50 , {isStatic:true} );

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(50);
  Jump();
  ground.display();
  paper.display();
  drawSprites();
 
}


function Jump(){
if(keyCode === UP_ARROW) {
Matter.Body.applyForce(paperObject.Body,paperOject.Body.position,{x:85,y:-85});

}
}
