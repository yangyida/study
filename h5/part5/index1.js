window.onload = function(){

    /**
     *  同域下的iframe操作
     *
     *
     */

    //var ifWindow =  window.frames["if"];
    var ifWindow = getId("if").contentWindow;
    var oShow = ifWindow.document.getElementById("show");

    var oBtn = getId("btn");
    var oIpt = getId("ipt");

    oBtn.onclick = function(){
        var str = oIpt.value.trim();
        if(str){
            oShow.innerHTML = str;
            oIpt.value = "";
        }
    }
}

function getId(id){
    return document.getElementById(id);
}