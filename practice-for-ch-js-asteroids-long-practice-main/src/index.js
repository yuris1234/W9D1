import MovingObject from "./moving_object"
window.MovingObject = MovingObject;

document.addEventListener("DOMContentLoaded", () => {
    const myCanvas = document.getElementById('game-canvas');
    myCanvas.height = 500;
    myCanvas.width = 500;
    const ctx = myCanvas.getContext('2d');

    const mo = new MovingObject({
        pos: [300, 300],
        vel: [100, 100],
        radius: 20,
        color: "red"
    });
    
    mo.draw(ctx);
    setTimeout(() => {
        mo.move();
        mo.draw(ctx);
    }, 5000)
});