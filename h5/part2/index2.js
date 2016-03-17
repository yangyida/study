window.onload = function(){

    var oBtn = getId("btn");
    var oShow = getId("show");

    oBtn.onclick = function(){
        window.location.hash = getRandomStr();
    };

    window.onhashchange = function(e){
        var currentHash = window.location.hash;
        oShow.innerHTML = currentHash.substring(1, currentHash.length);
    };
};

var getRandomStr = function(){

    var str = "";

    for(var i = 0; i < 7; i++){
        str += getRandomNumber()+",";
    }

    return str.substring(0, str.length-1);
};

var getRandomNumber = function(){
    return parseInt(Math.random() * 10);
};

var getId = function(id){
    return document.getElementById(id);
};