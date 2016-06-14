/**
 * Created by Origin on 6/13/16.
 */
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");

// ctx.fillRect(0, 0, 100, 100);
// ctx.strokeRect(120, 0, 100, 100);
// ctx.fillStyle = "red";
// ctx.strokeStyle = "blue";
//
// ctx.moveTo(0,0);
// ctx.lineTo(200,100);
// ctx.stroke();
ctx.font="30px Arial";
//实心
ctx.fillText("Hello World",10,50);
ctx.strokeText("Hello World",10,100);