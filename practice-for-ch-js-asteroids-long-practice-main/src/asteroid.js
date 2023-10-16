import MovingObject from "./moving_object";
import * as Util from "./util.js";


class Asteroid extends MovingObject {
    static RADIUS = 100;
    static COLOR = 'red';

    constructor(options) {
        this.pos = options['pos'];
        this.vel = Util.randomVec();
        super();
    }
}

export default Asteroid;