window.onload = function(){

    /**
     *  跨域窗口操作
     *
     *  postMessage对象
     *      接收消息的窗口对象.postMessage()
     *      一参：发送的数据，二参：接收的域
     *      交互方式
     *          iframe：父页面 content.Window 子页面 window.top
     *          窗口页：父页面 window.open 子页面 window.opener
     *
     *  接收事件
     *      message
     *      ev.origin:发送数据来源的域
     *      ev.data：发送的数据
     */

    window.addEventListener("message", function(e){

        document.getElementById("show").innerHTML = e.data;

    }, false);
}