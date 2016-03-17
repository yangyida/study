window.onload = function(){

    var oC = getId("c");
    var p = oC.getContext("2d");

    setInterval(function(){

        p.clearRect(0,0,500,500);

        p.strokeStyle = "rgb(135,148,165)";
        p.fillStyle = "rgb(135,148,165)";

        var rr = get();

        //绘制表盘原点
        p.beginPath();
        p.arc(250,250,4,0,2*Math.PI);
        p.fill();

        //绘制表盘
        p.beginPath();
        p.lineWidth = 2;
        p.arc(250, 250, 200, 0, 2*Math.PI);
        p.stroke();

        //绘制刻度
        var radian = Math.PI / 6;
        var r = 180;
        var R = 200;
        p.lineWidth = 4;
        for(var i = 0; i < 12; i++){
            p.beginPath();
            var a = i * radian;
            p.moveTo(r*Math.sin(a) + 250, r*Math.cos(a) + 250);
            p.lineTo(R*Math.sin(a) + 250, R*Math.cos(a) + 250);
            p.stroke();
        };
        radian = Math.PI / 30;
        var r = 190;
        p.lineWidth = 2;
        for(var i = 0; i < 60; i++){
            p.beginPath();
            var a = i * radian;
            p.moveTo(r*Math.sin(a) + 250, r*Math.cos(a) + 250);
            p.lineTo(R*Math.sin(a) + 250, R*Math.cos(a) + 250);
            p.stroke();
        }

        p.lineWidth = 1;

        //绘制秒针
        var a = rr.s; // 弧度
        var R = 185;
        var r = 60;
        p.beginPath();
        p.moveTo(250,250);
        p.lineTo(R * Math.sin(a) + 250, R * Math.cos(a) + 250);
        p.stroke();
        p.beginPath();
        p.moveTo(250,250);
        p.lineTo(250 - r * Math.sin(a), 250 - r * Math.cos(a));
        p.stroke();

        p.lineWidth = 2;

        //绘制分针
        var a = rr.m; // 弧度
        var R = 130;
        p.beginPath();
        p.moveTo(250,250);
        p.lineTo(R * Math.sin(a) + 250, R * Math.cos(a) + 250);
        p.stroke();

        //绘制时针
        var a = rr.h; // 弧度
        var R = 90;
        p.beginPath();
        p.moveTo(250,250);
        p.lineTo(R * Math.sin(a) + 250, R * Math.cos(a) + 250);
        p.stroke();

    }, 1000);
};

function getId(id){
    return document.getElementById(id);
};

function get(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    if(h > 12){
        h = h - 12;
    };

    return {
        h : Math.PI - (Math.PI * h / 6 + Math.PI / 360 * m),
        m : Math.PI - Math.PI * m / 30,
        s : Math.PI - Math.PI * s / 30
    };
};