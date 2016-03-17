window.onload = function(){

    var oDownload = document.getElementById("download");

    var oBox = document.getElementById("box");
    oBox.ondragover = function(e){
        e.preventDefault();
    };
    oBox.ondrop = function(e){
        e.preventDefault();

        var fileList = e.dataTransfer.files;

        if(fileList.length > 0){
            var file = fileList[0];
            var url = URL.createObjectURL(file);
            //URL.revokeObjectURL(url);

            oDownload.href = url;
            oDownload.setAttribute("download", file.name);
            oDownload.innerHTML = file.name;
        }
    };

};