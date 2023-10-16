import MovingObject from "./moving_object"
window.MovingObject = MovingObject;

document.addEventListener("DOMContentLoaded", () => {
    const myCanvas = document.getElementById('game-canvas');
    myCanvas.height = 500;
    myCanvas.width = 500;
    const ctx = myCanvas.getContext('2d');

    const mo = new MovingObject({
        pos: [300, 300],
        vel: [10, 10],
        radius: 20
        ,
        color: "#00FF00"
      });
    
      mo.draw(ctx);
});