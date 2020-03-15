console.log("加载成功");
//1、配置要引入的.js模块的路径
require.config({
    paths: {
        "ajax": "ajax",
        "login": "login",
    },
    shim: {
        //设置依赖关系
        "login": ["ajax"],
    }
})
//<1>使用简单 <2>模块间的关系
//2、引入模块，调用实现对应的功能
require(["login"], function(login){
    login.Submituser();//提交用户信息
})