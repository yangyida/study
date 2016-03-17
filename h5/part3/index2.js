window.onload = function(){

    var oColor = document.getElementById("color");
    var oC = document.getElementById("c");
    var cc = oC.getContext("2d");

    var initX = 0;
    var initY = 0;
    var isDown = false;

    oC.onmousedown = function(e){

        if(!isDown){
            isDown = true;
            initX = e.offsetX;
            initY = e.offsetY;
        }

    };

    oC.onmousemove = function(e){

        if(isDown){
            cc.beginPath();
            cc.moveTo(initX, initY);
            initX = e.offsetX;
            initY = e.offsetY;
            cc.strokeStyle = oColor.value;
            cc.lineTo(initX, initY);
            cc.stroke();
        };
    };

    oC.onmouseleave = oC.onmouseup = function(e){
        if(isDown){
            isDown = false;
        }
    };


};