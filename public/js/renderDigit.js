
// const endTime=new Date(2016,0,1,0,0,0);
var endTime=new Date();
endTime.setTime(endTime.getTime()+3600*1000);

var curShowTimeSeconds=0;

var balls=[];
var colors=['#33b5e5','#0099cc','#aa66cc','#9933cc','#99cc00','#669900','#ffbb33','#ff8800','#ff4444','#cc0000'];

window.onload=function(){
	window_width=document.body.scrollWidth;
	window_height=document.documentElement.scrollHeight>document.documentElement.clientHeight?document.documentElement.scrollHeight:document.documentElement.clientHeight;
	radius=Math.round(window_width*4/5/114)-1;
	margin_top=Math.round(window_height*2/5);
	margin_left=Math.round((window_width-(radius+1)*114)/2);
	console.log(window_width+'-'+window_height+'-'+radius+'-'+margin_top+'-'+margin_left);

	var canvas=document.getElementById('canvas');
	var context=canvas.getContext('2d');

	canvas.width=window_width;
	canvas.height=window_height;

	curShowTimeSeconds=getCurrentTimeSeconds();

	setInterval(function(){
		render(context);
		update();
		console.log(balls.length)
	},50);
}

function getCurrentTimeSeconds(){
	var curTime=new Date();
	var ret=endTime.getTime()-curTime.getTime();
	ret=Math.round(ret/1000);
	return ret>=0?ret:0;
}

function update(){
	var nextShowTimeSeconds=getCurrentTimeSeconds();

	var nextHours=checkTime(parseInt((nextShowTimeSeconds/(60*60))));
	var nextMinutes=checkTime(parseInt((nextShowTimeSeconds/60)%60));
	var nextSeconds=checkTime(parseInt(nextShowTimeSeconds%60));

	var curHours=checkTime(parseInt((curShowTimeSeconds/(60*60))));
	var curMinutes=checkTime(parseInt((curShowTimeSeconds/60)%60));
	var curSeconds=checkTime(parseInt(curShowTimeSeconds%60));

	if(nextSeconds!=curSeconds){
		if(parseInt(curHours/10)!=parseInt(nextHours/10)){
			addBalls(margin_left,margin_top,parseInt(nextHours/10))
		}
		if(parseInt(curHours%10)!=parseInt(nextHours%10)){
			addBalls(margin_left+15*(radius+1),margin_top,parseInt(nextHours%10))
		}

		if(parseInt(curMinutes/10)!=parseInt(nextMinutes/10)){
			addBalls(margin_left+39*(radius+1),margin_top,parseInt(nextMinutes/10))
		}
		if(parseInt(curMinutes%10)!=parseInt(nextMinutes%10)){
			addBalls(margin_left+54*(radius+1),margin_top,parseInt(nextMinutes%10))
		}

		if(parseInt(curSeconds/10)!=parseInt(nextSeconds/10)){
			addBalls(margin_left+78*(radius+1),margin_top,parseInt(nextSeconds/10))
		}
		if(parseInt(curSeconds%10)!=parseInt(nextSeconds%10)){
			addBalls(margin_left+93*(radius+1),margin_top,parseInt(nextSeconds%10))
		}

		curShowTimeSeconds=nextShowTimeSeconds;
	}
	updateBalls();
}

function updateBalls(){
	var cnt=0;
	for(var i=0;i<balls.length;i++){
		balls[i].vy+=balls[i].g;
		balls[i].x+=balls[i].vx;
		balls[i].y+=balls[i].vy;
		if(balls[i].y>=window_height-radius){
			balls[i].y=window_height-radius;

			balls[i].vy=-Math.floor(balls[i].vy*0.85);
		}
		if(balls[i].x+radius>0&&balls[i].x-radius<window_width){
			balls[cnt++]=balls[i];
		}
	}
	while(balls.length>Math.min(300,cnt))
		balls.pop();
}

function addBalls(x,y,num){
	for(var i=0;i<digit[num].length;i++){
		for(var j=0;j<digit[num][i].length;j++){
			if(digit[num][i][j]==1){
				var aBall={
					x:x+j*2*(radius+1)+(radius+1),
					y:y+i*2*(radius+1)+(radius+1),
					g:2+Math.random(),
					vx:Math.pow(-1,Math.ceil(Math.random()*1000))*6,
					vy:-5,
					color:colors[Math.floor(Math.random()*colors.length)]
				}
				balls.push(aBall);
			}
		}
	}
}
function render(cxt){
	cxt.clearRect(0,0,window_width,window_height);

	var hours=checkTime(parseInt((curShowTimeSeconds/(60*60))));
	var minutes=checkTime(parseInt((curShowTimeSeconds/60)%60));
	var seconds=checkTime(parseInt(curShowTimeSeconds%60));



	renderDigit(margin_left,margin_top,parseInt(hours/10),cxt);
	renderDigit(margin_left+15*(radius+1),margin_top,parseInt(hours%10),cxt);

	renderDigit(margin_left+30*(radius+1),margin_top,10,cxt);

	renderDigit(margin_left+39*(radius+1),margin_top,parseInt(minutes/10),cxt);
	renderDigit(margin_left+54*(radius+1),margin_top,parseInt(minutes%10),cxt);

	renderDigit(margin_left+69*(radius+1),margin_top,10,cxt);

	renderDigit(margin_left+78*(radius+1),margin_top,parseInt(seconds/10),cxt);
	renderDigit(margin_left+93*(radius+1),margin_top,parseInt(seconds%10),cxt);

	for(var i=0;i<balls.length;i++){
		cxt.fillStyle=balls[i].color;
		cxt.beginPath();
		cxt.arc(balls[i].x,balls[i].y,radius,0,2*Math.PI,false);
		cxt.closePath();
		cxt.fill();
	}
}
function checkTime(Char){
			return Char<10?('0'+Char):Char;
		}
function renderDigit(x,y,num,cxt){
	cxt.fillStyle='rgb(0,102,153)';

	for(var i=0;i<digit[num].length;i++){
		for(var j=0;j<digit[num][i].length;j++){
			if(digit[num][i][j]==1){
				cxt.beginPath();
				cxt.arc(x+j*2*(radius+1)+(radius+1),y+i*2*(radius+1)+(radius+1),radius,0,2*Math.PI,false);
				cxt.closePath();
				cxt.fill();
			}
		}
	}
}