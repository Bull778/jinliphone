define(["jquery"], function($){
    function Buttonevents(){
        var Select = document.getElementById("select");
        var cHek = document.querySelector(".checkbox")
        var cHeki = document.querySelectorAll(".ckbx")
        // console.log(cHeki.length)
        for(var i = 0; i < cHeki.length; i++){
            cHeki[i].index = i; //给每一个按钮添加一个自定义属性，存储当前按钮的下标
            cHeki[i].onclick = function(){
                //先取消原来所有按钮和div的样式
                for(var j = 0; j < cHeki.length; j++){
                    console.log(cHeki.length)
                    cHeki[j].className = "ckbx"
                }
                //将当前点击的btn被选中
                cHeki[this.index].className = "active"
            }
        }
    }
    return{
        Buttonevents:Buttonevents
    }
})