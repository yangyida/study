window.onload = function(){

    var liList = document.querySelectorAll("li");

    var oMusic = document.querySelector("#music");

    for(var i = 0; i < liList.length; i++){

        liList[i].onmouseenter = function(){
            var index = this.dataset["d"];
            oMusic.src = "http://s8.qhimg.com/share/audio/piano1/" + index + "4.mp3";
            oMusic.load();
            oMusic.play();

        }

        liList[i].onmouseleave = function(){
            oMusic.pause();
        }
    }
}

function getIndex(oElement){

    var parentElement = oElement.parentElement;

    if(parentElement){

        for(var i = 0; i < parentElement.children.length; i++){
            if(oElement == parentElement.children[i])
            {
                return i;
            }
        }

    }else{
        return 0;
    }
}
