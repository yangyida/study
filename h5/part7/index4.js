window.onload = function(){

    var oBox = getId("box");
    var oContaint = getId("containt");
    var oV = getId("v");
    oV.isPlay = false;

    setStyle(oBox,{
        marginLeft : parseInt(getComputedStyle(oBox).width) / 2 * -1 + "px",
        marginTop : parseInt(getComputedStyle(oBox).height) / 2 * -1 + "px"
    });

    var oPlayBtn = getId("playBtn");

    //播放/暂停按钮
    oPlayBtn.onclick = function(){
        play();
    }

    function play(){
        if(oV.isPlay){
            oV.isPlay = false;
            oV.pause();
            oPlayBtn.innerHTML = "播放";
        }else{
            oV.isPlay = true;
            oV.play();
            oPlayBtn.innerHTML = "暂停";
        }
    }


    //播放时间操作
    var oCurrentTime = getId("currentTime");
    var oTotalTime = getId("totalTime");

    var oProgressBar = getId("progressBar");
    var oProgressBarWidth = parseInt(getComputedStyle(oProgressBar).width);
    var oProgress = getId("progress");

    var isDrag = false;

    var totalTime = oV.duration;
    console.log(totalTime);
    var currentTime = oV.currentTime;

    oTotalTime.innerHTML = changeTime(totalTime);
    oCurrentTime.innerHTML = changeTime(currentTime);

    oV.addEventListener("timeupdate", function(){

        if(!isDrag){
            //播放时间
            currentTime = oV.currentTime;
            oCurrentTime.innerHTML = changeTime(currentTime);
            console.log(currentTime + ","+ totalTime);
            //进度条
            setStyle(oProgress,{
                left : currentTime / totalTime * 100 + "%"
            });
        }

    }, false);

    oProgress.onmousedown = function(){
        if(!isDrag){
            isDrag = true;
        }
    }

    document.addEventListener("mousemove", function(e){

        if(isDrag){

            var c = parseInt(getComputedStyle(oProgress).left) + e.movementX;

            if(c < 0){
                oProgress.style.left = "0px";
            }else if(c > oProgressBarWidth){
                oProgress.style.left = "100%";
            }else{
                oProgress.style.left = c + "px";
            }

            currentTime = c / oProgressBarWidth * totalTime;
            oV.currentTime = currentTime;
            oCurrentTime.innerHTML = changeTime(currentTime);
        }

    }, false);

    document.addEventListener("mouseup", function(){

        if(isDrag){
            isDrag = false;
        }

    }, false);



}

function changeTime(time){

    var m = "";
    var s = "";

    time = parseInt(time);

    s = time%60 + "";
    m = parseInt(time/60) + "";

    if(s.length == 1){
        s = 0 + s;
    }

    if(m.length == 1){
        m = 0 + m;
    }else if(m.length == ""){
        m = "00";
    }

    return m + ":" + s;
}

function getId(id){
    return document.getElementById(id);
}

function setStyle(element, styles){

    for(var key in styles){
        element.style[key] = styles[key];
    }
}