window.onload = function(){

    var oLeft = document.getElementById("left");
    var oRight = document.getElementById("right");
    var oPanel = document.getElementById("panel");
    var p = oPanel.getContext("2d");

    var oImg = null;

    oLeft.onclick = function(){

        if(oImg){
            rotate(oPanel, p, oImg, "left");
        };
    }
    ;

    oRight.onclick = function(){

        if(oImg){
            rotate(oPanel, p, oImg, "right");
        };
    };

    /**
     *
     * @param panel 画布
     * @param p  画笔
     * @param img 图片
     * @param type 类型
     */
    function rotate(panel, p, img, type){

        var width = panel.width;
        var height = panel.height;

        //清空画布
        p.clearRect(0,0,width, height);

        if(!type){
            p.drawImage(img, 0, 0,width, height);
        }else{
            panel.deg = panel.deg || 0;
            switch(type){
                case "left":
                    panel.deg -= 90;
                    break;
                case "right" :
                    panel.deg += 90;
                    break;
            };

            if(panel.deg % 180 == 0){
                width = panel.width = img.naturalWidth;
                height = panel.height = img.naturalHeight;

                p.save();
                p.translate(width/2, height/2);
                p.rotate(panel.deg * Math.PI / 180);
                p.drawImage(img, -width/2, -height/2, img.naturalWidth, img.naturalHeight);
                p.restore();
            }else{
                width = panel.width = img.naturalHeight;
                height = panel.height = img.naturalWidth;

                if(Math.sin(panel.deg) > 0){

                    p.save();
                    p.translate(width, 0);
                    p.rotate(panel.deg * Math.PI / 180);
                    p.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight);
                    p.restore();
                }else{
                    p.save();
                    p.translate(0, height);
                    p.rotate(panel.deg * Math.PI / 180);
                    p.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight);
                    p.restore();
                }


            }

        }

    };

    loadImg("../img/1.jpg", function(img){

        oImg = img;
        oPanel.width = img.naturalWidth;
        oPanel.height = img.naturalHeight;
        rotate(oPanel, p, oImg);

    });


};

function loadImg(src, callFunc){

    var img = new Image();

    img.onload = function(){
        callFunc(this);
    };

    img.src = src;
};