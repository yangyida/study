window.onload = function(){

    var oUl = getId("font");

    var isShow = false;


    oUl.onclick = function(e){
        var f = e.target.innerHTML;

        play.stop();
        play.start(f);
    };

    var play = (function(){

        var timer = null;
        var isPlay = false;
        var n = 1;


        function start(f){

            if(isPlay){
                stop();
            }

            isPlay = true;

            timer = setInterval(function(){
                if(n > 10 || !isPlay){
                    stop();
                    return;
                }
                showInCanvas(f, n++);
            }, 30);
        };

        function stop(){
            n = 1;
            timer && clearInterval(timer);
            timer = null;
            isPlay = false;
        };

        return {
            start : start,
            stop : stop
        }
    })();

    function showInCanvas(f, n){

        var oPanel = getId("panel");
        var p = oPanel.getContext("2d");

        p.font="30px impact";
        p.textBaseline = "top";
        p.fillStyle = "red";

        p.clearRect(0,0,oPanel.width, oPanel.height);

        var height = 30;
        var width = p.measureText(f).width;

        p.save();

        p.fillText(f, (oPanel.width - width) / 2, (oPanel.height - height) / 2);

        var imageData = p.getImageData((oPanel.width - width) / 2, (oPanel.height - height) / 2, width, height);

        p.clearRect(0,0,oPanel.width, oPanel.height);

        var newArr = randomArr(imageData.width * imageData.height, imageData.width * imageData.height / 10 * n);

        var newData = p.createImageData(width, height);

        for(var i = 0; i < newArr.length; i++){
            newData.data[newArr[i]*4] = imageData.data[newArr[i]*4];
            newData.data[newArr[i]*4 + 1] = imageData.data[newArr[i]*4 + 1];
            newData.data[newArr[i]*4 + 2] = imageData.data[newArr[i]*4 + 2];
            newData.data[newArr[i]*4 + 3] = imageData.data[newArr[i]*4 + 3];
        };

        p.putImageData(newData, (oPanel.width - width) / 2, (oPanel.height - height) / 2);

        p.restore();
    };
};

function getId(id){
    return document.getElementById(id);
};

function randomArr(iAll, iNow){

    var all = [];
    var target = [];

    for(var i = 0; i < iAll; i++){
        all.push(i);
    };

    for(var i = 0; i < iNow; i++){
        target.push(all.splice(Math.floor(all.length * Math.random()),1));
    };

    return target.join("|").split("|");
};