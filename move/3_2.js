window.onload = function(){

    var oBg = getId("bg");
    var oList = getId("list");
    var oBgChild = getId("bgChild");
    var oBox = getId("box");

    var timer1 = null;
    var timer2 = null;

    oList.onmouseover = function(e){

            timer1 && timer1();
            timer2 && timer2();

            var toLeft = e.target.offsetLeft;
            timer1 = tan(
                {
                    element : oBg,
                    type : "left",
                    targetLocation : toLeft
                }
            );

            timer2 = tan(
                {
                    element : oBgChild,
                    type : "left",
                    targetLocation : -1 * toLeft
                }
            );
    };

    oBox.onmouseout = function(e){

        if("bg" in e.toElement.dataset){
            console.log(e.toElement);
            return;
        }

        console.log(e.toElement);

        if(e.toElement.parentElement != this){

            timer1 && timer1();
            timer2 && timer2();

            timer1 = tan(
                {
                    element : oBg,
                    type : "left",
                    targetLocation : 0
                }
            );

            timer2 = tan(
                {
                    element : oBg,
                    type : "left",
                    targetLocation : 0
                }
            );
        }
    }

};

function getId(id){
    return document.getElementById(id);
};

function tan(opt) {

    var stop = false;

    var opt = {
        element: opt.element,
        type: opt.type,
        targetLocation: parseInt(opt.targetLocation)
    };

    var speed = 6;

    var timer = setInterval(function () {

        if(stop){
            clearInterval(timer);
            return;
        };

        var original = parseInt(getComputedStyle(opt["element"])[opt.type]);

        var aSpeed = (opt.targetLocation - parseInt(getComputedStyle(opt.element)[opt.type])) / 6;

        speed = speed * 0.75;

        speed += aSpeed;

        opt.element["style"][opt.type] = speed + original + "px";

        if (Math.abs(speed) <= 1 && Math.abs(aSpeed) <= 1) {
            clearInterval(timer);
            opt.element["style"][opt.type] = opt.targetLocation + "px";

        }

    }, 20);

    return function(){
        stop = true;
    };
}