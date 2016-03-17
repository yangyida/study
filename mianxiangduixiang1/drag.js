
var MyDrag = function(dom){
    this.dom = dom;
    this.ofX = 0;
    this.ofY = 0;
    this.isDown = false;

    this._init();
};

MyDrag.prototype = {
    constructor : MyDrag,

    _init : function(){

        this.dom.style.position = "absolute";

        this.mmove = this._mousemove(this);

        this.mup = this._mouseup(this);

        this.mdown = this._mousedown(this);

        this.dom.addEventListener("mousedown", this.mdown, false);

    },

    _mousedown : function(that){

        return function(){
            that.isDown = true;
            that.ofX = e.offsetX;
            that.ofY = e.offsetY;

            document.addEventListener("mousemove", that.mmove, false);

            document.addEventListener("mouseup", that.mup, false);
        }
    },

    _mousemove : function(that){

        return function(e){

            if(that.isDown){
                that.dom.style.left = e.pageX - that.ofX + "px";
                that.dom.style.top = e.pageY - that.ofY + "px";
            }

        };

    },

    _mouseup : function(that){

        return function(){

            if(that.isDown){
                that.isDown = false;
                document.removeEventListener("mousemove", that.mmove,false);
                document.removeEventListener("mouseup", that.mup,false);
            }

        };
    }
};