<?php
header('Content-Type: application/json; charset=utf-8');
include_once("connect.php");
session_start();
$id=htmlspecialchars(trim($_POST['id']));
$user=htmlspecialchars(trim($_POST['user']));
if(isset($_SESSION["user"]) &&$user==$_SESSION["user"])
{$sql="DELETE from comments WHERE ID='$id'";
    $result = mysqli_query($link,$sql);
    $result10=array("errcode"=>100,
    "errmsg"=>'删除成功',"data"=>'');
    echo json_encode($result10);
}
else{
    $result11=array("errcode"=>0,
    "errmsg"=>'你不能删别人的留言啊！！！',"data"=>'');
    echo json_encode($result11);
}

