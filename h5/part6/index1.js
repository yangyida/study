window.onload = function(){

    /**
     * cookie
     * 数据存储到计算机中，通过浏览器控制添加与删除数据
     * 存储限制
     *      域名100个cookie，每组值大小4kb
     * 客户端、服务器端，都会请求服务器（每次请求都会带上cookie，影响性能）
     * 页面间的cookie是共享的
     *
     *
     *  Storage
     *  sessionStorage
     *      session临时会话，从页面打开到页面关闭的时间段
     *      窗口的临时存储，页面关闭，本地存储消失
     *  localStorage
     *      永久存储（可以手动删除数据）
     *
     *  Storage的特点
     *      存储量限制（5M）
     *      客户端完成，不会请求服务器处理
     *      sessionStorage数据不共享，localStorage共享
     *
     *  Storage API
     *      存储事件：
     *          当数据有修改或删除的情况下，就会触发storage事件
     *          在对数据进行改变的窗口对象上是不会触发的
     *          注：session同窗口才可以，例子：iframe操作
     *
     */

}

window.onunload = function(){
    //localStorage.removeItem("name");
}