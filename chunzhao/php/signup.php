<?php
header('Content-Type:application/json');
require_once('./conf.php');

$name=htmlspecialchars(trim($_POST['name']));
$dorm=htmlspecialchars(trim($_POST['dorm']));
$sex=htmlspecialchars(trim($_POST['sex']));
$college=htmlspecialchars(trim($_POST['college']));
$phone=htmlspecialchars(trim($_POST['phone']));
$first=htmlspecialchars(trim($_POST['first']));
$second=htmlspecialchars(trim($_POST['second']));
$adjust=htmlspecialchars(trim($_POST['adjust']));
$introduction=htmlspecialchars(trim($_POST['introduction']));
$grade=htmlspecialchars(trim($_POST['grade']));
$info_array=array($name,$dorm,$sex,$college,$sex,$college,$phone,$first,
$second,$adjust,$introduction,$grade);
$caculate_null=0;
foreach($info_array as $value){
    if($value==NULL){
        $caculate_null++;
    }
}
$pho_len=strlen($phone);
//$scholar_num_len=strlen($scholar_num);
if($caculate_null==0){
if($pho_len==11){

            $insert_info=$connect->prepare("INSERT INTO signup VALUES (NULL,?,?,?,?,?,?,?,?,?,now(),?)");
            $insert_info->bind_param("ssssssssss",$name,$dorm,$sex,$college,$phone,$first,$second,$adjust,$introduction,$grade);
            $insert_info->execute();
            $return_result=[
                'errcode'=>0,
                'msg'=>"报名成功"
            ];
            echo json_encode($return_result);
        
        }/*else{
        $return_erro=[
            'errcode'=>124,
            'msg'=>"学号格式不正确，请检查"
        ];
        echo json_encode($return_erro);
    }
   */ 
else{
    $return_erro=[
        'errcode'=>127,
        'msg'=>"电话号码格式不正确，请检查"
    ];
    echo json_encode($return_erro);
}
}
else{
        
    $return_erro=[
        'errcode'=>123,
        'msg'=>"信息未填完，请完善信息"
    ];
    echo json_encode($return_erro);

}
//mysqli_close($connect);

