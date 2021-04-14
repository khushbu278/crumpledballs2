class Ball {
    constructor() {
      var options = {
          restitution: 0.5, 
          density: 0.5,
          friction: 0.8,
      }
      this.body = Bodies.circle(50,50,20,options);
      this.image= loadImage("paper.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      fill("brown");
      image(this.image, pos.x, pos.y, 30, 30);
    }
  };