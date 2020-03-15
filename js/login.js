define(["ajax"], function($){
    function Submituser(){
        var pAs1 = document.getElementById("password");
        var pHone = document.getElementById("phonename");
        var oBtn = document.getElementById("BTN");
        console.log(oBtn)
        oBtn.onclick = function(){
            console.log(oBtn)
            //通过ajax提交要登陆的信息
            $ajax({
                type: "post",
                url: "./php/login.php",
                data: {
                    username: pHone.value,
                    password: pAs1.value
                },
                success: function(result){
                    var obj = JSON.parse(result)
                    if(obj.code != 5){
                        alert(obj.message)
                    }else{
                        alert(obj.message)
                        setTimeout(function(){
                            location.assign("index.html");
                        }, 2000);
                    }
                },
                error: function(msg){
                    alert(msg);
                }
            })
        }
    }
    return {
        Submituser: Submituser
    }
})