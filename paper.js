class Paper{
    constructor(x,y){
        var options = {
            'restitution':0.3,
            'isStatic':false,
            'friction':0.5,
            'density':1.2

        }
        this.body = Matter.Bodies.circle(x,y,50,options);
        this.radius=3;

        World.add(world,this.body);
    
    }
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x,pos.y);
       
        stroke("white");
        fill("yellow");
        circle(0, 0, this.radius);
        pop();
        ellipse(pos.x,pos.y,50);
    }
}