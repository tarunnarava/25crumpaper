class Dustbin {
    constructor(x, y,) {
      var options = {
          isStatic:true,
         
      }
      this.width=width;
      this.body=Bodies.rectangle(x,y,width,height,options);
      World.add(world,this.body);
     this.image=loadImage("Images/dustbingreen.png");
    }
    display(){
var pos=this.body.position;
var angle=this.body.angle;
fill("green");
//rotate(angle)
rectMode(CENTER);
image(this.image,pos.x,pos.y,this.width,this.height);


    }
    }