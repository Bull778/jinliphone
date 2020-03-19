
//下载数据
sc_num();//计算一个购物车中商品数量
sc_msg();//加载一下购物车的数据
$.ajax({
    type:"get",
    url: "./data/shopping.json",
    success:function(arr){
        //循环创建节点
        for(var i = 0;i < arr.length;i++){
            //node是创建的节点
            var node = $(
                `<li class="list_pro">
                    <a href="#" class="img"><img src="${arr[i].img}"></a>
                    <a class="goods_title" href="#">${arr[i].title}</a>
                    <a href="#" class="promot_st">${arr[i].title1}</a>
                    <h5 class="ui_pprice">
                        ${arr[i].price}￥
                    </h5>
                    <a href="#" class="probuy" id ="${arr[i].id}">加入购物车<i class="i_con_arort"></i></a>
                </li>`);
            node.appendTo($(".pro_list"));
        }
    },
    error:function(msg){
        console.log(msg)
    }
})
//给页面上的购物车按钮添加点击事件
//委托ul执行
$(".pro_list").on("click",".probuy",function(){
    var id = this.id;
    // alert(id)
    //1、之前是否添加过该商品
    var first = $.cookie("goods") == null ? true : false;
    if(first){
        //是第一次添加，直接存储
        var arr = [{id:id,num:1}]
        $.cookie("goods",JSON.stringify(arr),{expires:5})
    }else{
        //2、判断之前是否添加过
        var cookieStr = $.cookie("goods");
        var cookieArr = JSON.parse(cookieStr);
        var same = false;
        for(var i = 0;i <cookieArr.length;i++){
            if(cookieArr[i].id == id){
                cookieArr[i].num++;
                same = true;
                break;
            }
        }
        //如果没有添加过
        if(!same){
            var obj = {id:id,num:1}
            cookieArr.push(obj);//添加数据
        }
        //储存cookie
        $.cookie("goods",JSON.stringify(cookieArr),{expires:5})
    }
    sc_num();
    sc_msg();
    setTimeout(function(){
        location.assign("shopping.html");
    }, 1);
})

//给购物车中删除的按钮添加点击事件
$("#buybox").on("click",".closek",function(){
    //获取当前商品的id
    var id =$(this).closest("li").remove().attr("id");
    //删除该商品 既要去删除节点，还要去删除cookie中的数据
    var cookieStr = $.cookie("goods");
    var cookieArr = JSON.parse(cookieStr);
    var index = cookieArr.findIndex(item => item.id == id);
    //通过下标删除元素
    cookieArr.splice(index,1)
    //判断数组是否是空数组
    cookieArr.length == 0 ? $.cookie("goods",null) : $.cookie("goods",JSON.stringify(cookieArr),{expires:5})
    //重新计算商品的数量
    sc_num();
    zong()
})

$("#buybox ul").on("click", ".add button", function(){
    //获取商品的id
    var id = $(this).closest("li").attr("id");
    var cookieStr = $.cookie("goods");
    var cookieArr = JSON.parse(cookieStr);
    //把当前要去操作的数据拿到
    for(var i = 0; i < cookieArr.length; i++){
        if(cookieArr[i].id == id){
            var item = cookieArr[i];
            break;
        }
    }
    //判断是+还是-
    if(this.innerHTML == "+"){
        item.num++;
        // $(".ui_pprice").html(`${arr[i].price}*${item.num}`);
       
    }else{
        item.num == 1 ? alert("该商品数量为1，不能减少") : item.num--;
    }
    //要把更改后的数量在页面上显示
    $(this).siblings("span").html(`${item.num}`);
    //将数据存储回去
    $.cookie("goods", JSON.stringify(cookieArr), {
        expires: 7
    })
    //重新计算商品的数量
    sc_num();
    setTimeout(function(){
        location.assign("shopping.html");
    }, 1);
})

function sc_msg(){
    $("#buybox li").empty();//清除所有子节点
    $.ajax({
        type:"get",
        url:"./data/shopping.json",
        success:function(arr){
            //获取cookie中的数据
            var cookieStr = $.cookie("goods");
            if(cookieStr){
                var cookieArr = JSON.parse(cookieStr);
                var newArr = []
                for(i=0;i<arr.length;i++){
                    for(var j = 0; j < cookieArr.length; j++){
                        if(arr[i].id == cookieArr[j].id){
                            arr[i].num = cookieArr[j].num;
                            newArr.push(arr[i]);
                        }  
                    }
                }
                for(var i = 0; i < newArr.length; i++){
                    //创建节点，添加到购物车里
                    var node = $(`<li class="proche" id="${newArr[i].id}">
                    <input type="checkbox">
                    <span><img src="${newArr[i].img}" width="80" height="80"></span>
                    <span>${newArr[i].title}</span>
                    <span>￥${newArr[i].price}</span>
                    <div class="add">
                        <button id="subtractbtn">-</button>
                        <span>${newArr[i].num}</span>
                        <button id="addbtn">+</button>
                    </div>
                    <span class = "tatab">${newArr[i].price*newArr[i].num}￥</span>
                    <button id="close" class="closek">x</button>
                </li>`);
                    node.appendTo($("#buybox ul"));
                }
            }
        },
        error:function(msg){
            console.log(msg);
        }
        
    })
}

function sc_num(){
    var cookieStr = $.cookie("goods");
    if(cookieStr){
        var sum = 0;
        var cookieArr = JSON.parse(cookieStr);
        for(var i = 0; i < cookieArr.length; i++){
            sum += cookieArr[i].num;
        }
        $("#buybox .num").html(sum);
    }else{
        $("#buybox .num").html(0);
    }
}
function zong(){
    $.ajax({
        type:"get",
        url: "./data/shopping.json",
        success:function(arr){
            var cookieStr = $.cookie("goods");
            if(cookieStr){
                var cookieArr = JSON.parse(cookieStr);
                var newArr = []
                for(i=0;i<arr.length;i++){
                    for(var j = 0; j < cookieArr.length; j++){
                        if(arr[i].id == cookieArr[j].id){
                            arr[i].num = cookieArr[j].num;
                            newArr.push(arr[i]);
                        }  
                    }
                }
                var a = 0
                for(var i = 0; i < newArr.length; i++){
                    //创建节点，添加到结算里
                    a += (newArr[i].price*newArr[i].num);
                    console.log(a)
                    var node = $(`<p class="account">
                    <span>合计<i class="sum">${a}</i></span>
                    <button>结算</button>
                </p>`); 
                }
                node.appendTo($("#buybox"));
            }
        },
        error:function(msg){
            console.log(msg);
        }
    })
}
zong()