class SlingShot{
    constructor(body1, point2){
        var options = {
            bodyA: body1,
            pointB: point2,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = point2
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

        this.slingImage1=loadImage("polygon.png");
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
     image(this.slingImage1,200,80, 40, 145);
     image(this.slingImage2,175,80, 40, 80);
     

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(8);
            stroke(82,38,15);
            line(pointA.x-17, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-17, pointA.y, pointB.x+35, pointB.y);
            image(this.slingImage3,pointA.x-23,pointA.y-10, 10, 20);
        }
    }
    
}