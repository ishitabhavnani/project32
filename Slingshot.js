class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 1
        }
        this.pointB = pointB
        this.body = Constraint.create(options);
        World.add(world, this.body);

    }

    attach(body){
        this.body.bodyA=body;
        
     }

    display(){
        if (this.body.bodyA)
        {
            var pointA=this.body.bodyA.position;
            var pointB=this.body.pointB

            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }        

       
    }
    
   fly(){
        this.body.bodyA = null;
    }

}