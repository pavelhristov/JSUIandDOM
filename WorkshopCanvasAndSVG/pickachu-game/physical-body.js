function createPhysicalBody(options) {
    "use strict";


    function move() {
        var self = this,
            lastCoordinates = JSON.parse(JSON.stringify(self.coordinates));
        // lastCoordinates = { x: self.coordinates.x, y: self.coordinates.y };

        self.coordinates.x += self.speed.x;
        self.coordinates.y += self.speed.y;

        return lastCoordinates;
    }

    function collidesWith(otherPhysicalBody) {
        var self = this,
            x1 = self.coordinates + self.width / 2,
            y1 = self.coordinates + self.height / 2,
            x2 = otherPhysicalBody.coordinates + otherPhysicalBody.width / 2,
            y2 = otherPhysicalBody.coordinates + otherPhysicalBody.height / 2;


        var distance = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));

        return distance <= (self.radius + otherPhysicalBody.radius);
    }

    var physicalBody = {
        coordinates: options.coordinates,
        speed: options.speed,
        height: options.height,
        width: options.width,
        radius: (options.width + option.height) / 4,
        move: move,
        collidesWith: collidesWith
    };

    return physicalBody;
}