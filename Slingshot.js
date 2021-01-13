class Slingshot{
    constructor(point1, body1){
        var options = {
            pointA:point1,
            bodyB: body1,
            stiffness: 0.04,
            length: 10
        }
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);
        this.pointA = point1;
        this.bodyB = body1; 
    }

    display(){
        if(this.slingshot.bodyB !== undefined){
            var pointA = this.slingshot.pointA;
            var pointB = this.bodyB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        
    }
    fly(){
        console.log("In fly function..")
        this.slingshot.bodyB = null ;
        
    }
    
}