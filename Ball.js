class Ball{

    constructor(x, y){

        var options= {
        
            'isStatic':false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
            
        };
        
        this.body = Bodies.circle(x, y, 25, options);
        World.add(world, this.body); 

    }

    display(){

        ellipseMode(CENTER);

        var pos = this.body.position;
        fill("blue");
        ellipse(pos.x, pos.y, 50, 50);


    }

}
