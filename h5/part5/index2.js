window.onload = function(){

    /**
     *  同域下的open操作
     *
     */
    var oBtn = getId("btn");
    var oChange = getId("change");

    var otherWindow = null;

    oBtn.onclick = function(){
        otherWindow = window.open("index1.html");
    }

    oChange.onclick = function(){
        otherWindow.document.body.style.backgroundColor = "blue";
    }

}

function getId(id){
    return document.getElementById(id);
}