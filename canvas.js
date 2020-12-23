let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// c is context or the drawer/pencil/what we use to create
var c = canvas.getContext('2d')
// first 2 x/y where on screen 2nd 2 size
c.fillRect(100, 100, 100, 100)
c.fillRect(800, 300, 100, 100)
c.fillRect(600, 700, 100, 100)