class Hammer{
    constructor(x,y,width,height){
        var options = {
            'restitution' : 0.5,
            'density' : 2,
            'friction' : 1.0
        }
        this.body = Bodies.rectangle(x,y,this.width,this.height, options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        pos.x = mouseX;
        pos.y = mouseY;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(4);
        stroke("red");
        rectMode(CENTER);
        fill(255);
        rect(0,0,this.width,this.height);
        pop();
    }
}