<?php
include_once("connect.php");
session_start();
unset($_SESSION["user"]);
$result7=array("errcode"=>8,
"errmsg"=>'已退出登录',"data"=>'');
echo json_encode($result7);
?>