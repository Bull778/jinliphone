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
//放大镜
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
oSmall1.onmouseover = function(ev){
    var e = ev || window.event;
    var target = e.target || window.event.srcElement;
    if(target.tagName.toLowerCase() == "img"){
        for(var i = 0; i < oSmallimg1.length; i++){
            oSmallimg1[i].parentNode.className = '';
        }
        target.parentNode.className = "curr";
        console.log(target.src)
        oBigImg1.src = target.src;
    }
}
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