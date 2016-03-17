window.onload = function(){

    /*oBox = document.getElementById("box");

    bindEvent(oBox, "say", function(){
        console.log(this);
    });*/

    /*var A = function(o){
        this.c = o || "默认";
    };

    var B = function(o){
        A.call(this, o);
    };

    var a = new A();

    B.prototype = a;
    B.prototype.constructor = B;

    var b = new B("ABC");
    delete b.c;
    a.c = "陡壁";
    console.log(b.c);

    B.prototype = {};*/

    var b1T = document.querySelectorAll("#b1 button");
    var b1B = document.querySelectorAll("#b1 div");

    Yd.bindEvent(b1T[0], "showbefore", function(){
        console.log(this);
        alert("b1T[0] showbefore");
    });

    Yd.bindEvent(b1B[2], "showafter", function(){
        console.log(this);
        alert("b1B[2] showafter");
    });

    new Yd.Tag({
        titleDoms : b1T,
        boxDoms :b1B,
        delay : 300,
        event : "mouseenter",
        calBack : function(){
            for(var i = 0; i < b1T.length; i++){
                b1T[i].style.backgroundColor = "";
            }
            this.style.backgroundColor = "red";
        }
    });

    var b2T = document.querySelectorAll("#b2 button");
    var b2B = document.querySelectorAll("#b2 div");

    new Yd.Tag({
        titleDoms : b2T,
        boxDoms :b2B,
        delay : 300,
        event : "click",
        calBack : function(){
            for(var i = 0; i < b2T.length; i++){
                b2T[i].style.backgroundColor = "";
            }
            this.style.backgroundColor = "red";
        }
    });
};