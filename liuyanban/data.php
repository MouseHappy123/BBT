
<?php
include_once("connect.php");
$currentpage = 1;
$pageSize=3;
if(isset($_GET['page']))
    $currentpage = $_GET['page'];
$total_sql="select count(*) from comments";
$total_result =mysqli_query($link,$total_sql);
$total_row=mysqli_fetch_row($total_result);
$total = $total_row[0];//获取最大页码数
$pages = ceil($total/$pageSize);//向上整数
$prepage = $currentpage -1;
if($prepage<=0)
 $prepage=1;
$nextpage = $currentpage+1;
if($nextpage >= $pages){
$nextpage = $pages;
}
$start =($currentpage-1) * $pageSize;//起始位置
$rs="select * from comments LIMIT $start,$pageSize";
$q=mysqli_query($link,$rs);
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>留言板</title>
    <link rel="stylesheet" type="text/css" href="liuyanban.css">
    <style type="text/css">
        div.kuang {
            border-style: solid;
            margin: 0 auto;
            width: 50%;
            display: inline-block !important;
            display: inline;
            background-image: linear-gradient(#fff, #E0ffff 100px);
        }

        .main {
            color: #666;
            margin-top: 50px;
        }

        @keyframes blink {
            0% {
                opacity: 1;
            }

            100% {
                opacity: 0;
            }
        }

        @-webkit-keyframes blink {
            0% {
                opacity: 1;
            }

            100% {
                opacity: 0;
            }
        }

        @-moz-keyframes blink {
            0% {
                opacity: 1;
            }

            100% {
                opacity: 0;
            }
        }

        @-ms-keyframes blink {
            0% {
                opacity: 1;
            }

            100% {
                opacity: 0;
            }
        }

        @-o-keyframes blink {
            0% {
                opacity: 1;
            }

            100% {
                opacity: 0;
            }
        }

        .blink {
            color: #00ffff;
            animation: blink 1s linear infinite;
            /* 其它浏览器兼容性前缀 */
            -webkit-animation: blink 2s linear infinite;
            -moz-animation: blink 2s linear infinite;
            -ms-animation: blink 2s linear infinite;
            -o-animation: blink 2s linear infinite;
        }
    </style>
</head>

<body>
    <a href="http://182.254.161.213/index.html">
        <button>
            <h2>这里返回啊(｀・ω・´)</h2>
        </button>
    </a>
    <div id="abc">
        <div id="post">
            <h1 class="blink">留言板</h1>
            <p>留言内容：</p>
            <p><textarea class="input" id="txt" style="width:50%; height:80px"></textarea></p>
            <p><input type="submit" class='btn' value="发表" id="add" /></p>
            <div id="message"></div>
            <div id="result-msg2"></div>
        </div>
		<table border="1" align="center">
        <tr>
        <td>ID</td>
        <td>头像</td>
        <td>用户名</td>
        <td>时间</td>
        <td>留言</td>
        <td>删除</td>
		<td>修改</td>
		<td>回复</td>
		<td>查看回复</td>
		</tr>
		<?php while($arr=mysqli_fetch_array($q)){ ?>
        <td><?php echo $arr['id']; ?></td>
        <td><?php    $user=$arr['user'];
         $result =mysqli_query($link,"SELECT * from ccs_image where user='$user'");
         $con=mysqli_affected_rows($link);
         if($con){$result_arr = mysqli_fetch_assoc($result);//返回表中每条数据的具体内容
         $icon=$result_arr['icon'];}
         else{$icon="general.jpg";} 
         ?>    
         <img src="../<?php echo $icon;?>" height="60px" width="60px" border="1px solid red"/>
        </td>
        <td><?php echo $arr['user']; ?></td>
        <td><?php echo $arr['addtime']; ?></td>
		<td><?php echo $arr['comment']; ?></td>
		<td><button class="btn-a" 
                data-id="<?php echo $arr['id']; ?>" data-user="<?php echo
				$arr['user']; ?>">删除</button></td>
		<td><button class="btn-b" 
                data-id="<?php echo $arr['id']; ?>" data-user="<?php echo
				$arr['user']; ?>">修改</button></td>
		<td><button class="btn-c"
				data-id="<?php echo $arr['id']; ?>" data-user="<?php echo
				$arr['user']; ?>">回复</button></td>
		<td><a href="http://182.254.161.213/chakan.php"><button class="btn-d"
				data-id="<?php echo $arr['id']; ?>" data-user="<?php echo
				$arr['user']; ?>">查看回复</button></a></td>						
        </tr>
        <?php } ?>
		</table>
		<a href="<?php echo $_SERVER['PHP_SELF'].'?page='.$prepage; ?>">上一页</a>  
		<a href="<?php echo $_SERVER['PHP_SELF'].'?page='.$nextpage; ?>">下一页</a>
    </div>
    <script type="text/javascript" src="js/jquery.js"></script>
    <script type="text/javascript" src="liuyanban.js"></script>
</body>

</html>

