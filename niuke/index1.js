var arr = [
    "a",
    "b",
    "c",
    "d",
    "e"
];

var arr2 = arr.splice(1,2, "newvalue");

console.log(arr);

/**
 * 删除数组中指定项
 * @param arr array
 * @param item number
 * return 返回被删除项
 */
function deleteTargetItem(arr, item){

    if(item > -1 && item < arr.length){

        return arr.splice(item, 1);

    }else{
        null;
    }
};