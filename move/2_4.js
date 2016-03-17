var b = 0;

window.onload = function () {

    var a = new ToTop(
        {
            position: "fixed",
            width: "22px",
            height: "22px",
            backgroundColor: "red",
            cursor: "pointer",
            right: "0px",
            bottom: "0px"
        }
    );

    a.element.style.display = "none";

    var isShow = false;

    var t = null;

    window.addEventListener("scroll", function(){

        if(document.body.scrollTop >= document.documentElement.clientHeight){

            if(isShow){
               return;
            }

            isShow = true;

            a.element.style.display = "";
            a.element.style.opacity = "0";

            t && t.stopNow();

            t = Yd.move(
                a.element,
                {opacity : 1},
                1,
                200
            );
        }
        else{

            if(!isShow){
                return;
            }

            isShow = false;

            t && t.stopNow();

            t = Yd.move(
                a.element,
                {opacity : 0},
                1,
                200
            );

        }

    }, false);

};

var ToTop = function (styles) {

    var This = this;

    This.styles = styles;

    This._init(styles);

    This.isRun = false;
};

ToTop.prototype = {
    constructor: ToTop,

    _init: function () {

        var flag = 0;

        var This = this;

        var oElement = document.createElement("div");

        This.element = oElement;

        for (var key in This.styles) {
            oElement["style"][key] = This.styles[key];
        }
        ;

        document.body.appendChild(oElement);

        /**
         * 点击图标使页面滚动到最顶
         */
        oElement.addEventListener("click", function (e) {

            e.stopPropagation();

            if (!This.isRun) {
                This.isRun = true;
            }
            else {
                return;
            }

            var scrollTop = 0;
            var scrollElement = null;

            if (document.body.scrollTop) {
                scrollElement = document.body;
            }
            else {
                scrollElement = document.documentElement;
            }

            var timer = setInterval(function () {

                if (This.isRun) {
                    flag = 1;
                    scrollTop = scrollElement.scrollTop;

                    var speed = Math.ceil(scrollTop / 8);

                    if (scrollTop > 0) {
                        scrollElement.scrollTop = scrollTop - speed;
                    }
                    else {
                        scrollElement.scrollTop = 0;
                        This.isRun = false;
                    }

                }
                else {
                    clearInterval(timer);
                }


            }, 20);

        }, false);

        /**
         * 控制图标在页面中位置不变(绝对定位时用到, fixed定位不需要以下事件)
         */
        /*window.addEventListener("scroll", function () {

            var scrollTop = 0;
            var scrollLeft = 0;
            var scrollElement = document.body;

            if (document.documentElement.scrollTop || document.documentElement.scrollLeft) {
                scrollElement = document.body;
            }

            scrollTop = scrollElement.scrollTop;
            scrollLeft = scrollElement.scrollLeft;

            oElement.style.top = parseInt(This.styles["top"]) + scrollTop + "px";
            oElement.style.left = parseInt(This.styles["left"]) + scrollLeft + "px";
        }, false);*/

        /**
         * 鼠标滚动时停止上滚动画
         */
        window.addEventListener("scroll", function(){

            //当滚动进行时才执行以下操作
            if(This.isRun && flag != 1){
                This.stop();
            };

            flag = 0;
        }, false);

        document.addEventListener("click", function(){

            if(This.isRun){
                This.stop();
            };

        }, false);

    },

    stop: function () {
        this.isRun = false;
    }
};