define(["jquery"], function($){
    function sHowP(){
        //滑过显示分享
        var showbtn = document.querySelector(".bds_more")
        var showbox = document.querySelector(".showbox")
        showbtn.onmouseover = function(){
            showbox.style.display = "block"
        }
        showbtn.onmouseout = function(){
            setTimeout(function(){
                showbox.style.display = "none"
            }, 500);
        }
    }
    function TabControl(){
        //选项卡操作
        var tabul = document.querySelector(".tab_options");
        var lis = tabul.querySelectorAll("li");
        var tabbox = document.querySelector(".vi_tab_con");
        var oDiv = tabbox.querySelectorAll("div");
        // console.log(lis);
        // console.log(oDiv);
        for(var i = 0;i < lis.length;i++){
            lis[i].index = i;
            lis[i].onmouseover = function(){
                // console.log(this);
                for(j= 0;j<lis.length;j++){
                    lis[j].className = '';
                    oDiv[j].style.display = 'none';
                }
                this.className = 'curr';
                oDiv[this.index].style.display = 'block';
            }
        }
    }
    function oVerimg(){
        //划入切换图片
        var oSmall = document.querySelector(".item");
        var oSmallimg = oSmall.querySelectorAll("img");
        var oBig = document.querySelector(".imgbig");
        var oBigImg = oBig.getElementsByTagName("img")[0];
        oSmall.onmouseover = function(ev){
            var e = ev || window.event;
            var target = e.target || window.event.srcElement;
            if(target.tagName.toLowerCase() == "img"){
                for(var i = 0; i < oSmallimg.length; i++){
                    oSmallimg[i].parentNode.className = '';
                }
                target.parentNode.className = "curr";
                console.log(target.src)
                oBigImg.src = target.src;
            }
        }
        var oSmall1 = document.querySelector(".item1");
        var oSmallimg1 = oSmall1.querySelectorAll("img");
        var oBig1 = document.querySelector(".imgbig1");
        var oBigImg1 = oBig1.getElementsByTagName("img")[0];
        var oBigbox = document.getElementById("big");
        var oBigboxImg = oBigbox.getElementsByTagName("img")[0];
        oSmall1.onmouseover = function(ev){
            var e = ev || window.event;
            var target = e.target || window.event.srcElement;
            if(target.tagName.toLowerCase() == "img"){
                for(var i = 0; i < oSmallimg1.length; i++){
                    oSmallimg1[i].parentNode.className = '';
                }
                target.parentNode.className = "curr";
                // console.log(target.src)
                oBigImg1.src = target.src;
                oBigboxImg.src = target.src;
            }
        }
    }
    function cLickimg(){
        //点击切换图片
        var bTnimg1 = document.getElementById("btnimg1")
        var bTnimg2 = document.getElementById("btnimg2")
        var sH1 = document.querySelector(".sh1");
        var sH2 = document.querySelector(".sh2");
        bTnimg1.onclick = function(){
            sH2.style.display = "block";
            sH1.style.display = "none";
            bTnimg1.className = 'curr'
            bTnimg2.className = ''
        }
        bTnimg2.onclick = function(){
            sH1.style.display = "block";
            sH2.style.display = "none";
            bTnimg2.className = 'curr'
            bTnimg1.className = ''
        }
    }
    function BIGimgbox(){
        //点击弹出大图
        var sWbig = document.getElementById("showOriginalImg")
        var Imagearea = document.getElementById("originalImgCon")
        var Fade = document.getElementById("fade")
        var sHut = Imagearea.querySelector(".pop_shut");
        sHut.onclick = function(){
            Imagearea.style.display = "none"
            Fade.style.display = "none"
        }
        sWbig.onclick = function(){
            Imagearea.style.display = "block"
            Fade.style.display = "block"
        }
    }
    function Tabbigimg(){
        //弹出大图的点击切换图片
        var albumBigImg = document.getElementById("albumBigImg")
        var albumList = document.getElementById("albumList")
        var albumimg = albumList.querySelectorAll("img");
        albumList.onclick = function(ev){
            var e = ev || window.event;
            var target = e.target || window.event.srcElement;
            if(target.tagName.toLowerCase() == "img"){
                for(var i = 0; i < albumimg.length; i++){
                    albumimg[i].parentNode.className = 'products_pcsitem';
                }
                target.parentNode.className = 'cur';
                albumBigImg.src = target.src;
            }
        }
        var btnBigImgLeft = document.getElementById("btnBigImgLeft")
        var btnBigImgRight = document.getElementById("btnBigImgRight")
        var albumBigImg = document.getElementById("albumBigImg")
        var albumList = document.getElementById("albumList")
        var albumimg = albumList.querySelectorAll("img");
        var albumAs= albumList.querySelectorAll("a");
        // var index = albumimg.length;
        var b = 0;
        // alert(index)
        btnBigImgLeft.onclick = function(){
            b--;
            console.log(b);
            for(var i = 0; i < albumimg.length; i++){
                albumAs[i].className = 'products_pcsitem';
            }
            if(b > 0){
                btnBigImgLeft.style.display = "blcok"
            }else{
                btnBigImgLeft.style.display = "none"
            }
            if(b < 4){
                btnBigImgRight.style.display = "block"
            }
            albumAs[b].className = 'cur';
            albumBigImg.src = albumimg[b].src;
        }
        btnBigImgRight.onclick = function(){
            b++;
            console.log(b);
            for(var i = 0; i < albumimg.length; i++){
                albumAs[i].className = 'products_pcsitem';
            }
            if(b < 4){
                btnBigImgRight.style.display = "block"
            }else{
                btnBigImgRight.style.display = "none"
            }
            albumAs[b].className = 'cur';
            albumBigImg.src = albumimg[b].src;
        }
    }
    function mAgnifying(){
        //放大镜效果
        var oBigbox = document.getElementById("big");
        var oBigboxImg = oBigbox.getElementsByTagName("img")[0];
        var oSma1= document.querySelector(".imgbig1");
        var oMark = document.getElementById("mark");
        var showimg= document.querySelector(".showimg");
        var S1= document.querySelector(".s1");
        var Wrapperbox = document.getElementById("wrapperbox");
        oSma1.onmouseenter = function(){
            oMark.style.display = 'block';
            oBigbox.style.display = 'block';
        }
        oSma1.onmouseleave = function(){
            oMark.style.display = 'none';
            oBigbox.style.display = 'none';
        }
        oSma1.onmousemove = function(ev){
            var e = ev || window.event;
            
            var l = e.clientX - oSma1.offsetLeft - showimg.offsetLeft - Wrapperbox.offsetLeft - 140;
            if(l <= 0){
                l = 0;
            }
            if(l >= 180){
                l = 180;
            }
            var t = e.clientY - oSma1.offsetTop - showimg.offsetTop - Wrapperbox.offsetTop  - S1.offsetTop - 50;
            if(t <= 0){
                t = 0;
            }
            if(t >= 190){
                t = 190;
            }
            console.log(e.clientX,e.clientY,oSma1.offsetTop,t);
            oMark.style.left = l + 'px';
            oMark.style.top = t + 'px';
            //放大的图片要反向移动对应倍数的距离
            oBigboxImg.style.left = -2 * l + 'px';
            oBigboxImg.style.top = -2 * t + 'px';
        }
    }
    return{
        sHowP:sHowP,
        TabControl:TabControl,
        oVerimg:oVerimg,
        cLickimg:cLickimg,
        BIGimgbox:BIGimgbox,
        Tabbigimg:Tabbigimg,
        mAgnifying:mAgnifying
    }
})