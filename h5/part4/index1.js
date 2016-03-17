window.onload = function(){

    var oCanvas = getId("panel");
    var p = getP(oCanvas);

    //画布宽、高
    var oCanvas_width = oCanvas.width;
    var oCanvas_height = oCanvas.height;
    //大圆半径、横纵坐标
    var R = 250;
    var L = oCanvas_width / 2;
    var T = oCanvas_height / 2;
    //小圆半径、横纵坐标
    var r = R / 2 + 40;
    var l = L - r + 80;
    var t = T;
    //重点圆半径、横纵坐标
    var zr = 20;
    var zl = L + 80;
    var zt = T;

    //小球移动
    setInterval(function(){

        initLoad();
        ballTool.moveBall();
        shotBallTool.shotBallMove();

        shotBallTool.drawShotBall();
        ballTool.drawBall();

        //判断碰撞
        var sbArr = shotBallTool.shotBallArr;
        var barr = ballTool.ballArr;

        nn : for(var i = 0; i < sbArr.length; i++){
            for(var j = 0; j < barr.length; j++){
                var distance = getTwoDistance(
                    {
                        x : sbArr[i].left,
                        y : sbArr[i].top
                    },
                    {
                        x : barr[j].left,
                        y : barr[j].top
                    }
                );
                //撞上了
                if(distance <= zr * 2){
                    sbArr.splice(i,1);
                    barr.splice(j, 1);
                    break nn;
                }
            }
        }

    }, 50);

    //添加小球
    setInterval(function(){

        ballTool.addBall();

    }, 500);

    //控制球的工具
    var ballTool = (function(){

        var ballArr = [];

        //添加球
        function addBall(){
            var ball = {
                ballAngle : -90
            };
            ballArr.push(ball);
        }

        //绘制所有的球
        function drawBall(){
            for(var i = 0; i < ballArr.length; i++){

                var ball = ballArr[i];
                var targetH = ball.ballAngle * Math.PI / 180;
                if(ball.ballAngle < 180){
                    var oL = R * Math.cos(targetH) + L;
                    var oT = R * Math.sin(targetH) + T;
                }else{
                    var oL = r * Math.cos(targetH) + l;
                    var oT = r * Math.sin(targetH) + t;
                }

                p.save();
                p.beginPath();
                p.arc(oL, oT, zr, 0, 2 * Math.PI);
                p.fill();
                p.restore();

                ball.left = oL;
                ball.top = oT;

                if(ball.ballAngle >= 360){
                    alert("游戏结束");
                }
            }
        }

        //移动球
        function moveBall(){
            for(var i = 0; i < ballArr.length; i++){
                ballArr[i].ballAngle+=1;
            }
        }

        return{
            addBall : addBall,
            moveBall : moveBall,
            drawBall : drawBall,
            ballArr : ballArr
        };

    })();

    //绘制路径
    function initLoad(){

        p.clearRect(0,0, oCanvas_width, oCanvas_height);

        p.save();

        p.lineWidth = 2;

        p.beginPath();
        p.arc(L, T, R, -1 * Math.PI / 2, Math.PI);
        p.stroke();

        p.beginPath();
        p.arc(l, t, r, -1 * Math.PI, 0);
        p.stroke();

        p.beginPath();
        p.arc(zl, zt, zr, 0, Math.PI * 2);
        p.stroke();

        p.restore();

    };

    var oBox = getId("box");
    var oImg = getId("pic");
    var angl = 0;

    //子弹球工具
    var shotBallTool = (function(){

        var shotBallArr = [];

        function addShotBall(angle){
            var shotBall = {
                angle : angle,
                r : 15
            };
            console.log(shotBall);
            shotBallArr.push(shotBall);
        }

        function drawShotBall(){
            for(var i = 0; i < shotBallArr.length; i++){
                var sb = shotBallArr[i];
                var sr = sb.r;
                var sbL = sr * Math.cos(sb.angle * Math.PI / 180) + L;
                var sbT = sr * Math.sin(sb.angle * Math.PI / 180) + T;
                p.save();
                p.beginPath();
                p.fillStyle = "red";
                p.arc(sbL, sbT, zr,0,2 * Math.PI);
                p.fill();
                p.restore();

                sb.left = sbL;
                sb.top = sbT;
            }
        }

        function shotBallMove(){
            for(var i = 0; i < shotBallArr.length; i++){
                shotBallArr[i].r+=10;
            }
        }

        return{
            addShotBall : addShotBall,
            drawShotBall : drawShotBall,
            shotBallMove : shotBallMove,
            shotBallArr : shotBallArr
        };

    })();

    //点击弹出球
    oBox.onclick = function(){
        //添加弹出球
        shotBallTool.addShotBall(angl - 90);
    };

    //发射器
    oBox.onmousemove = function(e){

        var offsetX = e.offsetX;
        var offsetY = e.offsetY;
        var a = (offsetX - 301) / (301 - offsetY);
        var b = Math.atan(a);

        angl = 0;

        if(offsetX > 301 && offsetY < 301){
             angl = 180*b/Math.PI;
        }else if(offsetX > 301 && offsetY > 301){
             angl = 180 + 180*b/Math.PI;
        }else if(offsetX < 301 && offsetY > 301){
             angl = 180 + 180*b/Math.PI;
        }else if(offsetX < 301 && offsetY < 301){
             angl = 360 + 180*b/Math.PI;
        }

        oImg.style.transform = "rotate(" + angl + "deg)";
    };
};



function getId(id){
    return document.getElementById(id);
}

function getP(canvas){
    return canvas.getContext("2d");
}

function getTwoDistance(point1, point2){

    return Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));
}