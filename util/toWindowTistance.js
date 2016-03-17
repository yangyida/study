/**
 * 到窗口边界的距离
 * @param element
 * @param type ("left", "top")
 * @returns {number}
 */
var toWindowTistance = function (element, type){

    var count = 0;

    var parent = element;

    while(parent){
        console.log(parent);
        switch(type){
            case "left":
                count += parent.offsetLeft;

                if(parent != element && parent != document.body)
                    count += parseInt(getComputedStyle(parent).borderLeft);

                break;
            case "top":
                count += parent.offsetTop;

                if(parent != element && parent != document.body)
                    count += parseInt(getComputedStyle(parent).borderTop);

                break;
        };

        parent = parent.offsetParent;

    }

    if(type == "left"){
        count += (parseInt(getComputedStyle(document.documentElement).marginLeft) + parseInt(getComputedStyle(document.documentElement).paddingLeft) + parseInt(getComputedStyle(document.documentElement).borderLeft));
    }
    else if(type == "top"){
        count += (parseInt(getComputedStyle(document.documentElement).marginTop) + parseInt(getComputedStyle(document.documentElement).paddingTop) + parseInt(getComputedStyle(document.documentElement).borderTop));
    }

    return count;
};