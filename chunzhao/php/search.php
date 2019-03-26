<?php
header('Content-Type:application/json');
$connect=mysqli_connect('','','','');
if(!$connect){
    die("无法连接上数据库，请联系管理员");
}

$scholar_num=htmlspecialchars(trim($_POST['scholar_num']));
$phone=htmlspecialchars(trim($_POST['phone']));
$search_info=$connect->prepare("SELECT * FROM signup WHERE scholar_num=? AND phone=?");
$search_info->bind_param("ss",$scholar_num,$phone);
$search_info->execute();
$search_result=$search_info->get_result();
$result_array=mysqli_fetch_array($search_result);
if($result_array==NULL){
    $return_search=[
        'errcode'=>112,
        'errmsg'=>"亲亲，您输入的学号或手机不存在，这边建议您检查或重新报名"
    ];
    echo json_encode($return_search);
}else{
    $return_search=[
        //'get_result'=>$result_array,
        'name'=>$result_array[1],
        'scholar_num'=>$result_array[2],
        'sex'=>$result_array[3],
        'college'=>$result_array[4],
        'phone'=>$result_array[5],
        'first'=>$result_array[6],
        'second'=>$result_array[7],
        'adjust'=>$result_array[8],
        'introduction'=>$result_array[9],
        'grade'=>$result_array[11],
        'errcode'=>0
    ];
    echo json_encode($return_search);
}
mysqli_close($connect);

