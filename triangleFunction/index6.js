window.onload = function(){

    var o1 = document.querySelector("body>:nth-child(1)");
    var o2 = document.querySelector("body>:nth-child(2)");
    var o3 = document.querySelector("body>:nth-child(3)");
    var o4 = document.querySelector("body>:nth-child(4)");
    var o5 = document.querySelector("body>:nth-child(5)");

    new Run({
        element : o1,
        xSpeed : 1,
        ySpeed : 0,
        confine : {
            name : "mm",
            confineElement : document.body
        }
    }).init();

    new Run({
        element : o2,
        xSpeed : 2,
        ySpeed : 0,
        confine : {
            name : "mm",
            confineElement : document.body
        }
    }).init();

    new Run({
        element : o3,
        xSpeed : 4,
        ySpeed : 0,
        confine : {
            name : "mm",
            confineElement : document.body
        }
    }).init();

    new Run({
        element : o4,
        xSpeed : 6,
        ySpeed : 0,
        confine : {
            name : "mm",
            confineElement : document.body
        }
    }).init();

    new Run({
        element : o5,
        xSpeed : 8,
        ySpeed : 0,
        confine : {
            name : "mm",
            confineElement : document.body
        }
    }).init();

};

/**
 * 圆的运动
 * @param opt {
 *              confine : {
 *                      name :,
 *                      confineElement
 *                  }
 *              }
 * @constructor
 */
var Run = function(opt){

    this.element = opt.element;
    this.xSpeed = opt.xSpeed;
    this.ySpeed = opt.ySpeed;
    this.radius = opt.element.offsetWidth / 2;

    this.confine = opt.confine;
};

Run.prototype = {

    constructor : Run,

    init : function(){
        //将对象加入相同限制的队列
        Run.prototype.confines || (Run.prototype.confines = {});
        Run.prototype.confines[this.confine.name] || (Run.prototype.confines[this.confine.name] = []);
        Run.prototype.confines[this.confine.name].push(this);

        timer = setInterval(this.move(), 13);
    },

    move : function(){

        var This = this;

        return function(){

            var element = This.element;

            util.setStyles(element, {
                left : parseInt(util.getStyle(element, "left")) + This.xSpeed + "px",
                top : parseInt(util.getStyle(element, "top")) + This.ySpeed + "px"
            });

            var arr = Run.prototype.confines[This.confine.name];

            //球间的碰撞
            for(var i = 0; i < arr.length; i++){
                if(This == arr[i]){
                    continue;
                }else{

                    var point1 = util.getElementCenterPoint(This.element);
                    var point2 = util.getElementCenterPoint(arr[i].element);

                    var distance = util.getDistance(point1, point2);

                    if(arr[i].radius + This.radius >= distance){

                        var xC = This.xSpeed;
                        var yC = This.ySpeed;

                        This.xSpeed = arr[i].xSpeed;
                        This.ySpeed = arr[i].ySpeed;

                        arr[i].xSpeed = xC;
                        arr[i].ySpeed = yC;

                        return;
                    }
                }
            };

            //碰撞边界反弹
            var w = parseInt(getComputedStyle(This.confine.confineElement).width);
            var h = parseInt(getComputedStyle(This.confine.confineElement).height);

            var t = parseInt(util.getStyle(This.element, "top"));
            var l = parseInt(util.getStyle(This.element, "left"));

            if(t <= 0){
                This.ySpeed = This.ySpeed * -1;
            }else if(t + 2 * This.radius >= h){
                This.ySpeed = This.ySpeed * -1;
            }else if(l <= 0){
                This.xSpeed = This.xSpeed * -1;
            }else if(l + 2 * This.radius >= w){
                This.xSpeed = This.xSpeed * -1;
            }
        };
    }
};