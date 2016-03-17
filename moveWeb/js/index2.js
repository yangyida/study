domUtil.domReady(function(){

    imgPreventDefault();

    initWelcome();

    initSwiper();
});

/**
 * 阻止图片的系统默认事件
 */
function imgPreventDefault(){
    var imgList = document.querySelectorAll("img");

    var listLength = imgList.length;

    var imgPreventDefaultFunc = function(e){
        e.preventDefault();
    }

    for(var i = listLength - 1; i > -1; i--){

        domUtil.byEvent(imgList[i], "touchstart", imgPreventDefaultFunc);

    }
}

function initWelcome(){

    var welcomeEl = domUtil.getId("welcome");

    domUtil.byEvent(welcomeEl, "webkitTransitionEnd", function(){
        domUtil.removeClass(welcomeEl, "pageHide");
        domUtil.removeClass(welcomeEl, "pageShow");
    });

    var startTime = new Date().getTime();

    var timer = setInterval(function(){
        if(new Date().getTime() - startTime > 2000){
            domUtil.addClass(welcomeEl, "pageHide");
            clearInterval(timer);
        }
    }, 800);
}

function initSwiper(){
    var swiperPicsEl = domUtil.getId("swiperPics");
    var swiperPicsElWidth = document.documentElement.clientWidth * 5;
    var changeX = 0;
    var originalX = 0;
    var startX = 0;

    var olList = domUtil.getId("swiperPoint").getElementsByTagName("ol");
    var swiperTipEL = domUtil.getId("swiperTip");

    domUtil.byEvent(swiperPicsEl, "touchstart", function(e){
        startX = e.touches[0].clientX;
    });

    domUtil.byEvent(swiperPicsEl, "touchmove", function(e){
        var currentX = e.touches[0].clientX;
        changeX = ((currentX - startX) / swiperPicsElWidth * 100);
        domUtil.setCSS(swiperPicsEl, "transform=translate3d(" + (changeX + originalX) + "%,0,0)");
    });

    domUtil.byEvent(swiperPicsEl, "touchend", function(){
        startX = 0;
        originalX += changeX;
        console.log(originalX);

        //已经到了最左边
        if(originalX > 0){
            originalX = 0;
            domUtil.setCSS(swiperPicsEl,{
                transition : "transform 100ms ease-in",
                transform : "translate3d(0%,0,0)"
            });

            var t = new Date().getTime();

            var timer = setInterval(function(){

                if(new Date().getTime() - t > 180){
                    domUtil.setCSS(swiperPicsEl, {
                        transition : ""
                    });
                    clearInterval(timer);
                }

            }, 30);
        }
        //到了最右边
        else if(originalX > -100 && originalX < -80){
            originalX = -80;
            domUtil.setCSS(swiperPicsEl,{
                transition : "transform 100ms ease-in",
                transform : "translate3d(-80%,0,0)"
            });

            var t = new Date().getTime();

            var timer = setInterval(function(){

                if(new Date().getTime() - t > 180){
                    domUtil.setCSS(swiperPicsEl, {
                        transition : ""
                    });
                    clearInterval(timer);
                }

            }, 30);
        }
        else{
            originalX = Math.round(originalX / 20) * 20;
            domUtil.setCSS(swiperPicsEl,{
                transition : "transform 100ms ease-in",
                transform : "translate3d(" + originalX + "%,0,0)"
            });

            var t = new Date().getTime();

            var timer = setInterval(function(){

                if(new Date().getTime() - t > 180){
                    domUtil.setCSS(swiperPicsEl, {
                        transition : ""
                    });
                    clearInterval(timer);
                }

            }, 30);
        }

    })
}