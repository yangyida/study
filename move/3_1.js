window.onload = function(){

    var oBtn = getId("btn");
    var oBox = getId("box");

    oBtn.onclick = function(){

        tan({
            element : oBox,
            type : "left",
            targetLocation : "600px"
        });

    };
};

function getId(id){
    return document.getElementById(id);
};

function speedUp(opt){

    var opt = {
        element : opt.element,
        type : opt.type,
        targetLocation : parseInt(opt.targetLocation)
    };

    var speed = 10;

    var timer = setInterval(function(){

        var original = parseInt(getComputedStyle(opt["element"])[opt.type]);

        if(original < opt.targetLocation){

            opt.element["style"][opt.type] = speed + original + "px";

            speed = Math.floor(speed * 1.1);

        }
        else{
            opt.element["style"][opt.type] = opt.targetLocation + "px";
            clearInterval(timer);
        }

    }, 20);

};

function speedDown(opt){

    var opt = {
        element : opt.element,
        type : opt.type,
        targetLocation : parseInt(opt.targetLocation)
    };

    var speed = -1;

    var timer = setInterval(function(){

        var original = parseInt(getComputedStyle(opt["element"])[opt.type]);

        if(original < opt.targetLocation){

            speed = Math.ceil((opt.targetLocation - original) / 10);

            opt.element["style"][opt.type] = speed + original + "px";

        }
        else{
            opt.element["style"][opt.type] = opt.targetLocation + "px";
            clearInterval(timer);
        }

    }, 20);
};

function tan(opt){

    var opt = {
        element : opt.element,
        type : opt.type,
        targetLocation : parseInt(opt.targetLocation)
    };

    var speed = 6;

    var timer = setInterval(function(){

        var original = parseInt(getComputedStyle(opt["element"])[opt.type]);

        var aSpeed = (opt.targetLocation - parseInt(getComputedStyle(opt.element)[opt.type])) / 6;

        speed = speed * 0.75;

        speed += aSpeed;

        opt.element["style"][opt.type] = speed + original + "px";

        console.log("speed : " + speed);
        console.log("aSpeed : " + aSpeed);

        if(Math.abs(speed) <= 1 && Math.abs(aSpeed) <= 1){

            console.log(speed);
            console.log(aSpeed);
            clearInterval(timer);
            opt.element["style"][opt.type] = opt.targetLocation + "px";

        }

    }, 20);
};