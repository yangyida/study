window.onload = function(){

    var oContaint = getId("containt");

    var r = new Roll(
        {
            containt : oContaint
        }
    );

    r.init();

    oBtn = getId("btn");

    oBtn.onclick = function(){

        if(this.dataset.start != "true"){
            this.dataset.start = true;
            r.start();
            oBtn.innerHTML = "暂停";
        }
        else{
            this.dataset.start = false;
            r.pause();
            oBtn.innerHTML = "播放";
        }

        //oBtn.data
    };

};

var Roll = function(opt){

    this.opt = {
        oContaint : opt.containt
    }
};

Roll.prototype = {

    constructor : Roll,

    init : function(){

        //若父节点没有定位则加上相对定位
        var oContaintPosition = getStyle(this.opt.oContaint, "position");
        if(oContaintPosition != "absolute" || oContaintPosition != "relative" || oContaintPosition != "fixed"){
            setStyle(this.opt.oContaint, {position: "relative"});
        };

        var oTarget = this.oTarget = this.opt.oContaint.children[0];

        var oBg = this.oBg = oTarget.cloneNode(true);
        setStyle(
            oBg,
            {
                position: "absolute",
                left: "-44px",
                top: "0px",
                width: "34px",
                height: getStyle(oTarget, "height"),
                lineHeight: getStyle(oTarget, "lineHeight"),
                textAlign: getStyle(oTarget, "textAlign"),
                fontSize: getStyle(oTarget, "fontSize"),
                overflow: "hidden",
                color: "red"
            }
        );

        var oBgChild = this.oBgChild = oBg.children[0];
        setStyle(
            oBgChild,
            {
                position: "absolute",
                left: "44px",
                top: "0px",
                width: getStyle(oTarget, "width"),
                height: getStyle(oTarget, "height"),
                lineHeight: getStyle(oTarget, "lineHeight"),
                textAlign: getStyle(oTarget, "textAlign"),
                fontSize: getStyle(oTarget, "fontSize")
            }
        );

        this.opt.oContaint.appendChild(oBg);

    },

    start : function(){

        var This = this;

        if(This.timer){
            return;
        }

        var part = 22;

        This.timer = setInterval(function(){

            setStyle(
                This.oBg,
                {
                    left : parseInt(getComputedStyle(This.oBg)["left"]) + part + "px"
                }
            );

            setStyle(
                This.oBgChild,
                {
                    left : parseInt(getComputedStyle(This.oBgChild)["left"]) - part + "px"
                }
            );

            console.log(parseInt(getStyle(This.oBg, "left")));
            console.log(parseInt(getStyle(This.oTarget, "width")));

            if(parseInt(getStyle(This.oBg, "left")) > parseInt(getStyle(This.oTarget, "width"))){
                clearInterval(This.timer);
                This.timer = null;
                return;
            }

        }, 200);
    },

    pause: function(){

        if(this.timer){
            clearInterval(this.timer);
            this.timer = null;
        }
    }

};

function setStyle(element, styles){

    for(var key in styles){
        element["style"][key] = styles[key];
    }
};

function getStyle(element, styleName){

    return element["style"][styleName] || getComputedStyle(element)[styleName];
};

function getId(id){
    return document.getElementById(id);
};