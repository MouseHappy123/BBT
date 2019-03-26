<?php
header('Content-Type:application/json');
$connect=mysqli_connect('','','','');
$result=mysqli_query($connect,"SELECT * FROM signup");
$result_array=array();
while($value=mysqli_fetch_object($result)){
    array_push($result_array,$value);
}
$array=[
    'info'=>$result_array
];
echo json_encode($array);
/*这个是后面内部用的统计结果*/
