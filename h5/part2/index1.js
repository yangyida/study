window.onload = function(){
/*
    新的选择器
    document.querySelector("");//返回一个元素
    document.querySelectorAll("");//返回一个List集合
    document.getElementsByClassName("");//返回一个List集合, 与class的出现顺序无关

    获取class列表属性
    classList length : class长度
              add() : 添加class
              remove() : 删除class
              toggle() : 切换class方法

    JSON的新方法
    -parse() 把字符串转成JSON-字符串的属性要严格的加上引号
    -stringify() 把json对象转化成字符串-会自动的把双引号加上
    用于对象的深度克隆
    //兼容  http://www.json.org/  json2.js
    eval() 将任意字符串转换成原生js

    data自定义数据 (Map)
    dataset:
            - data-name : dataset.name
            - data-name-first : data.nameFirst

    延时加载JS
    js的加载会影响后面的内容加载
    -defer：延迟加载，会按顺序执行，在onload执行前被触发
    -async：异步加载，加载完就触发，有顺序问题
    Labjs库

    历史管理（只要地址改变就会触发历史管理）
    //触发历史管理 1.通过跳转页面 2.hash 3.pushState
    onhashchange:改变hash值来管理
    history:-服务器下运行
            -pushState：三个参数：数据，标题（都没实现），地址（可选）
            -注意：网址是虚假的，需在服务器指定对应页面，不然刷新找不到页面

    拖放事件
    拖拽元素事件：事件对象为被拖拽元素
                -dragstart，拖拽前触发
                -drag，拖拽前、拖拽结束之间，连续触发//开始与结束连续触发
                -dragend，拖拽结束后触发
    目标元素事件：事件对象为目标元素
                -dragenter，进入目标元素触发，相当于mouseover
                -dragover，进入目标、离开目标之间，连续触发(要想触发drop事件，就必须在dragover当中阻止默认事件)
                -dragleave，离开目标元素触发，相当于mouseout
                -drop，在目标元素上释放鼠标触发(drop触发时将不触发dragleave)
     事件的执行顺序：drop不触发的时候
                  dragstart->drag->dragenter->dragover->dragleave->dragend
                  drop触发的时候
                  dragstart->drag->dragenter->dragover->drop->dragend
     不能释放的光标和能释放的光标不一样

     dataTransfer对象
     setData() 设置数据key和value（必须是字符串）
     getData() 获取数据，根据key值，获取对应的value
     setData、getData用于dragstart到drop传递数据
     effectAllowed :
                    -effectAllowed设置光标样式(none,copy,copyLink,copyMove,link,linkMove,move,all,uninitialized)
     setDragImage :(设置拖拽时候鼠标的图片)
                  - 三个参数：指定的元素（可以隐藏），坐标x， 坐标y
     files :
            -获取外部拖拽的文件，返回一个fileList列表

     FileReader(读取文件信息)
     -readAsDataURL
        参数为要读取的文件对象，将文件读取为DataUrl
     -onload
        读取文件成功完成的时候触发此事件
        this.result，来获取读取的文件数据，如果是图片，将返回base64格式的图片数据

*/

};
/**
 * 对象的深度克隆
 * @param obj 数值对象
 * return object
 */
var cloneObj = function(obj){

    return JSON.parse(JSON.stringify(obj));
};