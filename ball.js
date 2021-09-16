class Ball
{
    constructor(xpos, ypos, radius)
    {
        this.x=xpos;
        this.y=ypos;
        this.r=radius;

        var options =
        {
            restitution: 0.4,
        }

        this.mycircularbody = Bodies.circle(this.x, this.y, this.r, options);
        World.add(myworld, this.mycircularbody);
    }

    show()
    {
        ellipseMode(RADIUS);
        ellipse(this.mycircularbody.position.x, this.mycircularbody.position.y, this.r, this.r);
    }
}