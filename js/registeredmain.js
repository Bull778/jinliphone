console.log("加载成功");
//1、配置要引入的.js模块的路径
require.config({
    paths: {
        "ajax": "ajax",
        "registered": "registered"
    },
    shim: {
        //设置依赖关系
        "registered": ["ajax"]
    }
})
//<1>使用简单 <2>模块间的关系
//2、引入模块，调用实现对应的功能
require(["registered"], function(registered){
    registered.Codenum();//验证码
    registered.Nextstep1();//验证手机，验证码点击进行下一步
    registered.Passwordjudgment();//验证密码
    registered.Nextstep2();//验证密码点击进行下一步
    registered.Submitdata();//提交数据到后台
})