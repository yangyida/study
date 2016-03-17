window.onload = function(){

    //indexOf
    //substring
    //charAt
    //split

    var a = "1asd1df000dfaaa2a3333a010";
    console.log(findNumber(a, true));
};

/**
 * 提取字符串中的数字
 * @param string str
 * @param bool isSpand 是否合并相邻数字
 * return Array[number]
 */
function findNumber(str, isSpand){

    var numberArray = [];
    var ch = "";

    var spandNumber = "";

    for(var i = 0; i < str.length; i++){
        ch = str.charAt(i);
        if(isNumberStr(ch)){
            if(!isSpand){
                numberArray.push(ch);
            }else{
                spandNumber += ch;
            }
        }else{
            if(spandNumber){
                numberArray.push(spandNumber);
                spandNumber = "";
            }
        }
    };

    if(spandNumber){
        numberArray.push(spandNumber);
        spandNumber = "";
    };

    return numberArray;
};

/**
 * 判断字符串是否为纯数字
 * @param string str
 * return boolean
 */
function isNumberStr(str){

    if(str == ""){
        return false;
    }

    var ch = "";

    for(var i = 0; i < str.length; i++){
        ch = str.charAt(i);
        if(ch < "0" || ch > "9"){
            return false;
        }
    };

    return true;
};