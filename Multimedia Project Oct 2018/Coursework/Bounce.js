window.onload = function (){

var paper = new Raphael(0,0, 800, 600);

var backGround = paper.rect(0,0,800,600);

var back = paper.rect(200,200,400,200);

backGround.attr({ fill: "blue", "fill-opacity": 0.5, 'stroke-width': 200, 'stroke-dasharray': '.'});

back.attr({ fill: "red", 'stroke-width': 50, 'stroke-dasharray': '| '});

/* Comment - Add your code here*/
var ball = paper.circle(50,50,30);

var ball2 = paper.circle(50,50,50);

ball.attr({ fill: "45-green-yellow"});

function bounce_drop1() { ball.animate({cy: 570 , cx: 400}, 500, 'ease-in', bounce_up1);}

function bounce_up1() {

	//ball.animate({cy: 50, cx: 750}, 500, 'ease-out', bounce_drop2);
	ball.animate({cy: 50, cx: 750}, 500, 'ease-out', bounce_return);

}

/*
function bounce_drop2() {

	ball.animate({cy: 570 , cx: 400}, 500, 'ease-in', bounce_up2);

}

function bounce_up2() {

	ball.animate({cy: 50, cx: 50}, 500, 'ease-out', bounce_drop1);

}
*/

function bounce_return() {ball.animate({cy: 50 , cx: 50}, 250, 'ease-in', bounce_drop1);}
	
function ball_2(){	ball2.animate({cy: 570 , cx: 400}, 500, '', function(){
	ball2.animate({cy: 50, cx: 750}, 500, 'ease-out', function(){
	ball2.animate({cy: 50 , cx: 50}, 250, 'ease-in', ball_2)})})
	}

bounce_drop1();
ball_2();

/* group as sets to move together 
http://www.craic.com/code_examples/raphael_live/raphael_live.html# 
http://dmitrybaranovskiy.github.io/raphael/reference.html

*/
}