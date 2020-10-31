class tree{
    constructor(x,y,w,h)
    {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(x, y, w,h);
        this.image = loadImage("Plucking mangoes/tree.png");
        World.add(world, this.body);
    }
    display()
    {
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        this.body.addImage(this.image);
    }
}