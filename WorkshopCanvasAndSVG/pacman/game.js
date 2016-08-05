/* globals window document console */
const labyrinth = [
        "*******************************",
        "*******************************",
        "*******************************",
        "*******************************",
        "*******************************",
        "*******************************",
        "*******************************",
        "*******************************"
    ],
    ballChar = " ";
wallChar = "*";

function createGame(pacmanSelector, mazeSelector) {
    "use strict";
    var pacmanCanvas = document.querySelector(pacmanSelector),
        mazeCanvas = document.querySelector(mazeSelector),
        isMounthOpen,
        ctx = pacmanCanvas.getContext("2d"),
        pacman = {
            "x": 20,
            "y": 20,
            "size": 30,
            "speed": 2
        },
        dir = 0,
        keyCodeToDirs = {
            "37": 2,
            "38": 3,
            "39": 0,
            "40": 1
        },
        /*
         * 0 -> right
         * 1 -> down
         * 2 -> left
         * 3 -> up
         */
        ball = {
            "x": 200,
            "y": 100,
            "size": 5
        };

    const dirDeltas = [{
        "x": +1,
        "y": 0
    }, {
        "x": +0,
        "y": +1
    }, {
        "x": -1,
        "y": 0
    }, {
        "x": 0,
        "y": -1
    }];

    const rows = maze.length,
        colums = maze[0].length;

    var steps = 0;

    const stepsToChangeMounth = 20;

    function gameLoop() {
        ctx.clearRect(pacman.x - 5, pacman.y - 5, pacman.size + 10, pacman.size + 10);
        drawPacman();

        steps += 1;
        if (0 === (steps % stepsToChangeMounth)) {
            isMounthOpen = !isMounthOpen;
        }

        drawBall();

        if (areColliding) {
            //TODO
        }
        if (updatePacmanPosition()) {
            ctx.clearRect(0, 0, pacmanCanvas.width, pacmanCanvas.height);
        }
        window.requestAnimationFrame(gameLoop);
    }

    function drawPacman() {
        var deltaRadians;
        ctx.fillStyle = "yellow";
        ctx.beginPath();
        if (isMounthOpen) {
            var x = pacman.x + pacman.size / 2;
            var y = pacman.y + pacman.size / 2;
            deltaRadians = dir * Math.PI / 2;
            ctx.arc(x, y, pacman.size, Math.Pi / 4, 7 * Math.PI / 4);
            ctx.lineTo(x, y);
        } else {
            ballToDraw(pacman);
        }
        ctx.fill();
    }

    function ballToDraw(ball) {
        var x = ball.x + ball.size / 2;
        var y = ball.y + ball.size / 2;
        ctx.arc(ball.x, ball.y, ball.size, 0, 2 * Math.PI);
    }

    function drawBall() {
        ctx.fillStyle = "blue";
        ctx.beginPath();
        ballToDraw(ball);
        ctx.fill();
    }

    function updatePacmanPosition() {

        pacman.x += dirDeltas[dir].x * pacman.speed;
        pacman.y += dirDeltas[dir].y * pacman.speed;

        if ((pacman.x < 0 || pacman.x > pacmanCanvas.width) ||
            (pacman.y < 0 || pacman.y > pacmanCanvas.height)) {
            pacman.x = (pacman.x + pacmanCanvas.width) % pacmanCanvas.width;
            pacman.y = (pacman.y + pacmanCanvas.height) % pacmanCanvas.height;
            return true;
        }
        return false;
    }

    function positionToBounds(obj1) {
        return {
            "top": obj1.y,
            "left": obj1.x,
            "bottom": obj1.y + obj1.size,
            "right": obj1.x + obj1.size
        };
    }

    function areColliding(obj1, obj2) {
        var sizes1 = positionToBounds(obj1);
        var sizes2 = positionToBounds(obj2);
        return (((sizes1.left <= sizes2.left && sizes2.left <= sizes1.right) ||
                (sizes1.left <= sizes2.right && sizes2.right <= sizes1.right)) &&
            ((sizes1.top <= sizes2.top && sizes2.top <= sizes1.bottom) ||
                (sizes1.top <= sizes2.bottom && sizes2.bottom <= sizes1.bottom)));

        //x1 <= x` || x1 <= x`` <=x2
        //and
        //y1 <= y` || y1 <= y`` <=y2
    }

    document.body.addEventListener("keydown", function(ev) {
        if (keyCodeToDirs.hasOwnProperty(ev.keyCode)) {

        }
        dir = keyCodeToDirs[ev.keyCode];
    });

    function drawMaze(ctx, maze) {
        ballSize = 15;
        var row,
            col,
            cell,
            obj,
            balls = [];
        for (row = 0; row < maze.length; row += 1) {
            for (col = 0; col < maze[row].length; col += 1) {
                cell = maze[row][col];
                if (cell === ballChar) {
                    obj = {
                        "x": col * cellSize + ballSize,
                        "y": row * cellSize + ballSize,
                        "size": ballSize
                    };
                }
            }
        }
    }

    return {
        "start": function() {
            drawMaze(ctxMaze, maze);
            getBallsPosition(maze, cellSize);
            gameLoop();
        }
    };
}