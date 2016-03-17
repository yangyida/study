window.onload = function(){

    var box = document.getElementById("box");

    for(var i = 0; i < box.children.length; i++){

        var li = box.children[i];

        li.setAttribute("draggable", "true");
        li.dataset.item = i;

        li.ondragstart = function(e){
            e.dataTransfer.setData("self", this.dataset.item);
        };

    };

    var show = document.getElementById("show");

    show.ondragover = function(e){
        e.preventDefault();
    };

    show.ondrop = function(e){
        var data = e.dataTransfer.getData("self");
        var targetLi = document.querySelector("[data-item='"+data+"']");
        show.appendChild(targetLi);
    };

    box.ondragover = function(e){
        e.preventDefault();
    };

    box.ondrop = function(e){
        var data = e.dataTransfer.getData("self");
        var targetLi = document.querySelector("[data-item='"+data+"']");
        box.appendChild(targetLi);
    };
};