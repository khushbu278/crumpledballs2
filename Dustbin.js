class Dustbin {
    constructor() {
      var options = {
          isStatic: true
      }
      this.body1 = Bodies.rectangle(width/2, height-10, 150 , 20, options);
      this.body2 = Bodies.rectangle(width/2-75, height-10, 20 , 70, options);
      this.body3 = Bodies.rectangle(width/2+75, height-10, 20 , 70, options);
      this.image= loadImage("dustbingreen.png");
      this.width = width;
      this.height = height;
      World.add(world, this.body1);
      World.add(world, this.body2);
      World.add(world, this.body3);
    }
    display(){
      var pos1 =this.body1.position;
    
      imageMode(CENTER);
      image(this.image, pos1.x, pos1.y-50 ,150,80);
      
    }
  };