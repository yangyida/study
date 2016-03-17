window.onload = function(){
    var oD1 = document.getElementById("d1");

    var downX = -1;

    var upX = -1;

    oD1.onmousedown = function(e){

        downX = e.offsetX;

    };

    oD1.onmouseup = function(e){

        upX = e.offsetX;

        var selectedStr = document.getSelection().toString().trim();

        selectedStr && (function(){

            //一个字符的宽度

            console.log(document.getSelection().getBoundingClientRect());

        })();

    };


};

var wordWidth = function(dom, str){

    //如果str为空则返回0
    if(!str.trim()){
        return 0;
    }
    else{



    }

};