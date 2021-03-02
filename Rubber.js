class Rubber{
    constructor(x,y){
        var options = {
            'restitution' : 0.3,
            'friction' : 5,
            'density' : 1
        }
        this.body = Bodies.circle(x,y,20,options);
        this.r = 20;

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(4);
        stroke("green");
        fill(255);
        circle(0,0,50);
        pop();
    }
}