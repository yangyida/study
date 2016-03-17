window.onload = function(){

    var oPanel = document.getElementById("panel");
    var p = new MyCanvas(oPanel);
    var oR1 = p.fillRect(100, 100, 60, 60);
    oR1.drag = true;
    var oR2 = p.fillRect(200, 200, 60, 60);
    oR2.drag = true;
};

var MyCanvas = function(canvas){

    this.oCanvas = canvas;
    this.p = canvas.getContext("2d");

    this.arr = [];
    this._init();
};

MyCanvas.prototype = {
    constructor : MyCanvas,

    _init : function(){
        this.oCanvas.onmousedown = this._onmousedown();
    },

    _onmousedown : function(){

        var This = this;

        return function(e){

            for(var i = 0; i < This.arr.length; i++){
                if(This.arr[i].onmousedown){
                    This.arr[i].reDraw();

                    if(This.p.isPointInPath(e.offsetX, e.offsetY)){
                        This.arr[i].onmousedown();
                    };
                }

                if(This.arr[i].drag){

                    var t = This.arr[i];

                    t.reDraw();

                    if(This.p.isPointInPath(e.offsetX, e.offsetY)){

                        var isDown = true;
                        var initX = e.clientX;
                        var initY = e.clientY;

                        document.addEventListener("mousemove", move,false);
                        document.addEventListener("mouseup", up,false);

                        function move(e){
                            if(isDown){

                                This.p.clearRect(0,0,This.oCanvas.width, This.oCanvas.height);

                                t.x = e.clientX - initX + t.x;
                                t.y = e.clientY - initY + t.y;
                                console.log(e.clientX - initX);
                                for(var i = 0; i < This.arr.length; i++){
                                    This.arr[i].reDraw();
                                }

                                initX = e.clientX;
                                initY = e.clientY;
                            }
                        }

                        function up(){
                            if(isDown){
                                isDown = false;
                                document.removeEventListener("mousemove", move, false);
                                document.removeEventListener("mouseup", up, false);
                            }
                        }

                        break;
                    };
                }
            }

        };
    },

    /**
     * 获得图形相对页面的坐标
     * @param pic
     */
    getPicLocation : function(pic){
        var top = Drag.toTop(this.oCanvas) +
        parseInt(getComputedStyle(this.oCanvas).borderTop) +
        parseInt(getComputedStyle(this.oCanvas).paddingTop) +
        pic.x;

        var left = Drag.toTop(this.oCanvas) +
            parseInt(getComputedStyle(this.oCanvas).borderTop) +
            parseInt(getComputedStyle(this.oCanvas).paddingTop) +
            pic.x;
    },

    save : function(){
        this.p.save();
    },

    restore : function(){
        this.p.restore();
    },

    strokeStyle : function(str){
        this.p.strokeStyle = str;
    },

    fillStyle : function(str){
        this.p.fillStyle = str;
    },

    fillRect : function(x,y,w,h){
        var fr = new FillRect(this.oCanvas, x, y, w, h);
        this.arr.push(fr);
        return fr;
    }
};

/**
 * 绘制图形的父类
 * @param canvas
 * @constructor
 */
var Pic = function(canvas){
    this.canvas = canvas;
    this.p = canvas.getContext("2d");
};

Pic.prototype = {
    constructor : Pic,
    reDraw : function(){
        this.draw();
    }
};

/**
 * 绘制填充矩形
 * @param canvas
 * @param x
 * @param y
 * @param w
 * @param h
 * @constructor
 */
var FillRect = function(canvas, x , y , w, h){

    Pic.call(this, canvas);
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.draw();
};

FillRect.prototype = Object.create(Pic.prototype);

FillRect.prototype.draw = function(){
    this.p.beginPath();
    this.p.rect(this.x, this.y, this.w, this.h);
    this.p.fill();
};
