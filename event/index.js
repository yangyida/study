window.onload = function(){
    /*var oBox = document.getElementById("box");
    /!*var oText = oBox.childNodes[0];
    oBox.onclick = function(){
        console.log(typeof oText);
    };*!/

    //oBox.innerHTML = "&lt;span style='color:red;'&gt;nihaoma&lt;/span&gt;";



    var oIpt = document.getElementById("ipt");

    oIpt.addEventListener(
        "textInput",
        function(event){
            var data = event.data;
            if(data == "d"){
                event.preventDefault();
            };
        },
        false
    );

    oIpt.onmousedown = function(e){
        if(!e.ctrlKey){
            e.preventDefault();
        }
    };*/

    /*window.addEventListener("pageshow", function(){
        alert();
    }, false)

    window.addEventListener("pagehide", function(e){

        console.log("pagehide");

        alert("pagehide!!!");

    }, false);


    window.addEventListener("beforeunload", function(e){

        console.log("beforeunload");

        e.returnValue = "exit?";

        return "exit?";

    }, false);*/

    /*var oShow = document.getElementById("show");
    var oBtn = document.getElementById("btn");

    oBtn.onclick = function(){
        var date = new Date();
        oShow.innerHTML = date.toString();
        history.pushState(date.toString(), null);
    };

    window.onpopstate = function(e){
        oShow.innerHTML = e.state;
    };

    window.addEventListener("beforeunload", function(e){

        e.returnValue = "exit?";

        return "exit?";

    }, false);

    var oContaint = document.getElementById("containt");
    var oB1 = document.getElementById("b1");
    var oB2 = document.getElementById("b2");


    oContaint.onmouseover = function(){
        console.log(1);
    };

    oContaint.onmouseout = function(){
        console.log(2);
    };*/



};