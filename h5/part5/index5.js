window.onload = function(){

    /**
     * Web Workers
     *  JS的单线程(放入UI队列的个数，利用定时器解决)
     *  可以让web应用程序具备后台处理能力，对多线程的支持非常好
     *
     *  Worder API
     *  new Worder("后台处理的ＪＳ地址")
     *  利用postMessage传输数据
     *  importScripts("导入其他JS文件")
     *
     *  Worker运行环境(不能进行dom操作)
     *  navgator: appName appVersion userAgent platform
     *  location:有所属性都是只读的
     *  self: 指向全局worker对象
     *  所有的ECMA对象: Object Array Date等
     *  XMLHttpRequest 对象
     *  setTimeout setInterval
     *  close()方法,立刻停止worker运行
     *  importScripts方法
     *
     *
     */

    var a = new Worker("index5_1.js");

    a.onmessage = function(e){
        console.log(e.data);
    }

    document.getElementById("btn").onclick = function(){
        a.postMessage("close");
    }
}