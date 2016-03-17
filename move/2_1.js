window.onload = function(){
    var z = 1;
    var oBox = document.getElementById("box");
    var liList = oBox.children;

    setStyle(
        oBox,
        {
            position: "relative",
            width : getComputedStyle(oBox).width,
            height : getComputedStyle(oBox).height
        }
    );

    for(var i = 0; i < liList.length; i++){
        var left = liList[i].offsetLeft + "px";
        var top = liList[i].offsetTop + "px";

        liList[i].originalLeft = left;
        liList[i].originalTop = top;

        liList[i].toWidth = "200px";
        liList[i].toHeight = "200px";
        liList[i].toLeft = liList[i].offsetLeft - 50 + "px";
        liList[i].toTop = liList[i].offsetTop - 50 + "px";

        setStyle(
            liList[i],
            {
                left : left,
                top : top
            }
        );
    }

    for(var i = 0; i < liList.length; i++){
        setStyle(
            liList[i],
            {
                position : "absolute",
                margin : "0px",
                padding : "0px"
            }
        );
    };

    for(var i = 0; i < liList.length; i++){
        liList[i].onmouseenter = enterEvent;

        liList[i].onmouseleave = leaveEvent;
    };

    function enterEvent(){

        this.stopNow && this.stopNow();

        this.stopNow = Yd.move(
            this,
            {
                left : this.toLeft,
                top : this.toTop,
                width : this.toWidth,
                height : this.toHeight,
                zIndex : ++z
            },
            2,
            100
        ).stopNow;

    };

    function leaveEvent(){

        this.stopNow && this.stopNow();

        this.stopNow = Yd.move(
            this,
            {
                left : this.originalLeft,
                top : this.originalTop,
                width : "100px",
                height : "100px",
                zIndex : ++z
            },
            2,
            100
        ).stopNow;

    };
};

/**
 * 设置元素样式
 * @param element
 * @param style
 */
function setStyle(element, style){

    for(var key in style){
        element["style"][key] = style[key];
    };
};