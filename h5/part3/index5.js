window.onload = function(){

    var oC = document.getElementById("c");
    var p = oC.getContext("2d");

    p.translate(oC.width/2, oC.height/2);

    p.beginPath();
    p.moveTo(-50, -50);
    p.rect(-50, -50 ,100, 100);
    p.fill();

    var d = 0;
    var c = 1;
    var flag = true;

    setInterval(function(){

        d-=10;

        if(flag){
            c+=0.1;
            if(c > 3){
                flag = false;
            }
        }else{
            c-=0.1;
            if(c < 2){
                flag = true;
            }
        }

        p.clearRect(-150, -150, 300, 300);

        p.save();
        p.beginPath();
        p.rotate(d * Math.PI / 180);
        p.scale(c,c);
        p.moveTo(-50, -50);
        p.rect(-50, -50 ,100, 100);
        p.fill();
        p.restore();

    }, 60);
};