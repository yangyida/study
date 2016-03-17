var DragLimit = function(dom){

    MyDrag.call(this, dom);

};

DragLimit.prototype = Object.create(MyDrag.prototype);
DragLimit.prototype.constructor = DragLimit;
DragLimit.prototype._mousemove = function(that){

    return function(e){

        if(that.isDown){

            var px = e.pageX - that.ofX + parseInt(that.dom.style.width);
            var py = e.pageY - that.ofY + parseInt(that.dom.style.height);

            if(px < Math.max(document.documentElement.clientWidth, document.body.scrollWidth) && (e.pageX - that.ofX >= 0)){
                that.dom.style.left = e.pageX - that.ofX + "px";
            }

            if(py < Math.max(document.documentElement.clientHeight, document.body.scrollHeight) && (e.pageY - that.ofY >= 0)){
                that.dom.style.top = e.pageY - that.ofY + "px";
            }
        }

    };
};

