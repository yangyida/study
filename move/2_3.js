window.onload = function(){

    var oImagesContaint = getId("imagesContaint");

    var oBtnContaint = getId("btnsContaint");

    var btns = oBtnContaint.children;

    var stopNow = null;

    setStyle(
        oImagesContaint,
        {
            position: "absolute",
            left : "0px",
            top : "0px"
        }
    );

    var currentNum = 0;
    var currentBtn = null;

    for(var i = 0; i < btns.length; i++){
        btns[i].currentNum = i;
        btns[i].onclick = select;

    };

    select.call(btns[0]);

function select(){

    stopNow && stopNow();

    currentNum = this.currentNum;
    currentBtn && setStyle(currentBtn,{backgroundColor : "#cccccc"});
    currentBtn = btns[this.currentNum];
    setStyle(currentBtn, {backgroundColor : "blue"});
    stopNow = Yd.move(
        oImagesContaint,
        {
            left : getTargetDistance(currentNum)
        },
        1,
        1000
    ).stopNow;
};

function getTargetDistance(num){
    return -1 * 520 * num + "px";
};

function getId(id){
    return document.getElementById(id);
};

function setStyle(element, styles){

    for(var key in styles){
        element["style"][key] = styles[key];
    }
};

};