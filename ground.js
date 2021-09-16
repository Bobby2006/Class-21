class Ground 
{
  constructor(x, y, w, h) 
  {
    let options = {
      isStatic:true
    };
    
    this.myrectangularbody = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(myworld, this.myrectangularbody);
  }

  show() {
    var pos = this.myrectangularbody.position;
    push();
    rectMode(CENTER);
    stroke(255);
    fill(127);
    rect(pos.x, pos.y, this.w, this.h);
    pop();
  }
  
}


