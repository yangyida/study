window.onload = function(){

    var oPanel = document.getElementById("panel");
    var p = oPanel.getContext("2d");

    p.fillRect(0,0,30,30);

    p.fillStyle = "rgba(0,0,0, 0.5)";

    p.fillRect(15,15, 30,30);
};