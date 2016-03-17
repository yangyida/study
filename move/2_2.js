window.onload = function(){

    var oIpt = getId("ipt");
    var oBtn = getId("btn");
    var oShow = getId("show");

    oBtn.onclick = function(){
        var value = oIpt.value.trim();
        oIpt.value = "";
        value && record(value);
    };

    function record(value){
        var oLi = document.createElement("li");
        oLi.innerHTML = value;

        oShow.insertBefore(oLi, oShow.children[0]);

        var factHeight = getComputedStyle(oLi).height;

        oLi.style.height = "0px";
        oLi.style.opacity = "0";

        Yd.move(
            oLi,
            {
                height : factHeight,
                opacity : "1"
            },
            2,
            1000
        );
    };
};

function getId(id){
    return document.getElementById(id);
};