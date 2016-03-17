window.onload = function(){

    var oBox = getId("box");

    var angle = 0;

    setInterval(function(){

        angle++;

        oBox.style.transform = "rotate("+ angle +"deg)"

    }, 13);
};

function getId(id){
    return document.getElementById(id);
}