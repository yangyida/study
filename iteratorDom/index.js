window.onload = function(){

    var oBody = document.getElementsByTagName("body")[0];

    /*var iterator = iteratorDom(oBody, null);

    var node = iterator.nextNode();

    while(node){
        console.log(node);
        node = iterator.nextNode();
    }*/

    var walker = walkerDom(oBody, null);

    walker.currentNode = document.getElementById("p3");

    var node = walker.nextNode();

    while(node){
        console.log(node);
        node = walker.nextNode();
    };
};

/**
 *遍历dom节点
 *
 * @param root 根节点
 * @param filterFunc 校验函数
 * @returns {NodeIterator}
 */
var iteratorDom = function(root, filterFunc){

    var iterator = document.createNodeIterator(
        root,
        NodeFilter.SHOW_ELEMENT,
        filterFunc,
        false);

    return iterator;
};

/**
 *遍历dom节点
 *
 * @param root 根节点
 * @param filterFunc 校验函数
 * @returns {TreeWalker}
 */
var walkerDom = function(root, filterFunc){

    var iterator = document.createTreeWalker(
        root,
        NodeFilter.SHOW_ELEMENT,
        filterFunc,
        false);

    return iterator;
};