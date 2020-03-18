console.log("加载成功");
//1、配置要引入的.js模块的路径
require.config({
    paths: {
        "jquery": "jquery-1.11.3",
        "jquery-cookie": "jquery.cookie",
        "particulars": "particulars",
    },
})
//<1>使用简单 <2>模块间的关系
//2、引入模块，调用实现对应的功能
require(["particulars"], function(particulars){
    particulars.sHowP();//滑过显示分享
    particulars.TabControl();//选项卡操作
    particulars.oVerimg();//划入切换图片
    particulars.cLickimg();//点击切换图片
    particulars.BIGimgbox();//点击弹出大图
    particulars.Tabbigimg();//弹出大图的点击切换图片
    particulars.mAgnifying();//放大镜效果
})