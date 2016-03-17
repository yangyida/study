var extend = function(func){

    var A = function(){};

    A.prototype = func.prototype;

    return new A();

};

var PopupExtend = function(id, c){

    Popup.call(this, id, c);

};

PopupExtend.prototype = extend(Popup);

PopupExtend.prototype.constructor = PopupExtend;

