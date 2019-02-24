<?php
include_once("connect.php");
session_start();
//$sql="SELECT check_in FROM comments WHERE user='$user'";
//$result=mysqli_query($link,$sql);
//$colum= mysqli_fetch_array($result);
$txt = htmlspecialchars(trim($_POST['txt']));
$fuckArr = array('脏话','shit');
$txt=str_replace("\n","<br/>",$txt); 
if(empty($txt)){
    $data = array("code"=>356,"message"=>"内容不能为空");
    echo json_encode($data);
    exit;
}
for ($i=0,$j=0; $i < count($fuckArr) ; $i++){
    if ($fuckArr[$i] == "") {
        continue;}
        if (strpos($txt,trim($fuckArr[$i])) !== false){$j++;
            $data = array("code"=>700,"message"=>"你的留言中含有敏感词!");
    echo json_encode($data);break;}}
    if($j==0){
$time = date("Y-m-d H:i:s");
if (isset($_SESSION["user"])) {
    $user=$_SESSION["user"];
    $stmt5= mysqli_prepare($link,"INSERT INTO comments(user,comment,addtime)VALUES(?,?,?)");
    mysqli_stmt_bind_param($stmt5, "sss", $user, $txt, $time);
    mysqli_stmt_execute($stmt5);
    mysqli_stmt_close($stmt5);
if($stmt5)  {
    $data = array("code" => 1, "message"=>"success","user" => $user , "txt" => $txt);
    echo json_encode($data);
    //$sql1="UPDATE comments SET check_in='NULL'";
    //$result1=mysqli_query($link,$sql1);
}}
else {
    $data=array("code"=>2,"message"=>"还未登录啊！！！！");
    echo json_encode($data);
}
    }