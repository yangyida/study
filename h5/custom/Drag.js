var Drag = {};

/**
 * 获得元素计算后的样式
 * @param element(object)
 * @param style(string)
 * @returns {*|jQuery.style|Function|CSSStyleDeclaration}
 */
Drag.getStyle = function(element, style){
    return getComputedStyle(element)[style];
};

/**
 * 获得新元素
 * @param type elementDom类型(string)
 * @param styles 样式(object)
 * @returns {Element}
 */
Drag.createElement = function(type, styles){

    var o = document.createElement(type);

    Drag.setStyles(o, styles);

    return o;
};

/**
 * 设置元素样式
 * @param element (object)
 * @param styles  (object)
 */
Drag.setStyles = function(element, styles){

    for(var key in styles){
        element.style[key] = styles[key];
    };
};

Drag.toTop = function(element){

    var distance = element.offsetTop;
    var parent = element.offsetParent;

    while(parent){
        distance += parent.offsetTop;
        parent = parent.offsetParent;
    }

    return distance;
};

Drag.toLeft = function(element){

    var distance = element.offsetLeft;
    var parent = element.offsetParent;

    while(parent){
        distance += parent.offsetLeft;
        parent = parent.offsetParent;
    }

    return distance;
};

/**
 * 拖拽
 * @param element dom对象
 * @constructor
 */
Drag.Drag = function(element){

    //目标元素
    this.element = element;
    //背景定位父元素
    this.oBgParent = null;
    //背景元素
    this.oBg = null;
};

Drag.Drag.prototype = {

    constructor : Drag.Drag,

    init : function(){
        var element = this.element;

        this.oBgParent = element;

        this.oBg = Drag.createElement("div",{
            position : "absolute",
            left : "-2px",
            top : "-2px",
            width: Drag.getStyle(element, "width"),
            height : Drag.getStyle(element, "height"),
            border: "2px dashed #ccc"
        });

        var mousemoveEvent = this.mousemove();
        var mouseupEvent = this.mouseup(mousemoveEvent);
        element.onmousedown = this.mousedown(mousemoveEvent, mouseupEvent);
    },

    mousedown : function(mousemoveEvent, mouseupEvent){

        var This = this;
        var element = This.element;

        return function(e){

            //开启鼠标事件
            This.mouseaction = true;

            This.mousedownX = e.pageX;
            This.mousedownY = e.pageY;

            This.oBgParent.appendChild(This.oBg);

            //window绑定鼠标移动事件
            window.addEventListener("mousemove", mousemoveEvent, false);
            //window绑定鼠标弹起事件
            window.addEventListener("mouseup", mouseupEvent, false);
        };

    },

    mousemove : function(){

        var This = this;
        var element = This.element;

        return function(e){

            if(This.mouseaction){
                //鼠标相对移动的位置

                e.pageX - This.mousedownX;
                e.pageY - This.mousedownY;
            }

        };
    },

    mouseup : function(mousemoveEvent){

        var This = this;

        return function(){

            This.mouseaction = false;

            if(!This.mouseaction){
                window.removeEventListener("mousemove", mousemoveEvent, false);
                window.removeEventListener("mouseup", arguments.callee, false);
            };

        };
    }
};