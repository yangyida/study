window.onload = function(){

    //console.log(isQqNumber("1121111"));

    var str = "  sdsf1212sd    ";

    console.log(trim(str));
    console.log(str);
};

function isQqNumber(str){

    return /^[1-9]\d{4,11}$/ig.test(str);
};

/**
 * 去掉前后空格
 * @param str
 * return string
 */
function trim(str){

    return str.replace(/^\s+|\s$/,"");
};