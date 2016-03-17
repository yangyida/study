var loadScript = function(jsArr, calFunc, n){

    n || (n = 0);

    if(n == jsArr.length){
        calFunc();
        return;
    };

    var jsSrc = jsArr[n];
    var oScript = document.createElement("script");
    oScript.type = "text/javascript";
    oScript.src = jsSrc;
    oScript.async = true;

    oScript.onload = function(){

        loadScript(jsArr, calFunc, ++n);

        oScript.onload = null;
        oScript = null;
    };

    document.head.appendChild(oScript);
};

