var Yd = {};

/**
 * 计算两点的距离
 * @param point1
 * @param point2
 * @returns {number}
 */
Yd.distance = function(point1, point2){
    return Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));
};

Yd.Menu = function(opt){

    var This = this;

    //
    This.dom = opt.dom;

    //每个图片的中心点集合
    This.centerLocationArray = [];

    //每个图片
    This.imgArr = [];

    This.h = parseInt(getComputedStyle(This.dom.children[0]).width) / 2;

    //初始化
    This._init();
};

Yd.Menu.prototype = {
    constructor : Yd.Menu,

    _init : function(){

        var This = this;

        //获得每个图片的中心点
        This._getEveryCenterLocation();

        This.dom.onmousemove = This._mousemove();

    },

    /**
     * 获得每个图片的中心点
     * @private
     */
    _getEveryCenterLocation : function(){

        var This = this;

        for(var i = 0; i < This.dom.children.length; i++){

            var img = This.dom.children[i];
            This.imgArr.push(img);
            This.centerLocationArray.push(
                {
                    x : img.offsetLeft + parseInt(parseInt(getComputedStyle(img).width) / 2),
                    y : img.offsetTop + parseInt(parseInt(getComputedStyle(img).height) / 2)
                }
            );

        };
    },

    _mousemove : function(){

        var This = this;

        return function(e){

                for(var i = 0; i < This.centerLocationArray.length; i++){

                    var x = -1;

                    var y = -1;

                    if(e.target != this){
                        x = e.offsetX + e.target.offsetLeft;
                        y = e.offsetY + e.target.offsetTop;
                    }
                    else{
                        x = e.offsetX;
                        y = e.offsetY;
                    }

                    //鼠标与图片中心点的距离
                    var c = Yd.distance(This.centerLocationArray[i], {x: x, y: y});
                    console.log(This.h / c);
                    if(This.h / c <= 0.5){
                        This.imgArr[i].style.width = "80px";
                    }
                    else{
                        var n = (This.h / c + 1) * 80;
                        This.imgArr[i].style.width = (n > 160 ? 160 : n) + "px";
                    }

                }


        };
    }
};