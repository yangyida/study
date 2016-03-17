var Yd = {};

/**
 * 绑定自定义事件
 * @param dom
 * @param event
 * @param func
 */
Yd.bindEvent = function(dom, event, func){
    dom.linsteners = dom.linsteners || {};
    dom.linsteners[event] = dom.linsteners[event] || [];
    dom.linsteners[event].push(func);
};

/**
 * 触发自定义事件
 * @param dom
 * @param event
 */
Yd.fireEvent = function(dom, event){

    if(dom.linsteners && dom.linsteners[event]){
        for(var i = 0; i < dom.linsteners[event].length; i++){
            dom.linsteners[event][i].call(dom);
        }
    }
};

/**
 * 自定义Tag
 * @param opt titleDoms (Array or NodeList) 必填
 *            boxDoms   (Array or NodeList) 必填
 *            event(string : "click", "mouseenter") 默认click
 *            delay  (number) 默认 600
 *            showItem (number) 默认0
 *            calBack function(this == tag)
 *
 *            titleDom event("showbefore", "showafter")
 *            boxDom event("showbefore", "showafter")
 * @constructor
 */
Yd.Tag = function(opt){

    if(opt.titleDoms.length != opt.boxDoms.length){
        throw new Error("选项卡与内容数目不对");
    }

    this.opt = {
        titleDoms : opt.titleDoms,
        boxDoms : opt.boxDoms,
        event : opt.event || "click",
        delay : opt.delay || 600,
        showItem : opt.showItem || 0,
        calBack : opt.calBack
    };

    this.currentItem = this.opt.showItem;

    this._init();
};

Yd.Tag.prototype = {
    constructor : Yd.Tag,

    /**
     * 初始化
     * @private
     */
    _init : function(){

        //将非显示项隐藏
        this.showItem(this.opt.showItem);

        //绑定tag事件
        for(var i = 0; i < this.opt.titleDoms.length; i++){
            this._bindTagEvent(i);
        };

    },

    _bindTagEvent : function(item){

        var that = this;
        var tagDom = that.opt.titleDoms[item];
        var boxDom = that.opt.boxDoms[item];

        switch(this.opt.event){
            case "mouseenter" :
                tagDom.addEventListener("mouseenter", function(){

                    if(that.currentItem == item){
                        return;
                    }else{
                        that.currentItem = item;
                    }

                    that.timeoutId = setTimeout(function(){

                        Yd.fireEvent.call(tagDom, tagDom, "showbefore");
                        Yd.fireEvent.call(boxDom, boxDom, "showbefore");

                        that.showItem(item);
                        that.opt.calBack && that.opt.calBack.call(tagDom);

                        Yd.fireEvent.call(tagDom, tagDom, "showafter");
                        Yd.fireEvent.call(boxDom, boxDom, "showafter");

                    }, that.opt.delay);

                }, false);

                tagDom.addEventListener("mouseleave", function(){

                    clearInterval(that.timeoutId);

                }, false);
                break;

            case "click" :
                tagDom.addEventListener("click", function(){

                    if(that.currentItem == item){
                        return;
                    }else{
                        that.currentItem = item;
                    }

                    Yd.fireEvent.call(tagDom, tagDom, "showbefore");
                    Yd.fireEvent.call(boxDom, boxDom, "showbefore");

                    that.showItem(item);
                    that.opt.calBack && that.opt.calBack.call(tagDom);

                    Yd.fireEvent.call(tagDom, tagDom, "showafter");
                    Yd.fireEvent.call(boxDom, boxDom, "showafter");
                }, false);
                break;
        };

    },

    /**
     * 展现第几项
     * @param item
     */
    showItem : function(item){

        for(var i = 0; i < this.opt.boxDoms.length; i++){
            if(i != item){
                this._hideDom(this.opt.boxDoms[i]);
            }
            else{
                this._showDom(this.opt.boxDoms[i]);
            }
        };
    },

    /**
     * 隐藏dom节点
     * @param o
     * @private
     */
    _hideDom : function(o){
        o.style.display = "none";
        o.style.visibility = "hidden";
    },

    /**
     * 显示dom节点
     * @param o
     * @private
     */
    _showDom : function(o){
        o.style.display = "";
        o.style.visibility = "visible";
    }
};