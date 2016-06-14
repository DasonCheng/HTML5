/**
 * Created by Origin on 6/14/16.
 */
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
c.width = 800;
c.height = 500;

for (var x = 0; x < 800; x += 10) {
    ctx.moveTo(x, 0);
    ctx.lineTo(x, 500);
}
for (var y = 0; y < 500; y += 10) {
    ctx.moveTo(0, y);
    ctx.lineTo(800, y);
}
ctx.strokeStyle = "rgba(0,0,0,.3)";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(50, 450);
ctx.moveTo(45, 55);
ctx.lineTo(50, 50);
ctx.lineTo(55, 55);

ctx.moveTo(50, 250);
ctx.lineTo(750, 250);
ctx.moveTo(745, 245);
ctx.lineTo(750, 250);
ctx.lineTo(745, 255);

ctx.strokeStyle = "rgba(0,0,0,1";
ctx.stroke();

ctx.font = "bold 16px sans-self";
ctx.fillText('Y', 55, 60);
ctx.fillText('X', 740, 245);
ctx.fillText('0', 55, 245);

//sin曲线
ctx.beginPath();
ctx.moveTo(50, 250);
for (var x = 50; x < 750; x++) {
    ctx.lineTo(x, -100 * Math.sin((x - 50) * Math.PI / 180) + 250)
}
ctx.strokeStyle = "red";
ctx.stroke();

//cos曲线
ctx.beginPath();
ctx.moveTo(50, 150);
for (var x = 50; x < 750; x++) {
    ctx.lineTo(x, -100 * Math.cos((x - 50) * Math.PI / 180) + 250)
}
ctx.strokeStyle = "orange";
ctx.stroke();

//tan曲线
ctx.beginPath();
ctx.moveTo(50, 25);
for (var x = 50; x < 120; x++) {
    ctx.lineTo(x, -50 * Math.tan((x - 50) * Math.PI / 180) + 250)
}
ctx.strokeStyle = "blue";
ctx.stroke();

//贝塞尔曲线
ctx.beginPath();
ctx.moveTo(50, 250);
ctx.lineTo(450, 50);
ctx.lineTo(750, 250);
ctx.strokeStyle = "rgba(0,0,0,.3";
ctx.stroke();
ctx.beginPath();
ctx.moveTo(50, 250);
ctx.quadraticCurveTo(450, 50, 750, 250);
ctx.strokeStyle = "green";
ctx.stroke();
