console.log("加载成功");
//1、配置要引入的.js模块的路径
require.config({
    paths: {
        "jquery": "jquery-1.11.3",
        "parts": "parts",
    },
})
//<1>使用简单 <2>模块间的关系
//2、引入模块，调用实现对应的功能
require(["parts"], function(parts){
    parts.Buttonevents();//首页轮播图

})