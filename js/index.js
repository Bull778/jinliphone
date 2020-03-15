define(["jquery"], function($){
    function bannerTab(){
        var Img = $(".bannerimg").find("li");
        var btn = $(".bannerbtn").find("ul li");
        var timer = null;
        var iNow = 0; //当前要显示的图片的下标
        btn.click(function(){
            iNow = $(this).index();
            tab();
        })

        timer = setInterval(function(){
            iNow++;
            tab();
        }, 3000);

        function tab(){
        if(iNow == 6){
            iNow = 0;
        }
        if(iNow == -1){
            iNow = 5;
        }
        btn.removeClass('active').eq(iNow).addClass('active');
        Img.hide().css("opacity",0.3).eq(iNow).show().animate({opacity:1},800)
        }

        $("#banner").mouseenter(function(){
            clearInterval(timer);
        }).mouseleave(function(){
        timer = setInterval(function(){
            iNow++;
            tab();
        }, 3000);
        })
        $(".arrows").find("img").click(function(){
            if(this.className == 'arrowleft'){
                iNow--;
                tab();
            }else{
                iNow++;
                tab();
            }
            return false;
        })
    }
    return{
        bannerTab:bannerTab
    }
})
