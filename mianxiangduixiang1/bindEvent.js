/**
 * 绑定自定义事件
 * @param dom dom节点
 * @param event 事件名称
 * @param fn 事件方法
 */
var bindEvent = function(dom, event, fn){

    dom.listeners = dom.listeners || {};
    dom.listeners[event] = dom.listeners[event] || [];
    dom.listeners[event].push(fn);
};

/**
 * 触发自定义事件
 * @param dom dom节点
 * @param event 事件名称
 */
var fireEvent = function(dom, event){

    for(var i = 0; i < dom.listeners[event].length; i++){
        dom.listeners[event][i].call(dom);
    }
};