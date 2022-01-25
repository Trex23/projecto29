class SlingShot{
    constructor(bodyA, pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.04,
            length: 10
        }
        this.pointB=pointB;
        this.sling= Constraint.create(options);
        World.add(world,this.sling);
        
    }

    fly(){
        this.sling.bodyA=null;
    }

    display(){
        if(this.sling.bodyA){
            var puntoA, puntoB;
            puntoA=this.sling.bodyA.position;
            puntoB=this.pointB;
            strokeWeight(4);
            line(puntoA.x,puntoA.y,puntoB.x,puntoB.y);
            
        }
        
    }
}