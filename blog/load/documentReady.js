var load = function(element, calFunc){

    element.onload = function(){
        calFunc.call(this);
        element.onload = null;
    };

};