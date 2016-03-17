/**
 * 1.去掉大写字母 1
 * 2.去掉数字  2
 * 3.匹配成对标签 3,4
 * 4.匹配13-99之间的年龄 6
 * 5.转驼峰匹配 (大驼峰转小驼峰) 7
 * 6.匹配电话号码 (11位手机号) 8
 * 7.验证密码强度
 * 8.匹配用户名和限制位数
 */
var re = {
    1 : /[A-Z]/g,
    2 : /\d/g,
    3 : /(?:<([a-z][a-z1-9]*)>).*?(?:<\/\1>)/ig,
    4 : /(?:<([a-z][a-z1-9]*)>)(?:.(?!<\1>))*(?:<\/\1>)/ig,
    5 : /(aaa)([^a])/ig,
    6 : /(1[3-9])|([2-9][0-9])/g,
    7 : /\w/,
    8 : /^[1]\d{10}$/ig
};

(function(){

    /*var str = "ABCDEFG";
    console.log(str.replace(re[1], ""));*/

    /*var str = "1c23  5a 1qa5";
    console.log(str.replace(re[2], ""));*/

    /*var str = "<A>12121212</a><div>12313</div><div>12121212</div><div>aaa</div>";
    console.log(str.match(re[3]));*/

    /*var str = "<A>12121212</a><div>12313<div></div><div>12121212</div><div>aaa</div>";
    console.log(str.match(re[4]));*/

    /*var str = "aaaaaaaaa";
    console.log(str.match(re[5]));*/

    /*var str = "1,2,3,20,90,102,11,34,76,54,0,3";
    console.log(str.match(re[6]));*/

    /*var str = "AaBbCc";
    var newStr = str.replace(re[7], function(a){

        var n = "A".charCodeAt(0);
        var m = "Z".charCodeAt(0);

        var aC = a.charCodeAt(0);

        if(aC >= n && aC <= m){

            return String.fromCharCode(aC + ("a".charCodeAt(0) - "A".charCodeAt(0)));
        }else{
            return a;
        }
    });

    console.log(newStr);*/


})();