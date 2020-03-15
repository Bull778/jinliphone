// 验证码
var codebox = document.getElementById('codebox');
var change = document.getElementById('change');
var codeinput = document.getElementById("code");
var cor = document.getElementById("correct");
var del = document.getElementById("delete");
codebox.innerText = vCode();
change.onclick = function(){
    codebox.innerText = vCode();
}
//判断验证码是否正确
codeinput.onkeyup = function(){
    txt = codeinput.value;
    if(txt == codebox.innerText && txt.length == 4){
        cor.style.display = "block"
    }else if(txt.length >4 || txt.length < 4){
        del.style.display = "block"
        cor.style.display = "none"
    }
    console.log(txt.length)
}
// 随机获取4位数
function vCode(){
    var str = "";
    function randomInt(min,max){
        return num = Math.random()*(max-min)+min;
    }
    for(i=0;i<4;i++){
            var a = Math.ceil(randomInt(0,9));
            str += a;
        }
    return (str);
}
//手机号和验证码正确就显示设置密码页面
var sTep1 = document.getElementById("step1")
var sTep2 = document.getElementById("step2")
var pHone = document.getElementById("phonename");
sTep1.onclick = function(){
    var codeinput = document.getElementById("code");
    var vAl = document.querySelector(".validation");
    var codebox = document.getElementById('codebox');
    var lis2 = document.querySelector(".li2")
    var lis3 = document.querySelector(".li3")
    var vAl = document.querySelector(".validation");
    txt = codeinput.value;
    tet = pHone.value;
    if(txt == codebox.innerText && tet.length == 11){
        vAl.style.display = "none"
        lis2.style.backgroundColor = "#000"
        lis3.style.backgroundColor = "#ff9000"
    }
}
// alert(pHone.value)
//密码判断
var pAs1 = document.getElementById("password");
var pAs2 = document.getElementById("password1");
var passtxt = document.getElementById("passtxt");
var passtxt1 = document.getElementById("passtxt1");
pAs1.onkeyup = function(){
    var txt = pAs1.value;
    if(/^[A-Za-z0-9]+$/.test(txt) && txt.length > 8 && txt.length < 16){
        passtxt.innerText = "密码正确";
        passtxt.style.color = "green";
    }else {
        passtxt.innerText = "! 密码长度应为6~16个字符";
        passtxt.style.color = "red";
    }
}
pAs2.onkeyup = function(){
    var txt = pAs1.value;
    if(txt == pAs2.value){
        passtxt1.innerText = "密码正确";
        passtxt1.style.color = "green";
    }else {
        passtxt1.innerText = "密码必须一直";
        passtxt1.style.color = "red";
    }
}
sTep2.onclick = function(){
    var lis4 = document.querySelector(".li4")
    var lis5 = document.querySelector(".li5")
    var vAl1 = document.querySelector(".validation1")
    var vAl = document.querySelector(".validation")
    var txt = pAs1.value;
    var tet = pAs2.value;
    if(txt == tet){
        lis4.style.backgroundColor = "#000"
        lis5.style.backgroundColor = "#ff9000"
        vAl1.style.display = 'none'
        vAl.style.display = 'none'
    }
}
//提交数据
var bTn = document.querySelector(".btn1")
bTn.onclick = function(){
    var pAs1 = document.getElementById("password");
    var pAs2 = document.getElementById("password1");
    var pHone = document.getElementById("phonename");
    var vAl = document.querySelector(".validation");
    var vAl2 = document.querySelector(".validation2")
    var vAl1 = document.querySelector(".validation1")
    
    txt = pHone.value;
    $ajax({
        type: "post",
        url: "./php/registered.php",
        data: {
            username: txt,
            password: pAs1.value,
            repassword: pAs2.value,
            createTime: (new Date()).getTime()
        },
        success: function(result){
            var obj = JSON.parse(result);
            if(obj.code < 7 ){
                alert(obj.message)
                vAl.style.display = 'block'
            }else if( obj.code == 7){
                alert(obj.message)
                vAl2.style.display = 'block'
                vAl.style.display = 'none'
                vAl1.style.display = 'none'
                setTimeout(function(){
                    location.assign("login.html");
                }, 2000);
            }
        },
        error: function(msg){
            alert(msg);
        }
    })
}
