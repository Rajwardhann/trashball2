class paper
{
    constructor(x,y,width,height)
    {
        var paper_options=
        {
        isStatic : false,
        restitution : 0.3,
        friction : 0.5,
        density : 1.2
        }
        this.body = Bodies.rectangle(x,y,width,height,paper_options)
        World.add(world,this.body);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height
        this.image = loadImage("paper.png")
    }

    display()
    {
        push();
        fill("cyan");
        imageMode(CENTER);
        translate(this.body.position.x,this.body.position.y)
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}
