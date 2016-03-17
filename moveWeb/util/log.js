var log = {};

log.log = function(o){

    var logEl = document.querySelector("#yangyingjun-log-box");

    if(!logEl){
        var logEl = document.createElement("div");
        logEl.id = "yangyingjun-log-box";
        logEl.style.position = "fixed";
        logEl.style.left = "0";
        logEl.style.bottom = "0";
        logEl.style.width = "100%";
        logEl.style.backgroundColor = "rgba(255,255,255, 0.2);"
        logEl.style.fontSize = "5rem";
        logEl.style.overflowY = "auto";
        document.body.appendChild(logEl);
    }

    var megEl = document.createElement("div");
    megEl.innerHTML = o;
    logEl.appendChild(megEl);
}