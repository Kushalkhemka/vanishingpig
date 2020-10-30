class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visibility=255;
  }

  display()
  {
    if(this.body.speed>3)
    {
      World.remove(world,this.body);
      push();
      this.Visibility=this.Visibility-5;
      tint(255,this.Visibility);
      var pos=this.body.position
      image(this.image,pos.x,pos.y,50,50);
      pop();
    }
    else
    {
      super.display();
    }
    
  }

};