window.onload = function(){

    var t = new MyTag(
        document.getElementsByTagName("input"),
        document.getElementsByTagName("div"),
        0,
        function(item){
            console.log(item + 1);
        }
    );

    var tt = new MyTag(
        document.getElementsByTagName("button"),
        document.getElementsByTagName("p"),
        0,
        function(item){
            console.log(item + 1);
        }
    );
};