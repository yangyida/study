window.onload = function(){

    var oBox = document.getElementById("box");

    oBox.ondragstart = function(e){
        e.dataTransfer.setData("name", "杨英俊");
        e.dataTransfer.setData("age", "22");
    };

    var oShow = document.getElementById("show");

    oShow.ondragover = function(e){
        e.preventDefault();
    };

    oShow.ondragleave = function(){
        console.log("leave");
    };

    oShow.ondrop = function(e){
        console.log("drop");
    };
};