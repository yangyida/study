var log = {};

log.log = function(o){

    var id = "yangyingjun-log-box";

    var logEl = document.getElementById(id);

    if(!logEl){

        logEl = document.createElement("div");
        logEl.id = id;
        logEl.style.position = "fixed";
        logEl.style.left = "0";
        logEl.style.bottom = "0";
        logEl.style.width = "100%";
        logEl.style.height = "40px";
        logEl.style.fontSize = "18px";
        logEl.style.textDecoration = "left";
        document.body.appendChild(logEl);
    }

    /*var oDiv = document.createElement("div");
    oDiv.innerHTML = o;
    logEl.appendChild(oDiv);*/

    logEl.innerHTML = o;
}