<?php
    header('content-type:text/html;charset="utf-8"');

    //定义一个统一的返回的格式
    $responseData = array("code" => 0, "message" => "");
    @$username = $_POST['username'];
    @$password = $_POST['password'];
    @$createtime = $_POST['createTime'];

    //对上述的数据做一个简单的验证，判断数据是否存在，判断的结果反馈给前台
    //状态码  描述信息
    if(!$username){
        $responseData["code"] = 1;
        $responseData["message"] = "用户名不能为空";

        echo json_encode($responseData);
        exit;
    }
    if(!$password){
        $responseData["code"] = 2;
        $responseData["message"] = "密码不能为空";

        echo json_encode($responseData);
        exit;
    }

    //1、链接数据库
    $link = mysql_connect("localhost", "root", "123456");
    //2、判断数据库是否链接成功
    if(!$link){
        $responseData["code"] = 4;
        $responseData["message"] = "服务器忙";

        echo json_encode($responseData);
        exit;
    }
    //3、设置访问字符集
    mysql_set_charset("utf8");

    //4、选择数据库
    mysql_select_db("yy");

    //5、准备sql语句，判断数据库是否有同名的数据
    $sql1 = "SELECT * FROM denglu WHERE username='{$username}'";

    //6、发送sql语句
    $res = mysql_query($sql1);
    $row = mysql_fetch_assoc($res);
    
    if($row){
        $responseData["code"] = 5;
        $responseData["message"] = "用户名已经被注册";

        echo json_encode($responseData);
        exit;
    }

    //密码要进行md5加密
    $str = md5(md5(md5($password)."qinzhai")."fole");
    

    //准备sql语句，注册操作
    $sql2 = "INSERT INTO denglu(username,password,createtime) VALUES('{$username}','{$str}',{$createtime})";

    $res2 = mysql_query($sql2);

    if(!$res2){
        $responseData["code"] = 6;
        $responseData["message"] = "用户名注册失败";

        echo json_encode($responseData);
        exit;
    }

    $responseData["message"] = "用户名注册成功";
    $responseData["code"] = "7";
    echo json_encode($responseData);

    //8、关闭数据库
    mysql_close($link);

?>