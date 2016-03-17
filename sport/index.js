
var move = Yd.move;

window.onload = function(){

    /*var oShare = document.getElementById("share");

    console.log(getComputedStyle(oShare).opacity);

    var t = null;

    oShare.onmouseenter = function(){

        t && t.stopNow();

        t = move(
            oShare,
            {
                left : "0px"
            },
            1,
            800,
            function(){}
        );

    };

    oShare.onmouseleave = function(){

        t && t.stopNow();

        t = move(
            oShare,
            {
                left : "-60px"
            },
            1,
            800,
            function(){}
        );

    };*/

    var oBox = document.getElementById("box")

    Yd.slowMove(
        oBox,
        {
            left : "40%"
        },
        8,
        function(){
            Yd.slowMove(
                oBox,
                {
                    left : "60%"
                },
                10
            );
        }
    );
};

