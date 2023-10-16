class MovingObject {
    constructor (hash) {
        this.pos = hash['pos'];
        this.vel = hash['vel'];
        this.radius = hash['radius'];
        this.color = hash['color'];
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = "#000000";
        ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    }

    move() {
        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];
    }
}
export default MovingObject;