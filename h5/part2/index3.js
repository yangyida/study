window.onload = function(){

    var oBtn = getId("btn");
    var oShow = getId("show");

    oBtn.onclick = function(){
        var randomStr = getRandomStr();
        oShow.innerHTML = randomStr;
        window.history.pushState(randomStr, "");
    };

    window.onpopstate = function(e){
        oShow.innerHTML = e.state;
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