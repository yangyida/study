var Popup = function(id, canClose){

    this.dom = document.getElementById(id);

    this.canClose = canClose;

    this._bg = null;
    this._isShow = false;

    this._init();
};

Popup.prototype = {
    constructor : Popup,

    show : function(){
        if(!this._isShow){
            this._isShow = true;
            this.dom.style.display = "";
            this._bg.style.display = "";
        }
    },

    hide : function(){
        if(this._isShow){
            this._isShow = false;
            this.dom.style.display = "none";
            this._bg.style.display = "none";
        }
    },

    _init : function(){

        var that = this;

        this._initDom();
        this._initBg();
        this.dom.style.display = "none";
        this._bg.style.display = "none";

        window.addEventListener("resize", function(){

            that._initDom();
            that._initBg();

        }, false);
    },

    _initDom : function(){
        this.dom.style.position = "fixed";
        this.dom.style.zIndex = "3000";
        /*this.dom.style.left = (document.documentElement.clientWidth - parseInt(getComputedStyle(this.dom).width)) / 2 + "px";
        this.dom.style.top = (document.documentElement.clientHeight - parseInt(getComputedStyle(this.dom).height)) / 2 + "px";*/
        this.dom.style.left = "50%";
        this.dom.style.top = "50%";
        this.dom.style.marginLeft = -1 * parseInt(getComputedStyle(this.dom).width) / 2 + "px";
        this.dom.style.marginTop = -1 * parseInt(getComputedStyle(this.dom).height) / 2 + "px";
    },

    _initBg : function(){

        if(!this._bg){
            this._bg = document.createElement("div");
            document.documentElement.appendChild(this._bg);
            if(this.canClose){
                var that = this;
                this._bg.onclick = function(){
                    that._isShow = false;
                    that.dom.style.display = "none";
                    that._bg.style.display = "none";
                };
            }
        }

        this._bg.style.width = Math.max(document.documentElement.clientWidth, document.body.scrollHeight) + "px";
        this._bg.style.height = Math.max(document.documentElement.clientHeight, document.body.scrollHeight) + "px";
        this._bg.style.backgroundColor = "rgba(0,0,0,0.8)";
        this._bg.style.position = "fixed";
        this._bg.style.left = "0px";
        this._bg.style.top = "0px";
        this._bg.style.zIndex = "2000";

    },
};