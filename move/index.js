window.onload = function(){

    var oBox = document.getElementById("box");

    console.time("AAA");
    Yd.move(
        oBox,
        {
            left : "400px",
            height : "400px",
            width: "400px"
        },
        2,
        600,
        function(){
            console.timeEnd("AAA");
            console.log("执行完成");
        }
    );

};