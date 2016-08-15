function createBackground(options) {
    var backgroundCanvas = document.getElementById('background-canvas'),
        contex = backgroundCanvas.getContext('2d'),
        backgroundImg = document.getElementById('background-image');

    backgroundCanvas.height = options.height;
    backgroundCanvas.width = options.width;

    function render() {
        contex.drawImage(
            this.image,
            this.coordinates.x,
            0
        );
        context.drawImage(
            this.image,
            this.image.width - Math.abs(this.coordinates.x),
            0
        );
    }

    function update() {
        this.coordinates.x -= speedX;

        if (Math.abs(this.coordinates.x) > this.image.width) {
            this.coordinates.x = 0;
        }
    }

    var background = {
        image: backgroundImg,
        coordinates: { x: 0, y: 0 },
        speedX: options.speedX,
        render: render,
        update: update
    };

    return background;
}