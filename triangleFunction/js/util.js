var util = {};

util.debug = true;

util.log = function(o){
    if(this.debug){
        console.log(o);
    }
};

util.getId = function(id){
    return document.getElementById(id);
};

util.toTop = function(element){

    var distance = element.offsetTop;
    var parentElement = element.offsetParent;

    while(parentElement){
        distance += parentElement.offsetTop;
        parentElement = parentElement.offsetParent;
    };

    return distance;
};

util.toLeft = function(element){

    var distance = element.offsetLeft;
    var parentElement = element.offsetParent;

    while(parentElement){
        distance += parentElement.offsetLeft;
        parentElement = parentElement.offsetParent;
    };

    return distance;
};

util.setStyles = function(element, params, calFunc){

    for(var key in params){
        element.style[key] = params[key];
    };

    calFunc && calFunc();
};

util.getStyle = function(element, param){

    return element.style[param] || getComputedStyle(element)[param];
};

/**
 * 获得元素中心点坐标(相对于页面)
 * @param element
 * @returns {{centerX: *, centerY: *}}
 */
util.getElementCenterPoint = function(element){

    return {
        centerY : util.toTop(element) + parseInt(util.getStyle(element, "height")) / 2,
        centerX : util.toLeft(element) + parseInt(util.getStyle(element, "width")) / 2
    };

};

util.linearMove = function(element, styles, duringMs){

    var partTime = 13;

    var partCount = Math.floor(duringMs / partTime);

    var obj = {};

    for(var key in styles){
        obj[key] = Math.floor((parseInt(styles[key]) - parseInt(this.getStyle(element, key))) / partCount);
    };

    var num = 0;

    var timer = setInterval(function(){

        num++;

        if(num >= partCount){
            clearInterval(timer);

            for(var key in styles){

                var param = {};
                param[key] = styles[key];

                util.setStyles(element, param);
            }

            return;
        }

        for(var key in styles){

            var param = {};
            console.log(num + ":" +util.getStyle(element, key));
            param[key] = (parseInt(util.getStyle(element, key)) + obj[key]) + "%";

            util.setStyles(element, param);
        }

    }, partTime);
};

/**
 * 获得两点之间的距离
 * @param point1 {centerX, centerY}
 * @param point2 {centerX, centerY}
 * return number
 */
util.getDistance = function(point1, point2){

    return Math.sqrt(Math.pow(point1.centerX - point2.centerX, 2) + Math.pow(point1.centerY - point2.centerY, 2));
};