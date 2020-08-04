class Plinko {
    constructor(x,y){
            var options={
                isStatic: true
            }
            this.x = x;
            this.y = y;
            this.radius = 10;
            this.body = Bodies.circle(x,y,10,options);
            World.add(world, this.body)
    }
    display(){
        var pos = [this.body.position.x, this.body.position.y]
        fill("white");
        ellipseMode(CENTER);
        //using arrays to give this.body.position.x, and this.body.position.y to circle
        ellipse(pos[0],pos[1],this.radius);
    }
}