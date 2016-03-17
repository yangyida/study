/**
 * 异步提交form表单
 * @params formName string 表单名
 * @params src string 提交路径
 * @params object opt附加参数 / function calFunc回调函数
 */
var asyncForm = function(formName, src, c, d){

    var opt = null;
    var calFunc = null;

    if(arguments.length == 3){
        if(typeof c == "object"){
            opt = c;
        }else{
            calFunc = c;
        }
    }else if(arguments.length == 4){
        opt = c;
        calFunc = d;
    }

    var oForm = document.forms.namedItem(formName);

    var formData = new FormData(oForm);

    if(opt){
        for(var key in opt){
            formData.append(key, opt[key]);
        }
    }

    jQuery.ajax({
        src : src,
        type : oForm.method,
        data : formData,
        processData : false,
        contentType : false,
        success : calFunc || function(){},
        error : calFunc || function(){}
    });
};