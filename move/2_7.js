window.onload = function(){

    var oF = getId("f");

    oF.onchange = function(e){
        var fileList = e.target.files;

        if(fileList.length > 0){
            var file = fileList[0];
            var type = file.type;
            var fileReader = new FileReader();

            fileReader.onload = function(e){

                var blob = new Blob([e.target.result], {type : type});
                var url = URL.createObjectURL(blob);
                var image = new Image();
                image.onload = function(){
                    URL.revokeObjectURL(url);
                    image.onload = null;
                };
                image.src = url;
                document.body.appendChild(image);

            };

            fileReader.readAsArrayBuffer(file);
        }
    };

    getId("btn").onclick = function(){
        var image = document.getElementsByTagName("img")[0];
        var canvas = document.createElement("canvas");
        var width = canvas.width = image.naturalWidth;
        var height = canvas.height = image.naturalHeight;
        canvas.getContext("2d").drawImage(image, 0, 0, width, height);

        var base64 = canvas.toDataURL("image/png");

        var w = window.open("about:blank");
        var g = w.document.createElement("img");
        g.src = base64;
        w.document.body.appendChild(g);
    };
};

function getId(id){
    return document.getElementById(id);
};

