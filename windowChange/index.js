window.onload = function(){

    var oDiv = document.getElementById("containt");

    a = new Yd.ChangeWindow(
        {
            containt : oDiv,
            direction : 1,
            calBack : function(o){
                console.log(o.currentItem);
            },

        }
    );

    a.init();
};