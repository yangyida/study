window.onload = function(){

    var oPanel = document.getElementById("panel");
    var p = oPanel.getContext("2d");

    var str = "中国人";

    p.font = "60px w";
    p.textBaseline = "top";
    var textWidth = p.measureText(str).width;
    p.strokeStyle = "red";
    p.strokeText(str, oPanel.width / 2 - textWidth / 2, oPanel.height / 2 - 30);
};