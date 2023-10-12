class Circle2 {
    radius;
    color;
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    getRadius() {
        return this.radius;
    }
    getArea() {
        return Math.PI*this.getRadius()**2;
    }
    setRadius(newRadius) {
        this.radius = newRadius;
    }
}