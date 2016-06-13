/**
 * Created by Origin on 6/13/16.
 */
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

context.fillRect(0, 0, 100, 100);
context.strokeRect(120, 0, 100, 100);
context.fillStyle = "red";
context.strokeStyle = "blue";

context.moveTo(0,0);
context.lineTo(200,100);
context.stroke();