var Yd = {};

/**
 * 运动
 * @param dom
 * @param opt
 * @param time 毫秒
 * @param calBack 回调函数
 * @param remark 备注 object
 */
Yd.move = function(dom, opt, time, calBack, remark){

    //执行时间间隔
    var TIMEPARK = 20;

    //执行次数
    var actionCount = parseInt(time / TIMEPARK);

    //用于判断动作是否结束
    var stylesCount = Object.keys(opt).length;
    var n = 0;

    //运动数据准备
    for(var type in opt){

        (function(type){

            var dataSize = (parseInt(opt[type]) - parseInt(Yd.getStyle(dom, type))) / actionCount;

            var unit = Yd.getUnit(opt[type]);

            dom.style[type] = Yd.getStyle(dom, type);

            var num = 0;

            var timer = setInterval(function(){

                if(num < actionCount){
                    num++;

                    dom.style[type] = parseFloat(Yd.getStyle(dom, type)) + dataSize + unit;
                }
                else{
                    clearInterval(timer);
                    dom.style[type] = opt[type];

                    //判断是否全部动画都执行完成
                    if(++n == stylesCount){
                        calBack && calBack(remark);
                    }
                }

            }, TIMEPARK);

        })(type);
    };


};

/**
 * 获得元素样式
 * @param dom
 * @param item
 */
Yd.getStyle = function(dom, item) {

    return dom.style[item] || getComputedStyle(dom)[item];
}
/**
 * 获得单位
 * @param str
 */
Yd.getUnit = function(str){

    if(str.indexOf("%") > 0){
        return "%";
    }
    else{
        return "px";
    }
};

/**
 * 设置样式
 * @param dom
 * @param styleOpt
 */
Yd.setStyle = function(dom, styleOpt){

    for(var type in styleOpt){
        dom.style[type] = styleOpt[type];
    }
};

/**
 *
 * @param opt {oContaint, calBack, currentItem, direction}
 * @constructor
 */
Yd.ChangeWindow = function(opt){

    var This = this;

    //容器 must
    This.oContaint = opt.containt;

    //回调函数
    This.calBack = opt.calBack;

    //显示第几项
    if(opt.currentItem){
        This.currentItem = (opt.currentItem < This.oContaint.children.length ? ( opt.currentItem < 0 ? 0 : opt.currentItem) : 0);
    }
    else{
        This.currentItem = 0;
    }

    //当前项
    This.currentBox = This.oContaint.children[This.currentItem];

    //滚动方向
    This.direction = opt.direction || 1; // 1:上下 2:左右

    This.canwheel = true;
};

Yd.ChangeWindow.prototype = {
    constructor : Yd.ChangeWindow,

    /**
     * 初始化
     */
    init : function(){
        var This = this;

        var initStyle = {width: "100%", height: "100%", position: "relative", overflow: "hidden"};
        Yd.setStyle(document.documentElement,initStyle);
        Yd.setStyle(document.body,initStyle);
        Yd.setStyle(This.oContaint,initStyle);

        //上下滚动
        if(This.direction == 1){

            //初始化样式
            Yd.setStyle(This.oContaint, {overflow: "", left: "0%", top: -100 * This.currentItem + "%"});
            for(var i = 0; i < This.oContaint.children.length; i++){
                Yd.setStyle(This.oContaint.children[i],initStyle);
            };

        }
        //左右滚动
        else{
            Yd.setStyle(This.oContaint, {overflow: "", top: "0%", left: -100 * This.currentItem + "%"});
            for(var i = 0; i < This.oContaint.children.length; i++){
                Yd.setStyle(This.oContaint.children[i],initStyle);
                Yd.setStyle(This.oContaint.children[i],{float: "left", width : 100 / This.oContaint.children.length + "%"});
            };
            Yd.setStyle(This.oContaint,{width : i * 100 + "%"});
        }

        document.onmousewheel = This._mousewheel();
    },

    /**
     * 跳到目标页
     * @param n
     */
    toTargetItem : function(n){
        var This = this;

        if(n < This.oContaint.children.length){

            This.currentBox = This.oContaint.children[n];
            This.currentItem = n;

            var o = {};

            if(This.direction == 1){
                o.top = -100 * This.currentItem + "%";
            }
            else{
                o.left = -100 * This.currentItem + "%";
            }

            Yd.setStyle(This.oContaint, o);
            This.calBack({currentItem : n});
        }

    },

    _mousewheel : function(){

        var This = this;

        return function(e){

            if(This.canwheel){
                This.canwheel = false;
                setTimeout(function(){

                    This.canwheel = true;

                }, 180);
            }
            else{
                return;
            }


            var direction = e.wheelDelta;

            var o = {};

            //向上 向右
            if(direction > 0){

                if(This.currentBox.previousElementSibling){
                    This.currentBox = This.currentBox.previousElementSibling;
                    This.currentItem = This.currentItem - 1;

                    if(This.direction == 1){
                        o.top = -100 * This.currentItem + "%";
                    }
                    else{
                        o.left = -100 * This.currentItem + "%";
                    }

                    Yd.move(
                        This.oContaint,
                        o,
                        160,
                        This.calBack,
                        {
                            currentItem : This.currentItem
                        }
                    );
                }
            }
            //向下 向左
            else{

                if(This.currentBox.nextElementSibling){
                    This.currentBox = This.currentBox.nextElementSibling;
                    This.currentItem = This.currentItem + 1;

                    if(This.direction == 1){
                        o.top = -100 * This.currentItem + "%";
                    }
                    else{
                        o.left = -100 * This.currentItem + "%";
                    }

                    Yd.move(
                        This.oContaint,
                        o,
                        160,
                        This.calBack,
                        {
                            currentItem : This.currentItem
                        }
                    )
                }

            }

        };
    }
};