window.onload = function(){

    var oBox = getId("box");

    var centerX = document.documentElement.offsetWidth / 2;
    var centerY = document.documentElement.offsetHeight / 2;
    var r = 150;

    var move = (function(){

        var angle = 0;

        var timer= null;

        function move(){

            angle += 1;

            var oSize = getSize(200, 200, angle);
            var oLocation = getLocation(r, angle, centerX, centerY);

            var oDiv = document.createElement("div");
            setStyle(oDiv,{
                width: "1px",
                height: "1px",
                backgroundColor : "#ccc",
                position: "absolute",
                top : "10px",
                left : oLocation.left + "px"
            });
            document.body.appendChild(oDiv);

            setStyle(oBox,{
                width : oSize.width + "px",
                height: oSize.height + "px",
                left : oLocation.left + "px",
                opacity: oSize.opacity
            });

        };

        return {
            start : function(){
                timer || (timer = setInterval(move, 13));
            },
            pause : function(){
                timer && clearInterval(timer);
                timer = null;
            }
        };

    })();

    oBox.onmouseenter = function(){
        move.pause();
    };

    oBox.onmouseleave = function(){
        move.start();
    };

    move.start();
};

function setStyle(element, params){

    for(var key in params){
        element["style"][key] = params[key];
    }
}

function getSize(width, height, angle){

    var scale = (Math.cos(Math.PI*angle/180) + 2) / 3;

    return {
        width : width * scale,
        height : height * scale,
        opacity : scale
    };
}

function getLocation(r, angle, centerX, centerY){

    var hu = Math.PI * angle / 180;

    return {
        left : r * Math.sin(hu) + centerX,
        top : r * Math.cos(hu) + centerY
    };
}

function getId(id){
    return document.getElementById(id);
}