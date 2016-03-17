window.onload = function(){

    var oPanel = document.getElementById("panel");
    var p = oPanel.getContext("2d");

    p.fillStyle = "green";
    p.fillRect(0, 0, oPanel.width, oPanel.height);

    var imageData = p.getImageData(0,0,10,10);

    for(var i = 0; i < imageData.width; i++){

        for(var j = 0; j < imageData.height; j++){

            setTargetImageData(imageData, i, j, {
                r : 56,
                g : 129,
                b : 253,
                a : 255
            });
        }
    };

    p.putImageData(imageData,0,0);


};

/**
 * 获得指定点的数据
 * @param imageData
 * @param x
 * @param y
 * @returns {{r: *, g: *, b: *, a: *}}
 */
function getTargetImageData(imageData, x, y){

    var l = imageData.width * y + x;

    return{
        r : imageData.data[l * 4],
        g : imageData.data[l * 4 + 1],
        b : imageData.data[l * 4 + 2],
        a : imageData.data[l * 4 + 3]
    };
};

/**
 * 设置指定点颜色
 * @param imageData
 * @param x
 * @param y
 * @param d
 */
function setTargetImageData(imageData, x, y, d){

    var l = imageData.width * y + x;

    imageData.data[l * 4] = d.r;
    imageData.data[l * 4 + 1] = d.g;
    imageData.data[l * 4 + 2] = d.b;
    imageData.data[l * 4 + 3] = d.a;

};

