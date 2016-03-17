window.onload = function(){

    var oBox = document.getElementById("box");

    var liArray = document.getElementsByTagName("li");

    Yd.changeToAbsolute(oBox);

    //禁止图片的默认事件
    for(var i = 0; i < liArray.length; i++){
        liArray[i].children[0].onmousedown = function(e){
            e.preventDefault();
        };
    };

    for(var i = 0; i < liArray.length; i++){
        new Yd.Drag(liArray[i]);
    };


};