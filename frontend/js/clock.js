var canvas = document.getElementById("canvas");
canvas.width=400;
canvas.height=400;
var radius= canvas.height/2;
var c= canvas.getContext("2d");
c.beginPath();
c.translate(radius,radius);

radius=radius*0.90;
setInterval(clock, 1000);
function clock(){
c.arc(0,0,radius,2*Math.PI,false);
c.fillStyle="#ffdbc5";
c.fill();
var grad=c.createRadialGradient(0, 0 ,radius * 0.95, 0, 0, radius * 1.05);
grad.addColorStop(0, '#6f4a8e');
grad.addColorStop(0.5, 'white');
grad.addColorStop(1, '#6f4a8e');
c.strokeStyle=grad;
c.lineWidth=radius*0.1;
c.stroke();
c.beginPath();
c.arc(0,0,radius*0.1,2*Math.PI,false);
c.fillStyle='#221f3b';
// c.strokeStyle='red';
// c.stroke();
c.fill();

c.font = radius * 0.15 + "px arial";
c.textBaseline = "middle";
c.textAlign = "center";
for(var num = 1; num < 13; num++){
  var ang = num * Math.PI / 6;
  c.rotate(ang);
  c.translate(0, -radius * 0.85);
  c.rotate(-ang);
  
  c.fillText(num.toString(), 0, 0);

  c.rotate(ang);
  c.translate(0, radius * 0.85);
  c.rotate(-ang);
}


c.beginPath();

var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  hour = hour%12;
  hour = (hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
  drawHand(c, hour, radius*0.5, radius*0.07);
  
  minute = (minute*Math.PI/30)+(second*Math.PI/(30*60));
  drawHand(c, minute, radius*0.8, radius*0.07);

  second = (second*Math.PI/30);
  drawHand(c, second, radius*0.9, radius*0.02);}

  
function drawHand(c, pos, length, width) {
  c.beginPath();
  c.lineWidth = width;
  c.lineCap = "round";
 
  c.moveTo(0,0);
  c.rotate(pos);
  c.lineTo(0, -length);
  c.strokeStyle='#6f4a8e';
  c.stroke();
  c.beginPath();
  c.rotate(-pos);

 
}