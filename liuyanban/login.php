<?php 
header('Content-Type: application/json; charset=utf-8');
include_once("connect.php");
session_start();
$_SESSION["user"]=NULL;
  $user=htmlspecialchars(trim($_POST['user1']));
  $password=htmlspecialchars(trim($_POST['password']));
  /*$stmt = mysqli_prepare($link, "SELECT * FROM `check1` WHERE user=?");
    mysqli_stmt_bind_param($stmt, "s", $user);
    mysqli_stmt_execute($stmt);
    mysqli_stmt_bind_result($stmt, $colum);
    mysqli_stmt_fetch($stmt);
    mysqli_stmt_close($stmt);*/
    $stmt = mysqli_prepare($link, "SELECT password FROM `check1` WHERE user=?");
    mysqli_stmt_bind_param($stmt, "s", $user);
    mysqli_stmt_execute($stmt);
    mysqli_stmt_bind_result($stmt, $colum1);
    mysqli_stmt_fetch($stmt);
    mysqli_stmt_close($stmt);
    //$result = mysqli_query($link,$sql);
    //$colum= mysqli_fetch_array($result);
    //$result3=mysqli_query($link,$sql1);
    //$colum1= mysqli_fetch_array($result3);
    echo mysqli_error($link);
    $stmt2 = mysqli_prepare($link,"SELECT number_of_times,last_login_time FROM check1 WHERE user=?");
    mysqli_stmt_bind_param($stmt2, "s", $user);
    mysqli_stmt_execute($stmt2);
    mysqli_stmt_bind_result($stmt2, $times,$last);
    mysqli_stmt_fetch($stmt2);
    mysqli_stmt_close($stmt2);
    //$result4=mysqli_fetch_array(mysqli_query($link,$sql2));
    //$times=$result['number_of_times'];
    //$last=$result['last_login_time'];
   // $sql3="SELECT last_login_time FROM check1 WHERE user='$user'";
    //$last=mysqli_fetch_array(mysqli_query($link,$sql3));
    if(empty($user)) {
      $result15=array("errcode"=>800,
            "errmsg"=>'用户名不能为空',"data"=>''

            );
          echo json_encode($result15);
          exit;
    }
    if(empty($password)){
      $result16=array("errcode"=>802,
            "errmsg"=>'密码不能为空',"data"=>''

            );
          echo json_encode($result16);
          exit;
    }
    if($colum1 == $password)
        {  $_SESSION["user"]=$user;
          //$sql5="UPDATE check1 set check1_in='true' WHERE user='$user'";
          //mysqli_query($link,$sql5);
          $result=array("errcode"=>0,"errmsg"=>'',"data"=>[
          "number_of_times"=>$times,
          "last_login_time"=>$last ]  
          );
          $times+=1;
        $sql4="UPDATE check1 set number_of_times='$times', last_login_time=now() WHERE user='$user'";
        mysqli_query($link,$sql4);
          echo json_encode($result);
          exit;}
          if(empty($colum1)){
            $result1=array("errcode"=>3,
            "errmsg"=>'用户名不存在',"data"=>''

            );
          echo json_encode($result1);
          exit;
          }
          if($colum1!= $password){
            $result2=array("errcode"=>4,
            "errmsg"=>'密码错误',"data"=>'');
            echo json_encode($result2);
          }

         
    
  ?> 