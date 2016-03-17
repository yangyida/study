window.onload = function(){

    var boxList = document.getElementsByClassName("box");

    for(var i = 0; i < boxList.length; i++){

        boxList[i].onmouseleave = function(){
            var oBg = this.children[1];

            util.setStyles(oBg,{
                left : "100%",
                top : "100%"
            });
        };

        boxList[i].onmouseenter = function(e){

            var cursorPoint = {
                centerX : e.pageX,
                centerY : e.pageY
            };

            var direction = getEnterDirection(this, cursorPoint);

            var oBg = this.children[1];

            switch(direction){
                case 1 :
                    console.log(1);
                    util.setStyles(oBg, {
                        left : "0%",
                        top : "-100%",
                    }, function(){
                        util.linearMove(oBg, {
                          "top" : "0%"
                        }, 400);
                    });
                    break;
                case 2 :
                    util.setStyles(oBg, {
                        left : "100%",
                        top : "0%",
                    }, function(){
                        util.linearMove(oBg, {
                            "left" : "0%"
                        }, 400);
                    });
                    break;
                case 3 :
                    util.setStyles(oBg, {
                        left : "0%",
                        top : "100%",
                    }, function(){
                        util.linearMove(oBg, {
                            "top" : "0%"
                        }, 400);
                    });
                    break;
                case 4 :
                    util.setStyles(oBg, {
                        left : "-100%",
                        top : "0%",
                    }, function(){
                        util.linearMove(oBg, {
                            "left" : "0%"
                        }, 400);
                    });
                    break;
            }
        };
    };

    /**
     * 获得鼠标进入元素的方向
     * @param element 元素
     * @param cursorPoint 鼠标位置
     * @returns number 1:上 2:右 3:下 4:左
     */
    function getEnterDirection(element, cursorPoint){

        var originalPoint = util.getElementCenterPoint(element);

        var item = -1;

        if(cursorPoint.centerX > originalPoint.centerX && cursorPoint.centerY > originalPoint.centerY){
            item =  1;
        }else if(cursorPoint.centerX < originalPoint.centerX && cursorPoint.centerY > originalPoint.centerY){
            item = 2;
        }else if(cursorPoint.centerX < originalPoint.centerX && cursorPoint.centerY < originalPoint.centerY){
            item = 3;
        }else if(cursorPoint.centerX > originalPoint.centerX && cursorPoint.centerY < originalPoint.centerY){
            item = 4;
        }

        var an = Math.atan(Math.abs((cursorPoint.centerX - originalPoint.centerX) / (cursorPoint.centerY - originalPoint.centerY)));
        var on = Math.atan(parseInt(util.getStyle(element, "width")) / parseInt(util.getStyle(element, "height")));

        var direction = -1;//1:上 2:右 3:下 4:左

        switch(item){
            case 1:
                if(an < on){
                    direction = 3;
                }else{
                    direction = 2;
                }

                break;
            case 2:
                if(an < on){
                    direction = 3;
                }else{
                    direction = 4;
                }
                break;
            case 3:
                if(an < on){
                    direction = 1;
                }else{
                    direction = 4;
                }
                break;
            case 4:
                if(an < on){
                    direction = 1;
                }else{
                    direction = 2;
                }

                break;
        };

        return direction;
    };
};