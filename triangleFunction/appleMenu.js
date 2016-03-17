window.onload = function(){

    var oBox = getId("box");
    var imgList = oBox.getElementsByTagName("img");

    //每个图片中心点对应页面的横纵坐标
    var imgLocationArr = [];

    for(var i = 0; i < imgList.length; i++){
        imgLocationArr.push(getElementToPageLocation(imgList[i]));
    };

    var imgOriginalWidth = parseInt(getComputedStyle(imgList[0]).width);

    oBox.onmousemove = function(e){

        for(var i = 0; i < imgLocationArr.length; i++){

            var targetImgMsg = imgLocationArr[i];

            var distance = Math.abs(e.pageX - targetImgMsg.pageX);

            if(distance < 96){

                //(96 - distance) / 48 == ? / imgOriginalWidth

                var t = (96 - distance) * imgOriginalWidth / 48;

                if(t > imgOriginalWidth){
                    setStyle(targetImgMsg.element, {width: t + "px"});
                }

            }else{
                setStyle(targetImgMsg.element, {width: imgOriginalWidth + "px"});
            }
        }

    };

    oBox.onmouseleave = function(){

        for(var i = 0; i < imgLocationArr.length; i++){
            var targetImgMsg = imgLocationArr[i];
            setStyle(targetImgMsg.element, {width: imgOriginalWidth + "px"});
        }
    };
};

/**
 * 设置元素样式
 * @param element
 * @param params
 */
function setStyle(element, params){

    for(var key in params){
        element.style[key] = params[key];
    }
};

function getId(id){
    return document.getElementById(id);
};

/**
 * 获得元素到页面的横纵距离
 * @param element
 * @returns {{element: *, pageX: (Number|number), pageY: (Number|number)}}
 */
function getElementToPageLocation(element){

    var pageX = getToPageLeft(element) + parseInt(getStyle(element, "width")) / 2;
    var pageY = getToPageTop(element) + parseInt(getStyle(element, "height")) / 2;

    return {
        element : element,
        pageX : pageX,
        pageY : pageY
    };
}

/**
 * 该元素为第几个子元素(如果不存在父元素则返回-1)
 * @param element
 */
function indexOfParent(element){

    var parentElement = element.parentElement;

    //判断是否存在父元素
    if(!parentElement){
        return -1;
    }else{

        for(var i = 0; i < parentElement.children.length; i++){

            if(parentElement.children[i] == element){
                return i;
            }
        }

    }

};

/**
 * 获得元素的样式
 * @param element
 * @param type
 * @returns {*}
 */
function getStyle(element, type){
    return element["style"][type] || getComputedStyle(element)[type];
};

/**
 * 元素到页面顶部的距离
 * @param element
 * @returns {Number|number}
 */
function getToPageTop(element){

    var distance = element.offsetTop;

    var parentElement = element.parentElement;

    while(parentElement){

        distance += parentElement.offsetTop;

        parentElement = parentElement.offsetParent;

    };

    return distance;
};

/**
 * 元素到页面左侧的距离
 * @param element
 * @returns {Number|number}
 */
function getToPageLeft(element){

    var distance = element.offsetLeft;

    var parentElement = element.parentElement;

    while(parentElement){

        distance += parentElement.offsetLeft;

        parentElement = parentElement.offsetParent;

    };

    return distance;
};