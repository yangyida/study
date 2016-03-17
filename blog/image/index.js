//HTMLImageElement Image Canvas ImageData
window.onload = function(){

    var oF = getId("f");

    oF.onchange = function(e){
        var file = e.target.files[0];
        var url = URL.createObjectURL(file);

        getImageBySrc(url, function(image){
            URL.revokeObjectURL(url);
            document.body.appendChild(image);
        });
    };


};

function getImageBySrc(src, calBack){

    var image = new Image();

    image.onload = function(){
        calBack(image);
        image.onload = null;
    };

    image.src = src;

};

function getId(id){
    return document.getElementById(id);
};