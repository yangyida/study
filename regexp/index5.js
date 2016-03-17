window.onload = function(){

    var str = "sdfidvjopwfjopwfjasdasdasdaopsafsdopfjopsujpojopwww";

    var o = getMaxChar(str);

    console.log("--------------------");

    console.log(o);
};

/**
 * 获得高频字符
 * @param str
 */
function getMaxChar(str){

    var arr = str.split("").sort();
    str = arr.join("");

    var reg = /(.)\1*/g;

    var value = "";
    var length = -1;

    str.replace(reg, function(a, b){

        if(a.length >= length){

            if(a.length > length){
                length = a.length;
                value = b;
            }else{
                value += b;
            }


        }
    });

    return {
        value : value.split(""),
        length : length
    };
};