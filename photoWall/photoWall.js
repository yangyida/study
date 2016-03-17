var Yd = {};

/**
 * 将元素变成绝对定位
 *@param containtDom 拖拽元素
 */
Yd.changeToAbsolute = function(containtDom){

    var children = containtDom.children;

    for(var i = 0; i < children.length; i++){
        children[i].ol = children[i].offsetLeft;
        children[i].ot = children[i].offsetTop;
    };

    for(var i = 0; i < children.length; i++){
        children[i].style.position = "absolute";
        children[i].style.left = children[i].ol + "px";
        children[i].style.top = children[i].ot + "px";
    };

};

/**
 * 碰撞检测
 * @param obj1
 * @param obj2
 * @param calBack
 */
Yd.pz = function(obj1, obj2, calBack){

    var o1W = parseInt(getComputedStyle(obj1).width);
    var o1H = parseInt(getComputedStyle(obj1).height);

    var o1l = obj1.offsetLeft;
    var o1t = obj1.offsetTop;

    var o2l = obj2.offsetLeft;
    var o2t = obj2.offsetTop;

    var pL = Math.abs(o1l - o2l);
    var pT = Math.abs(o1t - o2t);

    if((pL <= o1W) && (pT <= o1H)){
        console.log("碰撞了!!!");
        calBack(obj1, obj2);
        return true;
    }

    return false;
};

/**
 * 运动
 * @param opt (dom, items, completeTime)
 *
 */
Yd.move = function(opt){
    console.log(opt.items);
    var dom = opt.dom;
    var items = opt.items;
    var completedTime = opt.completedTime || 2000;

    var timeBlock = 100;//时间块

    for(var key in items){

        (function(key){

            var original = parseInt(getComputedStyle(dom)[key]);//原始的值
            var actionNum = completedTime / timeBlock; //应该执行的次数
            var one = parseInt((original - parseInt(items[key])) / actionNum);//每次的变量长度
            var num = 1;//执行了多少次

            var timer = setInterval(function(){

                if(num == actionNum){
                    clearInterval(timer);
                    return;
                }
                else{
                    dom.style[key] = (original - one * num) + "px";
                    num++;
                }

            }, 100);

        })(key);

    };
};

/**
 * 拖拽(只支持绝对定位的元素)
 * @param domObj 拖拽的元素
 * @constructor
 */
Yd.Drag = function(domObj){

    this.domObj = domObj;
    this._init();
};

Yd.Drag.prototype = {

    constructor : Yd.Drag,

    /**
     * 初始化
     * @private
     */
    _init : function(){

        var This = this;

        This.domObj.onmousedown = This._downEvent();

    },

    /**
     * 鼠标按下事件
     * @returns {Function}
     * @private
     */
    _downEvent : function(){

        var This = this;
        var ofX = 0;
        var ofY = 0;

        var domObj = This.domObj;
        var brotherArray = domObj.parentElement.children;

        return function(e){

            domObj.style.zIndex = "2000";
            var ofX = e.offsetX;
            var ofY = e.offsetY;

            domObj.originalLeft = domObj.style.left;
            domObj.originalTop = domObj.style.top;

            document.onmousemove = function(e){

                var d = domObj;

                var oLeft = parseInt(getComputedStyle(d).left);
                var oTop = parseInt(getComputedStyle(d).top);

                d.style.left = (oLeft + e.movementX) + "px";
                d.style.top = (oTop + e.movementY) + "px";

                for(var i = 0; i < brotherArray.length; i++){

                    brotherArray[i].style.border = "";
                    brotherArray[i].style.margin = "10px";

                    if(domObj != brotherArray[i]){

                        if(Yd.pz(domObj, brotherArray[i], This._pz())){
                            break;
                        }
                        else{
                            domObj.targetElement = null;
                        }
                    }
                };
            };

            document.onmouseup = function(e){
                console.log("up!!!");

                if(domObj.targetElement){

                    domObj.targetElement.style.border = "";
                    domObj.targetElement.style.margin = "10px";

                    Yd.move(
                        {
                            dom : domObj,
                            items : {
                                left : domObj.targetElement.style.left,
                                top : domObj.targetElement.style.top,
                                completedTime : 400
                            }
                        }
                    );

                    Yd.move(
                        {
                            dom : domObj.targetElement,
                            items : {
                                left : domObj.originalLeft,
                                top : domObj.originalTop,
                                completedTime : 400
                            }
                        }
                    );
                }
                else{

                }

                This.domObj.style.zIndex = "";
                document.onmousemove = null;
                document.onmouseup = null;
            };
        };
    },

    _pz : function(){

        var This = this;

        return function(o1, o2){

            o2.style.border = "1px solid red";
            o2.style.margin = "9px";

            This.domObj.targetElement = o2;

        };


    }


};