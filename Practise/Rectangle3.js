class Rectangle3 {
    width;
    length;
    constructor(width, length) {
        this.width = width;
        this.length = length;
    }
    getWidth() { return this.width; }
    getLength() { return this.length; }
    getArea() { return this.getWidth()*this.getLength(); }
    getPerimeter() { return (this.getWidth()+this.getLength())*2}
}