<?php
include_once("connect.php");
session_start();
if (isset($_POST['submit'])) {
    $form_data_name = $_FILES['form_data']['name'];
    $form_data_size = $_FILES['form_data']['size'];
    $form_data_type = $_FILES['form_data']['type'];
    $form_data = $_FILES['form_data']['tmp_name'];
    $user=$_SESSION["user"];
    if(($_FILES["form_data"]["type"]=="image/png"||$_FILES["form_data"]["type"]=="image/jpeg")&&$_FILES["form_data"]["size"]<1024000)
    {$filename="/var/www/html/" . $_FILES["form_data"]["name"];
      if(file_exists($filename))
      {
          echo"该文件已存在";
      }
      else
      {  
    move_uploaded_file($_FILES["form_data"]["tmp_name"],
    "/var/www/html/" . $_FILES["form_data"]["name"]);

$icon_tem = "" . $_FILES["form_data"]["name"];
$icon_arr = array("$icon_tem");
$icon = implode($icon_arr);
$result=mysqli_query($link,"SELECT * FROM ccs_image WHERE user='$user'");
$con=mysqli_affected_rows($link);
if($con){ 
  mysqli_query($link,"UPDATE ccs_image SET icon='$icon' WHERE user='$user'");
echo "头像已更新";}
else { mysqli_query($link,"INSERT INTO ccs_image (icon,user) VALUES ('$icon','$user')");
echo "头像已上传";}}
}
else
{
    echo"文件类型不对";
}
}
  //  $data = addslashes(fread(fopen($form_data, "r"), filesize($form_data)));
    //echo "mysqlPicture=".$data;
    
   // $result =mysqli_query($link,"INSERT INTO ccs_image (user,bin_data,filename,filesize,filetype)
    //              VALUES ('$user','$data','$form_data_name','$form_data_size','$form_data_type')");
   // if ($result) {
     //   echo "图片已存储到数据库";
   // } else {
    //    echo "请求失败,请重试";
    //}}
