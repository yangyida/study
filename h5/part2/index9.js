window.onload = function(){

    var oDownload = document.getElementById("download");

    var blob = new Blob(["这里是一条特别的信息"], {type: "text/plain"});


    var reader = new FileReader();

    reader.onload = function(e){
        console.log(e);
    };

    reader.readAsText(blob);
};