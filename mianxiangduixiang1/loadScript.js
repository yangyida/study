var loadScript = function(src, callBack){

    var sList = document.getElementsByTagName("script");
    for(var i = 0; i < sList.length; i++){
        if(src == sList[i].getAttribute("src").trim()){
            callBack();
            return;
        }
    };

    var oS = document.createElement("script");
    oS.type = "text/javascript";
    oS.src = src;
    oS.onload = function(){
        callBack();
        this.onload = null;
    };

    document.head.appendChild(oS);
};