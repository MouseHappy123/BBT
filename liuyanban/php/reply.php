<?php
header('Content-Type: application/json; charset=utf-8');
include_once("connect.php");
session_start();
$id=htmlspecialchars(trim($_POST['id']));
$text = htmlspecialchars(trim($_POST['text']));
$time = date("Y-m-d H:i:s");
//$user1 = $_SESSION["user"];
if(isset($_SESSION["user"])){$user=$_SESSION['user'];
if(empty($text)){
    $data = array("errcode"=>0,"errmsg"=>'啥都没有回复个球!!',"data"=>'');
    echo json_encode($data);
    exit;
}
else{
$stmt4= mysqli_prepare($link,"INSERT INTO reply(id,user,addtime,reply)VALUES(?,?,?,?)");
mysqli_stmt_bind_param($stmt4, "isss",$id,$user,$time,$text);
    mysqli_stmt_execute($stmt4);
    mysqli_stmt_close($stmt4);
//mysqli_query($link,$sql23);
$data=array("errcode"=>500,"errmsg"=>'回复成功！',"data"=>'');
echo json_encode($data);
}
}
else{
    $data=array("errcode"=>508,"errmsg"=>'还未登录啊！',"data"=>'');
echo json_encode($data);
}