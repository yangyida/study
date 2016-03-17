window.onload = function(){

    document.documentElement.clientHeight;

    var opt = {
        currentPage : 0,
        count : 10
    };

    function loadImage(opt){

        $.ajax(
            {
                success : function(json){
                    putImg();
                }
            }
        );

    };

    function putImg(){

    };

    window.scroll = function(){

    };

};
