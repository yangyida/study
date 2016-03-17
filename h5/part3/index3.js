window.onload = function(){

    var oC = document.getElementById("c");
    var cc = oC.getContext("2d");
    var x = 0;
    var y = 0;
    cc.fillRect(x,y,50,50);

    var isDown = false;

    document.onkeydown = function(e){
        e.preventDefault();

        if(!isDown){
            isDown = true;
            move.start(e.keyCode);
        }

    };

    document.onkeyup = function(){
        if(isDown){
            isDown = false;
            move.stop();
        }
    };

    var move = (function(){

        var timer = null;

        var speed = 1;

        function start(code){

            stop();

            timer = setInterval(function(){

                cc.clearRect(0,0,500,500);

                switch(code){
                    case 37 :
                        x -= 1;
                        break;
                    case 38:
                        y -= 1;
                        break;
                    case 39:
                        x += 1;
                        break;
                    case 40:
                        y += 1;
                        break;
                };

                cc.fillRect(x,y,50,50);

            }, 13);

        };

        function stop(){
            if(timer){
                clearInterval(timer);
                timer = null;
            }
        };

        return {
            start : start,
            stop : stop
        };
    })();
};