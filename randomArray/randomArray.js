/**
 * 获得随机数组
 * @param iAll
 * @param iNow
 * @returns {Array}
 */
function randomArr(iAll,iNow){
    var arr = [];
    var newArr = [];
    for(var i=0;i<iAll;i++){
        arr.push(i);
    }

    for(var i=0;i<iNow;i++){
        var a = arr.splice( Math.floor(Math.random()*arr.length) ,1);
        console.log(a);
        newArr.push(a);
    }
    return newArr;
}