class Ball {

    constructor(x, y, r){
        var paper_options={
            isStatic: false,
           restitution: 0,
           friction:1,
           density:1.2
        }
        //define all the Box properties here
        this.x=x
        this.y=y
        this.r=r
        this.body = Bodies.circle (this.x,this.y,this.r/2,paper_options);
        this.img=loadImage("polygon.png");
        World.add(world, this.body);
    }

    //define all the Box functions here
    display () {
        push(); 
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER); 
        image(this.img ,0,0,this.r,this.r );
         pop();
       
    }
}