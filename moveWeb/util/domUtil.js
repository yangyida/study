var domUtil = {};

/**
 * 添加class
 * @param domEl object dom元素
 * @param className string class名
 */
domUtil.addClass = function(domEl, className){

    if(!domEl.classList){

        domEl.classList.add(className);

    }else{

        var classArray = domEl.className.trim().split(/[\s]+/gm);

        for(var i = 0; i < classArray.length; i++){
            if(classArray[i] == className){
                return;
            }
        }

        domEl.className = classArray.join(" ") + " " + className;

    }
}

/**
 * 删除class
 * @param domEl object dom元素
 * @param className  string class名
 */
domUtil.removeClass = function(domEl, className){

    if(domEl.classList){
        domEl.classList.remove(className);
    }else{

        var classArray = domEl.className.trim().split(/[\s]+/gm);

        for(var i = 0; i < classArray.length; i++){
            if(classArray[i] == className){
                classArray.replace(i, 1);
            }
        }

    }

}

domUtil.getId = function(id){
    return document.getElementById(id);
};

domUtil.getTagName = function(tagName){

    return document.getElementsByTagName(tagName);
}

/**
 * 页面加载完成回调函数
 * @param calFunc
 */
domUtil.domReady = function(calFunc){
    document.addEventListener("DOMContentLoaded", calFunc, false);
}

/**
 * 绑定事件
 * @param element object 元素
 * @param eventName string 事件名
 * @param func function 事件函数
 */
domUtil.byEvent = function(element, eventName, func){

    element.addEventListener(eventName, func, false);
}

/**
 * 设置css
 * @param element object 元素
 * @param css object/string 样式
 */
domUtil.setCSS = function(element, css){

    if(typeof css === "string"){

        var cssArr = css.split(";");

        var length = cssArr.length;

        for(var i = 0; i < length; i++){
            var item = cssArr[i].split("=");
            element.style[item[0]] = item[1];
        }

    }else if(typeof css === "object"){

        for(var key in css){
            element.style[key] = css[key];
        }
    }

}