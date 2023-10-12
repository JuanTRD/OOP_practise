let circle1 = new Circle2(2, "black");
let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");

circle1.setRadius(40)
ctx.beginPath();
ctx.arc(100,50,circle1.getRadius(),0,2*Math.PI);
ctx.stroke();

document.write(circle1.getRadius() + "<br/>");
document.write(circle1.getArea())