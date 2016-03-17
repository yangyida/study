/**
 * 自由落体运动
 *
 */
var freeFallMove = function(element, confine, xSpeed ,ySpeed){

    var etl = element.style;

    var elementHeight = element.offsetHeight;

    var elementWidth = element.offsetWidth;

    var a = 10; //加速度

    var speed = xSpeed || 6;//速度

    var bottomConfine = confine.bottom;
    var rightConfine = confine.right;
    var leftConfine = confine.left;

    var timer = setInterval(function(){

        var originalTop = parseInt(getComputedStyle(element)["top"]);
        var originalLeft = parseInt(getComputedStyle(element)["left"]);

        speed += a;

        var toTop = originalTop + speed;
        var toLeft = originalLeft + ySpeed;

        if(toTop + elementHeight > bottomConfine){

            toTop = bottomConfine - elementHeight;
            speed *= -0.8;

            if(Math.abs(speed) < a){
                clearInterval(timer);
            };
        }

        if(originalLeft + ySpeed > rightConfine - elementWidth){
            toLeft = rightConfine - elementWidth;
            ySpeed *= -1;
        }
        else if(originalLeft + ySpeed < 0 ){
            toLeft = 0;
            ySpeed *= -1;
        }

        etl.top = toTop + "px";
        etl.left = toLeft + "px";

    }, 20);
};