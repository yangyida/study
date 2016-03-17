if(!Yd){
    var Yd = {};
};

/**
 * 运动
 * @param element object 元素
 * @param styles  object 目标样式
 * @param type   number 运动类型（1:顺序,2:同步）
 * @param time  number  运动时间(毫秒)
 * @param calBack function 回调函数 只有type == 1 时才会调用回调函数
 *
 */
Yd.move = function(element, styles, type, time, calBack){

    var isStop = false;

    //每隔20毫秒执行一次动画
    var timestamp = 20;

    var executeCount;
    if(type == 1){
        //（用于 顺序运动）
        executeCount = parseInt(time / Object.keys(styles).length / timestamp) || 1;
    }else{
        //(用于 同步运动)
        executeCount = parseInt(time / timestamp);
    }

    //每个动画每次的执行像素
    var sections = new Array();

    //计算并保存每隔动画每次的执行像素
    for(var p in styles){
        var targetStyle = parseFloat(styles[p]);
        var original = parseFloat(element.style[p] || getComputedStyle(element)[p]);
        //每次执行多少像素
        var section = (targetStyle - original) / executeCount;
        sections.push({t:p, v:section, u: p=="opacity" ? "" : "px"});
    };

    switch(type){
        case 1 :

            aF();

            function aF(currentSectionP){

                if(currentSectionP && currentSectionP >= sections.length){
                    calBack && calBack();
                    return;
                };

                var currentSection = currentSectionP || 0;
                var currentAnimation = sections[currentSection];
                var n = 0;

                var animationInterval = setInterval(function(){

                    if(isStop){
                        clearInterval(animationInterval);
                        return;
                    }

                    element.style[currentAnimation.t] = parseFloat(Yd.getStyle(element, currentAnimation.t)) + currentAnimation.v + currentAnimation.u;
                    n++;

                    if(n == executeCount){
                        clearInterval(animationInterval);
                        element.style[currentAnimation.t] = styles[currentAnimation.t];
                        aF(currentSection + 1);
                    }

                }, timestamp);

            };

            break;
        case 2 :

            var flag = 0;

            for(var i = 0; i < sections.length; i++){

                (function(i){

                    var currentAnimation = sections[i];
                    var n = 0;

                    var animationInterval = setInterval(function(){

                        if(isStop){
                            clearInterval(animationInterval);
                            return;
                        }

                        element.style[currentAnimation.t] = parseFloat(Yd.getStyle(element, currentAnimation.t)) + currentAnimation.v + currentAnimation.u;
                        n++;

                        if(n == executeCount){
                            clearInterval(animationInterval);
                            element.style[currentAnimation.t] = styles[currentAnimation.t];
                        }


                    }, timestamp);

                })(i);

            }

            break;
    };

    return {
        stopNow : function(){
            isStop = true;
        }
    };
};

/**
 *  @param element
 *  @param toOpacity number 目标透明度
 *  @param competeTime number 完成时间(毫秒)
 *  @param calFunc function 回调函数
 */
Yd.changeOpacity = function(element, toOpacity, completeTime, calFunc){

    //每隔20毫秒执行一次动画
    var timestamp = 20;

    //原始透明度
    var originalOpacity = Yd.getStyle(element, "opacity");

    //需要执行次数
    var actionCount = parseInt(completeTime / timestamp);

    //每次执行的数据
    var part = (toOpacity - originalOpacity) / actionCount;

    var n = 0;

    var timer = setInterval(function(){

        Yd.setStype(element, {opacity : Yd.getStyle(element, "opacity") * 1 + part});

        n++;

        if(n == actionCount){
            clearInterval(timer);
            Yd.setStype(element, {opacity : toOpacity});
            calFunc && calFunc();
        };

    }, 20);
};

/**
 * 获得元素当前样式
 * @param element
 * @param styleType
 */
Yd.getStyle = function(element, styleType){

    return element.style[styleType] || getComputedStyle(element)[styleType];
};

/**
 * 设置元素样式
 * @param element
 * @param style object
 */
Yd.setStype = function(element, style){

    for(var p in style){
        element.style[p] = style[p];
    }
};

/**
 * 改变速度
 * @param arr Array
 * @param type number 1:加速 2:减速
 */
Yd.changeSpeed = function(arr, type){

    var c = arr[0] / arr.length;
    for(var i = arr.length - 1, j = 0; i >= arr.length / 2; i--, j++){
        arr[i] = arr[i] + i * c;
        arr[j] = arr[j] - i * c;
    };

    if(type == 2){
        var newArr = [];

        for(var i = arr.length - 1; i >= 0 ; i--){
            newArr.push(arr[i]);
        }

        arr = newArr;
    }

};

/**
 * 减速运动
 * @param element
 * @param styles
 * @param ppp number
 * @param calFunc function 只有当动画属性唯一时才调用回调函数
 */
Yd.slowMove = function(element, styles, ppp, calFunc){

    var isRunCalBack = Object.keys(styles).length == 1 ? true : false;

    var timerArr = new Array();

            for(var key in styles){
                (function(key){

                    var unit = Yd.getUnit(styles[key]);

                    var targetValue = parseFloat(styles[key]);

                    var originalValue = parseFloat(getComputedStyle(element)[key]);

                    if(unit == "%"){

                        if(element.offsetParent && element.offsetParent != document.body){
                            targetValue = parseFloat(getComputedStyle(element.offsetParent)[key]) * parseFloat(styles[key]) * 0.01;
                        }
                        else{
                            if(key == "width" || key == "left" || key == "right"){
                                targetValue = document.documentElement.clientWidth * parseFloat(styles[key]) * 0.01;
                            }
                            else if(key == "height" || key == "top" || key == "bottom"){
                                targetValue = document.documentElement.clientHeight * parseFloat(styles[key]) * 0.01;
                            }
                            else{
                                throw new Error("哎呀我去");
                            }

                        }

                    }

                    var currentValue = originalValue;

                    var timer = setInterval(function(){

                        var part = (targetValue - currentValue) / ppp;

                        currentValue = part + currentValue;

                        element.style[key] = currentValue + "px";

                        if(Math.abs(part) < 1 / ppp){

                            clearInterval(timer);
                            element.style[key] = styles[key];
                            console.log("完毕");

                            if(isRunCalBack){
                                calFunc && calFunc();
                            }
                        }

                    }, 20);

                    timerArr.push(timer);

                })(key);
            }


            return {
                stopNow : function(){
                    for(var i = 0; i < timerArr.length; i++){
                        clearInterval(timerArr[i]);
                    }
                }
            }
};

Yd.getUnit = function(str){

    if(str.indexOf("px") != -1){
        return "px";
    }
    else if(str.indexOf("%") != -1){
        return "%";
    }
    else{
        return "";
    }


};