

var audio;
var moon;
var earth;
var paper;
var backGround;
var shuttle;
var sun;
var logo;
var playButtonCircle;
var playButtonTriangle;
var fire;


function start(){


    paper = new Raphael( document.getElementById("canvas"), 865, 500);
    backGround = paper.rect( 0, 0, 865, 500);
    backGround.attr({ fill: "black", 'stroke-dasharray': '.', stroke: "gold"});
    audio = new Audio("Web Files/music.mp3");
    logo = paper.image("Images/Logo.png",120.5,100,623,303);
    playButtonCircle = paper.circle(589,162,40).attr({"fill" : "grey"});
    playButtonCircle.toFront();
    playButtonTriangle =  
        paper.path("m 597,162 -6.9155994,3.992723 -6.91559871,3.9927231 0,-7.9854463 0,-7.9854455 6.91559911,3.992723 z")
        .attr({"fill" : "#292d33"});
    playButtonTriangle.toFront();
    playButtonTriangle.scale(3,3); 
    moon = paper.circle(150,275,0).attr({fill: "30-#292d33-grey"});
    earth = paper.image("Images/Icon.png",605,200,0,0);
    sun = paper.circle(0,0,0).attr({fill: "30-orange-red"}), colourChange = 
    [{fill: "30-red-orange"}, {fill: "30-orange-red"}],
    change = 1; 
 
}

function animation(){

    
    playButtonCircle.animate({r:0}, 0, 'linear');
    playButtonTriangle.animate({"transform" : "S0,0"},0,'linear');
    logo.animate({width : 0, height : 0}, 1000, 'linear');
    audioStart();
    moon.animate({r: 30}, 50, "ease-in");

    setTimeout( function(){earth.animate({width : 144, height : 150},50, "ease-in")}, 400);    
    
    setTimeout( function(){sun.animate({r:150}, 50, "elastic")}, 800); 

    setTimeout( function(){
        shuttleFireAppear();
        shuttle.animate({"fill" : "white"}, 50, 'ease-out')}, 1200);
    
    setTimeout( function(){
        var fireAnimation = Raphael.animation(fireTransformation[0], 1900, 'ease-out');
        fire.animate(fireAnimation);
        shuttle.animateWith(fire,fireAnimation,shapeTransformation[0], 1900, 'ease-out');
        }, 1600);
    
    setTimeout( function(){
        var fireAnimation = Raphael.animation(fireTransformation[1] , 1600, 'linear');
        fire.animate(fireAnimation);
        shuttle.animateWith(fire,fireAnimation,shapeTransformation[1] , 1600, 'linear'); 
        changeSun()}, 3500);
    
    setTimeout( function(){
        var fireAnimation = Raphael.animation(fireTransformation[0], 1700, 'ease-in');
        fire.animate(fireAnimation);
        shuttle.animateWith(fire,fireAnimation,shapeTransformation[0], 1700, 'ease-in');
        changeSun()}, 5100);
    
    setTimeout( function(){
        var fireAnimation = Raphael.animation(fireTransformation[2], 1700, 'linear');
        fire.animate(fireAnimation);
        shuttle.animateWith(fire,fireAnimation,shapeTransformation[2], 1700, 'linear');
        changeSun()}, 6800);
    
    setTimeout( function(){
        var fireAnimation = Raphael.animation(fireTransformation[0], 1700, 'ease-out');
        fire.animate(fireAnimation);
        shuttle.animateWith(fire,fireAnimation,shapeTransformation[0], 1700, 'ease-out');
        changeSun()}, 8500);
    
    setTimeout( function(){
        var fireAnimation = Raphael.animation(fireTransformation[1] , 1700, 'linear');
        fire.animate(fireAnimation);
        shuttle.animateWith(fire,fireAnimation,shapeTransformation[1] , 1700, 'linear');
        changeSun()}, 10200);
    
    setTimeout( function(){
        fire.animate({"transform":"...S0,0"},0);
        shuttle.animate({"transform" : "...R170,150,340S0,0", "fill" : "black"}, 1700, 'linear');
        changeSun()}, 11900);
    
    setTimeout( function(){
        moon.animate({r: 0}, 50, 'ease-in');
        changeSun()}, 13600);
    
    setTimeout( function(){
        earth.animate({width : 0, height : 0}, 50, 'ease-in');
        changeSun()}, 14000);
    
    setTimeout( function(){sun.animate({r: 0}, 1000, 'linear')}, 14500);
    setTimeout( function(){logo.animate({width : 623, height : 303}, 1000, 'linear');}, 15500);
    
    setTimeout( function(){
        playButtonCircle.animate({r:40}, 0, 'linear');
        playButtonTriangle.animate({"transform" : "S3,3"},0,'linear');
        stop();
    }, 16500);
}

function playButtonColour() {

    playButtonCircle.attr({"fill" : "#292d33"});
    playButtonTriangle.attr({"fill" : "grey"});
}

function playButtonReset(){


    playButtonCircle.attr({"fill" : "grey"});
    playButtonTriangle.attr({"fill" : "#292d33"});
}

function stop(){

    audio.pause();
    audio.currentTime = 0; 
}

function audioStart(){
    audio.play();
}

function changeSun(){

    sun.animate(colourChange[+(change = !change)], 0, 'elastic');
}

function shuttleFireAppear(){
    shuttle = paper.path('m 700,170 -63.499995,0.377977 -6.803572,8.315476 -15.1190487,5.291666 -3.023807,4.913693 3.023808,4.34672 21.7336317,4.34673 h 74.272325 l 20.4107,-1.5119 -9.44941,-1.32292 -0.18898,-4.91369 8.31547,2.26786 -0.18898,-16.630955 -8.50446,3.779761 c 0.0315,-0.661459 2.27974,-4.878415 2.74033,-5.953125 l 1.98437,-4.630208 v 0 l 1.79539,-4.252233 5.95312,-14.8355657 -22.1116,0.377976 z')
    .attr({"fill": "black"}),  shapeTransformation = [
        {"transform" : "...t-500,0"},
        {"transform" : "...R-180,150,275S1,-1"},
        {"transform" : "...R180,650,275S1,-1"}];
       
    fire = paper.text(742, 185, "🔥").animate({"transform" : "r90S2,2", "opacity" : "1"}, 0), fireTransformation = [
        {"transform" : "...t0,250"},
        {"transform" : "...R-180,150,285"},
        {"transform" : "...R-180,650,285"}];;
}

function startAnimation(){
    
    start();

    playButtonCircle.node.onmouseover = function(){playButtonColour()};
    playButtonTriangle.node.onmouseover = function(){playButtonColour()};

    playButtonCircle.node.onmouseout = function(){playButtonReset()};
    playButtonCircle.node.onmouseout = function(){playButtonReset()};

    
    backGround.node.onmouseout = function(){fire.animate({opacity : 0}, 500, 'ease-in')};
    backGround.node.onmouseover = function(){fire.animate({opacity : 1}, 500, 'ease-out');};

    playButtonCircle.node.onclick = function(){animation()};
    playButtonTriangle.node.onclick = function(){animation()};
}  


        
