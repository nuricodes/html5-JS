let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// c is context or the drawer/pencil/what we use to create
var c = canvas.getContext('2d')

// to change color of shape
c.fillStyle = 'rgba(255, 0, 0, 0.3)'
// first 2 x/y where on screen 2nd 2 size
c.fillRect(100, 100, 100, 100)
c.fillStyle = 'rgba(0, 255, 0, 0.3)'
c.fillRect(800, 300, 100, 100)
c.fillStyle = 'rgba(0, 0, 255, 0.3)'
c.fillRect(600, 700, 100, 100)

/////////////
// Line
/////////////
// start a path do connect to anything proceeding it
c.beginPath();
//where we want the line to start using x,y axis
c.moveTo(50, 300)
// where we want line to go
c.lineTo(300, 100);
c.lineTo(400, 300);
// how to add color to lines
c.strokeStyle = "#f83483";
//for line to show stroke method needed
c.stroke();

/////////////
// Arc
/////////////
// // for just 1 circle
// c.beginPath()
// c.arc(500, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = "red"
// c.stroke();

// for a few
for (let i = 0; i < 20; i++) {
    // to randomly place circles
    var x = Math.random() * window.innerHeight;
    var y = Math.random() * window.innerWidth;
    // randomize colors
    var r = Math.random() * 255;
    var g = Math.random() * 255;
    var b = Math.random() * 255;

    c.beginPath()
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.strokeStyle = `rgba(${r}, ${g}, ${b})`
    c.stroke();

}
