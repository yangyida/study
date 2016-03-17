/**
 *
 * @param TagsArr 选项卡node数组
 * @param ContaintsArr 区域数组
 * @param initShowItem 初始化时显示第几个卡
 * @constructor
 */
var MyTag = function(tagsArr, containtsArr, initShowItem, calBack){

    //若选项卡数量与区域数量不等则抛出异常;
    if(tagsArr.length != containtsArr.length){calBack
        throw new Error("选项卡与区域不对应");
    }

    this.tagsArr = tagsArr;
    this.containtsArr = containtsArr;
    this.initShowItem = initShowItem;
    this.calBack = calBack;

    this._init();

};

MyTag.prototype = {
    constructor : MyTag,

    _init : function(){
        for(var i = 0; i < this.containtsArr.length; i++){

            if(i != this.initShowItem){
                this._toShowContaint(this.containtsArr[i], false);
            }
            else{
                this._toShowContaint(this.containtsArr[i], true);
            }

        };

        for(var i = 0; i < this.tagsArr.length; i++){

            this.tagsArr[i].tagItem = i;

            this.tagsArr[i].tagO = this;

            this.tagsArr[i].onclick = this._tagClick;

        }
    },

    _tagClick : function(){

        this.tagO._hideAll();

        this.tagO._toShowContaint(this.tagO.containtsArr[this.tagItem], true);

        this.tagO.calBack(this.tagItem);
    },

    _hideAll : function(){

        for(var i = 0; i < this.containtsArr.length; i++){
            this._toShowContaint(this.containtsArr[i], false);
        }

    },

    _toShowContaint : function(o, flag){
        if(flag){
            o.style.display = "";
            o.style.visibility = "visible";
        }else{
            o.style.display = "none";
            o.style.visibility = "hidden";
        }
    }

};