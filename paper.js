class Paper {
    constructor(x,y,width,height) {
      var options = { 
          isStatic: false,
          restsitution:0.5,
          friction:0,5,
          density:1.2
         
      }
    
      this.body = Bodies.circle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image= loadImage("paper.png");
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill("brown");
     ellipse(56,45,55,55);
    }
  };