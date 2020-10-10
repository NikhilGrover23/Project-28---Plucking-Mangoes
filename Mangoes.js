class Mango {
    constructor(x,y,radius){
        var options = {
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.body = Bodies.circle(x,y,radius/2,options);
        this.radius = radius;
        this.image = loadImage("sprites/mango.png");
        World.add(world,this.body)
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      strokeWeight(4);
      image(this.image,0, 0, this.radius,this.radius);
      pop();
    }
}
