window.onload = function(){

    var oF = getId("f");

    oF.onchange = function(e){
        var fileList = e.target.files;

        if(fileList && fileList.length > 0){

            var file = fileList[0];

            var reader = new FileReader();

            reader.onload = function(e){
                console.log("Reader: " + e.target.result);
                console.log("URL: " + URL.createObjectURL(file));

                reader.onload = null;
                reader = null;
            };

            reader.readAsDataURL(file);


        };
    };

    /*var buff = new ArrayBuffer(20);
    var x = new Uint32Array(buff);
    x[0] = 200;

    var slice = buff.slice(0, 4);
    var y = new Uint32Array(slice);
    console.log(y[0]);

    x[0] = 1000;
    var slice = buff.slice(0, 4);
    var y1 = new Uint32Array(slice);
    console.log(y1[0]);

    x[0] = 2000;
    var slice = buff.slice(0, 4);
    var y2 = new Uint32Array(slice);
    console.log(y2[0]);*/

    /*var a = new ArrayBuffer(4);
    //new Uint8Array();
    console.log(new Uint8Array(a).buffer);*/

    //

    var a = new Uint32Array(1);
    a[0] = 673059850;

    var b = new Uint8Array(a.buffer);
    console.log(b);
};

function getId(id){
    return document.getElementById(id);
};