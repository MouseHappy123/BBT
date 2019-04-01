<?php
header('Content-Type:application/json');
date_default_timezone_set('PRC');
$nowTime=date("Y-m-d-h-i-sa");
$closeTime = '2020-09-21 00:00:00';
$startTime = '2019-03-01 00:00:00';
$addr = '';			//Database Address
$dbname = '';		//Database Name
$user = '';					//Username of Project Database
$password = '';		//Password of Project Database
function judge_time($errcode,$msg,$nowTime,$time_check){
    $time_check_info=[
        'errcode'=>"$errcode",
        'msg'=>"$msg",
        'nowtime'=>$nowTime,
        'time_st_cl'=>$time_check
    ];
    echo json_encode($time_check_info);
    exit();
}
if($nowTime<$startTime){
    judge_time(456,"报名....还没开始",$nowTime,$startTime);
}
if($nowTime>$closeTime){
    judge_time(123,"来迟了，9月份再来吧",$nowTime,$closeTime);
}
$connect=mysqli_connect($addr,$user,$password,$dbname);
