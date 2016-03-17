window.onload = function(){

    var oV = getId("video");
    var oC = getId("panel");
    var p = oC.getContext("2d");

    oC.width = oV.videoWidth;
    oC.height = oV.videoHeight;

    setInterval(function(){

        p.drawImage(oV, 0,0);

    }, 30);
}

function getId(id){
    return document.getElementById(id);
}