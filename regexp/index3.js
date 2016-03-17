window.onload = function(){

    var oIpt = getId("ipt");
    var oBtn = getId("btn");
    var oShow = getId("show");

    var reg = /<[\w\W]+>([\w\W]+)<[\w\W]+>/ig;

    var v = "";

    oBtn.onclick = function(){

        v = oIpt.value.replace(reg, function(a, b){

            return b;
        });
        oShow.innerHTML = v;
    };
};

function getId(id){
    return document.getElementById(id);
};