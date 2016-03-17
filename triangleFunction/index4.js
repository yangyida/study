window.onload = function(){

    var oLeft = document.querySelector("#box>:nth-child(1)>span");
    var oLeftPoint = util.getElementCenterPoint(oLeft);

    var oRight = document.querySelector("#box>:nth-child(2)>span");
    var oRightPoint = util.getElementCenterPoint(oRight);

    var r = 5;

    document.onmousemove = function(e){

        var curserPoint = {
            centerX : e.pageX,
            centerY : e.pageY
        };

        if(curserPoint.centerX >= oLeftPoint.centerX && curserPoint.centerY >= oLeftPoint.centerY){
            //1
            angle(curserPoint, oLeftPoint, 1, oLeft);

        }else if(curserPoint.centerX <= oLeftPoint.centerX && curserPoint.centerY >= oLeftPoint.centerY){
            //2
            angle(curserPoint, oLeftPoint, 2, oLeft);

        }else if(curserPoint.centerX <= oLeftPoint.centerX && curserPoint.centerY <= oLeftPoint.centerY){
            //3
            angle(curserPoint, oLeftPoint, 3, oLeft);

        }else if(curserPoint.centerX >= oLeftPoint.centerX && curserPoint.centerY <= oLeftPoint.centerY){
            //4
            angle(curserPoint, oLeftPoint, 4, oLeft);

        }

        if(curserPoint.centerX >= oRightPoint.centerX && curserPoint.centerY >= oRightPoint.centerY){
            //1
            angle(curserPoint, oRightPoint, 1, oRight);

        }else if(curserPoint.centerX <= oRightPoint.centerX && curserPoint.centerY >= oRightPoint.centerY){
            //2
            angle(curserPoint, oRightPoint, 2, oRight);

        }else if(curserPoint.centerX <= oRightPoint.centerX && curserPoint.centerY <= oRightPoint.centerY){
            //3
            angle(curserPoint, oRightPoint, 3, oRight);

        }else if(curserPoint.centerX >= oRightPoint.centerX && curserPoint.centerY <= oRightPoint.centerY){
            //4
            angle(curserPoint, oRightPoint, 4, oRight);

        }

    };

    /**
     *
     * @param point1 鼠标位置
     * @param point2 原点
     * @param item 象限
     */
    function angle(point1, point2, item, o){
        var an = Math.atan(Math.abs(point1.centerX - point2.centerX) / Math.abs(point1.centerY - point2.centerY));
        console.log(item);
        switch(item){
            case 1:
                util.setStyles(o, {
                    left : r * Math.sin(an) + r + "px",
                    top : r * Math.cos(an) + r + "px"
                });
                break;
            case 2:
                util.setStyles(o, {
                    left : r - r * Math.sin(an) + "px",
                    top : r * Math.cos(an) + r + "px"
                });
                break;
            case 3:
                util.setStyles(o, {
                    left : r - r * Math.sin(an) + "px",
                    top : r - r * Math.cos(an) + "px"
                });
                break;
            case 4:
                util.setStyles(o, {
                    left : r * Math.sin(an) + r + "px",
                    top : r - r * Math.cos(an) + "px"
                });
                break;
        };

    };

};

