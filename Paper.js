class Paper {
    constructor(x, y,radius) {
      var options = {
         // isStatic:false,
          restitution:0.8,
          friction:0.5,
                                   
          density:1.2
      }
      this.radius=70;
      this.body=Bodies.circle(x,y,radius,options);
      //this.image.Scale=0.1; 
      World.add(world,this.body);
     
     this.image=loadImage("Images/paper.png");
    }
    display(){
var pos=this.body.position;
var angle=this.body.angle;
fill("white");
rotate(angle);
imageMode(CENTER);
image(this.image,pos.x,pos.y);


    }
    }