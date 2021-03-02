class Sand{
    constructor(x,y,r){
        var options = {
            'restitution' :1.5,
            'friction' : 3,
            'density' : 1
        }
        // physics circle body takes radius(r) 
        this.body = Bodies.circle(x,y,r,options);
        this.r = r;

        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(4);
        stroke("orange");
        fill(255);
        //circle function(phisical body to display) takes diameter(this.r*2)
        circle(0,0,this.r*2);
        pop();
    }
}