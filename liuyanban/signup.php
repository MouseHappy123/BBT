<?php
header('Content-Type: application/json; charset=utf-8');
include_once("connect.php");
$user=htmlspecialchars(trim($_POST['user2']));
$password1=htmlspecialchars(trim($_POST['password1']));
$password2=htmlspecialchars(trim($_POST['password2']));
$stmt1 = mysqli_prepare($link, "SELECT password FROM `check1` WHERE user=? ");
mysqli_stmt_bind_param($stmt1, "s", $user);
    mysqli_stmt_execute($stmt1);
    mysqli_stmt_bind_result($stmt1, $colum);
    mysqli_stmt_fetch($stmt1);
    mysqli_stmt_close($stmt1);
    //$result = mysqli_query($link,$sql);
    //$colum= mysqli_fetch_array($result);
    echo mysqli_error($link);
    if(empty($user)) {
        $result13=array("errcode"=>801,
              "errmsg"=>'用户名不能为空',"data"=>''
  
              );
            echo json_encode($result13);
            exit;
      }
      if(empty($password1)||empty($password2)){
        $result14=array("errcode"=>803,
              "errmsg"=>'密码不能为空',"data"=>''
  
              );
            echo json_encode($result14);
            exit;
      }
    if(!empty($colum)){
        $result1=array("errcode" => 2,
        "errmsg" => "用户名已经存在",
        "data" => ""
    
        );
    echo json_encode($result1);exit;}
    if($password1==$password2){
        $stmt3= mysqli_prepare($link,"INSERT INTO check1 (user,password) VALUES(?,?)");
        mysqli_stmt_bind_param($stmt3, "ss", $user , $password1);
            mysqli_stmt_execute($stmt3);
            mysqli_stmt_close($stmt3);
        $result = array(
    "errcode" =>0,
    "errmsg" => "",
    "data" => "注册成功"
);
echo json_encode($result);}
else{
    $result2=array("errcode" => 1,
    "errmsg" => "两次输入密码不一致",
    "data" => ""

    );
echo json_encode($result2);
}




