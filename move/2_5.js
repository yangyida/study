window.onload = function(){

    var n = 0;

    document.onclick = function(){

        if(n < arr.length){
            document.body.innerHTML = "";
            im = new Image();
            im.src = arr[n++];
            document.body.appendChild(im);
        };

    };

    var arr = [
        "http://img.club.pchome.net/upload/club/other/2015/3/23/pics_wsz1112_1427122646_600x0.jpg",
        "http://s5.sinaimg.cn/orignal/48736eaf2349b1d24dda4",
        "http://img2.ph.126.net/hMVsHSJ0sVRfAVb70rGdFw==/859061629021027499.jpg"
    ];

    var current = 0;

    load(current);

    function load(current){
        if(current < arr.length){
            preloadImage(
                arr[current++],
                function(){
                    load(current);
                },
                function(){
                    load(current);
                }
            );
        }

    };

};

function getId(id){
    return document.getElementById(id);
};

/**
 * 单例
 * 预加载图片
 * @param src string
 * @param function 成功回调函数
 * @param function 失败回调函数
 */
var preloadImage = (function(){

    var _image = new Image();
    var _successFunc = null;
    var _failFunc = null;

    _image.onload = function(){
        _successFunc && _successFunc.call(this);
    };

    _image.onerror = function(){
        _failFunc && _failFunc.call(this);
    };

    return function(src, successFunc, failFunc){
        _successFunc = successFunc;
        _failFunc = failFunc;
        _image.src = src;
    };
})();