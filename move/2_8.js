window.onload = function () {

    /*var blob = new Blob(["你好啊", "!!!", "90"], {type : "text/plain"});

     var fileReader = new FileReader();

     fileReader.onload = function(e){
     console.log(e.target.result);
     };

     fileReader.readAsText(blob);*/

    /***
     绘制canvas元素中的图像
     ***/
    var canvas = document.getElementById("canvas");
    if (canvas == null)
        return false;
    var context = canvas.getContext('2d');
    context.fillStyle = "#EEEEFF";
    context.fillRect(0, 0, 400, 300);
    var n = 0;
    for (var i = 0; i < 10; i++) {
        context.beginPath();
        context.arc(i * 25, i * 25, i * 10, 0, Math.PI * 2, true);
        context.closePath();
        context.fillStyle = 'rgba(255, 0, 0, 0.25)';
        context.fill();
    }

    var type = 'image/jpeg';
    //将canvas元素中的图像转变为DataURL
    var dataurl = canvas.toDataURL(type);
    //抽取DataURL中的数据部分，从Base64格式转换为二进制格式
    var bin = atob(dataurl.split(',')[1]);
    //创建空的Uint8Array
    var buffer = new Uint8Array(bin.length);
    //将图像数据逐字节放入Uint8Array中
    for (var i = 0; i < bin.length; i++) {
        buffer[i] = bin.charCodeAt(i);
    }
    //利用Uint8Array创建Blob对象
    var blob = new Blob([buffer.buffer], {type: type});
    var url = window.URL.createObjectURL(blob);
    //document.getElementById("download").href = url;

    var w = window.open("about:blank");
    w.location.href = url;

    //window.location.href = url;
};