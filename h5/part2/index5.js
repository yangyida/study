window.onload = function(){

    var liList = document.querySelectorAll("li");

    for(var i = 0; i < liList.length; i++){
        liList[i].setAttribute("draggable", "true");
    };

    var oShow = document.getElementById("show");
    oShow.ondragover = function(e){
        e.preventDefault();
    };

    oShow.ondrop = function(e){
        console.log(e.relatedTarget);
        console.log(e.fromElement);
    };
};