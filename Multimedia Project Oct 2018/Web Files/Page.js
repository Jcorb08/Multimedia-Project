var id;
var x;
var nav = document.getElementById("navheader");

function navOpen() {
    
    nav.style.display= "block";
    x = 0;
    id = setInterval(function (){
        if (x == 200){
            clearInterval(id);
        }else{
            x++;
            nav.style.width = x +'px';
        }
    }, 0);
    document.getElementById("openbtn").style.display="none";
}

function navClose() {

    nav.style.width="0";
    setTimeout(function(){
        nav.style.display= "none";
        document.getElementById("openbtn").style.display="inline";
    },300);
}

window.onload = function(){
       
    var c = nav.childNodes;
    var col = "rgb(114, 180, 52)";
    if (document.title == "Orbit - Home"){
        c[3].style.color = col;
        startAlbum();
    }
    if (document.title == "Orbit - Greeting"){
        c[5].style.color = col;
    }    
    if (document.title == "Orbit - Hobbies"){
        c[7].style.color = col;
    }
    if (document.title == "Orbit - Coursework"){
        c[9].style.color = col;
    }
    if (document.title == "Orbit - Sources"){
        c[11].style.color = col;
    }
    if (document.title == "Orbit - Animation"){
        c[13].style.color = col;
        startAnimation();
    }
    //won't load unless animation.js present
    
    
}

