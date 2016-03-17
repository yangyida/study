window.onload = function(){

    var liList = document.querySelectorAll("li");

    var h = parseInt(getComputedStyle(liList[0]).height);

    var oDiv = document.createElement("div");
    oDiv.style.position = "absolute";
    oDiv.style.width = "100%";
    oDiv.style.height = "2px";
    oDiv.style.backgroundColor = "black";
    oDiv.style.left = "0px";
    document.getElementById("box").appendChild(oDiv);


    for(var i = 0; i < liList.length; i++){

        liList[i].setAttribute("draggable", "true");

        liList[i].ondragstart = function(){

        };

        liList[i].ondrag = function(e){
            //指向第几个元素
            var t = Math.ceil(e.pageY / h);
            //console.log(e);
            if(t <= liList.length){
                oDiv.style.top = t * h + "px";
            };
        };

        liList[i].ondragend = function(e){
            var oBox = document.getElementById("box");
            var t = Math.ceil(e.pageY / h);
            console.log(this);
            console.log(oBox.children[t]);
            console.log(t);
            oBox.insertBefore(this, oBox.children[t]);
        };
    };
};