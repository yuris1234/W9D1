class MovingObject {
    constructor (hash) {
        this.pos = hash['pos'];
        this.vel = hash['vel'];
        this.radius = hash['radius'];
        this.color = hash['color'];
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = (this.color);
        ctx.stroke();
    }
}
export default MovingObject;