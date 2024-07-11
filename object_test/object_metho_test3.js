const pointA = {
    x: 2,
    y: 3,
    distanceTo: function(secondPoint) {
        let xDiff = this.x - secondPoint.x; 
        let yDiff = this.y - secondPoint.y;
        // using pythagorean theorem to compute the square root of the squared differences 
        // in x and y coordinates
        return Math.sqrt(xDiff * xDiff + yDiff * yDiff);  
    }
}; 

const pointB = {
    x: 5,
    y: 1
};

let distance = pointA.distanceTo(pointB);
console.log(`The distance between A and B is ${distance}`); 
