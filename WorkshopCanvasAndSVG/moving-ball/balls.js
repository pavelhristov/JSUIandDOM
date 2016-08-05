var canvas = document.getElementById("balls-canvas"),
    ctx = canvas.getContext("2d");

var balls = {
    "left": 50,
    "top": 50,
    "size": 50,
    "speed": 2,
    "dir": 0,
    "deltaX": +1,
    "deltaY": +1
};

const width = canvas.width,
    height = canvas.height;


function drawBall(ctx, obj) {
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.arc(obj.left + obj.size / 2,
        obj.top + obj.size / 2,
        obj.size / 2,
        0, 2 * Math.Pi / 2);

    ctx.fill();
}

function updatePosition(obj) {
    obj.left += obj.speed * obj.deltaX;
    obj.top += obj.speed * obj.deltaY;

    if (obj.top < 0 || obj.top + obj.size > height) {

    }
}

function loop() {
    drawBall(ballCtx, ball);
    updatePosition(ball);
}

loop();