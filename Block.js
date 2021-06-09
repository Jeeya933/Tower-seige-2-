class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.visibility = 255; 
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image= loadImage("block.png")
      this.visibility = 255;
    }
    display(){
      var pos= this.body.position;
      rectMode(CENTER);
      if(this.body.speed <3){
        this.visibility = 255; 
        rect(pos.x, pos.y, width.x, width.y)
      }
      else 
      {
        World.remove(this.body, world )
        push();
        this.visibility = this.visibility - 5; 
        tint (255, this.visibility);
        pop()
      }

    }}

    