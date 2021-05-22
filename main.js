import * as lib from "./modules/canvas.js"

console.log('module was loaded');
const parent = document.getElementById('root');
window.myCanvas = lib.create('my-canvas',parent,500,500);
lib.createAllColors(window.myCanvas.ctx);

