/**
 * 自适应fontSize计算
 * 在页面头部引入
 * @param desicWidth(number) 设计稿宽度
 */
(function(win, doc, desicWidth){

    var docEl = doc.documentElement;

    var eventType = window.onorientationchange ? "orientationchange" : "resize";

    var eventFunc = function(){
        docEl.style.fontSize = docEl.clientWidth / (desicWidth / 100) + "px";
    }

    win.addEventListener(eventType, eventFunc, false);
    doc.addEventListener("DOMContentLoaded", eventFunc, false);

})(window, document, 640);
