var count = 0;
var i = document.getElementById("album");
var l = document.getElementById("leftbtn");
var r = document.getElementById("rightbtn");
function startAlbum(){

    l.onclick = function(){
        count -= 1;
        switchPhoto();
    };

    r.onclick = function(){
        count += 1;
        switchPhoto();
    }

}

function switchPhoto(){
    
    if (count < 0){
        count = 4;
    }

    if (count > 4){
        count = 0;
    }
    
    switch(count){

        case 0:
            i.src = "Images/Milkyway.jpg";
            break;
        case 1:
            i.src = "Images/fractal_pink_chalk.jpg";
            break;
        case 2:
            i.src = "Images/fractal_pink_spiral.jpg";
            break;
        case 3:
            i.src = "Images/fractal_red_nebula.jpg";
            break;
        case 4:
            i.src = "Images/fractal_sirograph_blue.jpg";
            break;
    }


}