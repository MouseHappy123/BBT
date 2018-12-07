<?php
header('Content-Type: application/json; charset=utf-8');
include_once("connect.php");
session_start();
$id=htmlspecialchars(trim($_POST['id']));
$user=htmlspecialchars(trim($_POST['user']));
$text = htmlspecialchars(trim($_POST['text']));
//$user1 = $_SESSION["user"];
if(isset($_SESSION["user"])){
if($user!=$_SESSION["user"]){
    $data = array("errcode"=>0,"errmsg"=>'你不能改别人的留言啊!!',"data"=>'');
    echo json_encode($data);
    exit;
}
else{if(empty($text)){
    $data = array("errcode"=>0,"errmsg"=>'啥都没有修改个球!!',"data"=>'');
    echo json_encode($data);
    exit;
}
else{
$stmt4= mysqli_prepare($link,"UPDATE comments set comment=? WHERE user=? AND id=?");
mysqli_stmt_bind_param($stmt4, "ssi",$text, $user, $id);
    mysqli_stmt_execute($stmt4);
    mysqli_stmt_close($stmt4);
//mysqli_query($link,$sql23);
$data=array("errcode"=>400,"errmsg"=>'修改成功！',"data"=>'');
echo json_encode($data);
}
}
}
else{
    $data=array("errcode"=>408,"errmsg"=>'还未登录啊！',"data"=>'');
echo json_encode($data);
}