window.onload = function(){

    var oBox = getId("box");
    var oPoint = getId("point");

    var r = getDistance(oBox, oPoint);

    var angle = 0;

    setInterval(function(){

    angle += 1;

    var pointLocation = getTargetLocation(angle, r, 150, 150);

    setStyle(oPoint,
        {
            left : pointLocation.x - 10 + "px",
            top : pointLocation.y - 10 + "px"
        });

    }, 13);
};

function setStyle(element, params){

    for(var key in params){
        element["style"][key] = params[key];
    };
};

/**
 * 获得计算后的坐标点
 * @param angle
 * @param r
 * @param x
 * @param y
 * @returns {{x: *, y: *}}
 */
function getTargetLocation(angle, r, x, y){

    var a = angle*Math.PI/180;

    var Y = Math.sin(a) * r + y;
    var X = Math.cos(a) * r + x;

    return {
        x : X,
        y : Y
    };
}

/**
 * 获得两个元素中心点的距离
 * @param element1
 * @param element2
 */
function getDistance(element1, element2){

    var e1y = toTop(element1) + parseInt(getComputedStyle(element1).height) / 2;
    var e1x = toLeft(element1) + parseInt(getComputedStyle(element1).width) / 2;

    var e2y = toTop(element2) + parseInt(getComputedStyle(element2).height) / 2;
    var e2x = toLeft(element2) + parseInt(getComputedStyle(element2).width) / 2;

    return Math.sqrt(Math.pow(e1x - e2x, 2) + Math.pow(e1y - e2y, 2));
};

function getId(id){
    return document.getElementById(id);
};

function toTop(element){

    var toTopDistance = element.offsetTop;

    var parentElement = element.offsetParent;

    while(parentElement){
        toTopDistance += parentElement.offsetTop;
        parentElement = parentElement.offsetParent;
    }

    return toTopDistance;
};

function toLeft(element){

    var toLeftDistance = element.offsetLeft;

    var parentElement = element.offsetParent;

    while(parentElement){
        toLeftDistance += parentElement.offsetLeft;
        parentElement = parentElement.offsetParent;
    }

    return toLeftDistance;
};