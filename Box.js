class Box {
  constructor(x,y,width,height) {
    var options = {
        isStatic: false,
        friction:1
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.image=loadImage("rect.png");
    this.visibility=255
    World.add(world, this.body);
  }
  display(){
    
    if (this.body.speed<6 ){
      push(); 
      translate(this.body.position.x,this.body.position.y);
      rotate(this.body.angle);
      imageMode(CENTER); 
      image(this.image ,0,0,this.width, this.height );
       pop();   
     
    }
    else {
      World.remove(world,this.body);
      push()
      this.visibility=this.visibility-5;
      tint(255,this.visibility);
      image(this.image,this.body.position.x ,this.body.position.y,30,40 )
      pop()
    }
    
  }
  score(){
    if (this.visibility<200 && this.visibility>-105){
      score++
    }
  }
};
