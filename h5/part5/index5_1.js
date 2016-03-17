function getMessage(){

}

self.onmessage = function(e){
    if(e.data == "close"){
        clearInterval(timer);
        self.close();
    }
}

var timer = setInterval(function(){

    self.postMessage(new Date().toString());

}, 1000);

console.log(self);
