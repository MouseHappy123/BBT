<?php
header('Content-Type: application/json; charset=utf-8');
include_once("connect.php");
session_start();
if(isset($_POST['id'])){$_SESSION["id"]=htmlspecialchars(trim($_POST['id']));}
$id=$_SESSION["id"];
$rs="SELECT * FROM `reply` where id=$id";
$result=mysqli_query($link,$rs);
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
    <a href="http://182.254.161.213/data.php">
        <button>
            <h2>这里返回啊(｀・ω・´)</h2>
        </button>
    </a>
    <div id="abc">
        <div id="post">
            <h1 class="blink">回复</h1>
            <p>回复内容：</p>
            </div>
            <table border="1" align="center">
        <tr>
        <td>留言ID</td>
        <td>用户名</td>
        <td>时间</td>
        <td>回复</td>
        </tr>
        <?php while($arr=mysqli_fetch_array($result)){ ?>
        <td><?php echo $arr['id']; ?></td>
        <td><?php echo $arr['user']; ?></td>
        <td><?php echo $arr['addtime']; ?></td>
        <td><?php echo $arr['reply']; ?></td>
        </tr>
        <?php } ?>
		</table>
        </div>
    <script type="text/javascript" src="js/jquery.js"></script>
    <script type="text/javascript" src="liuyanban.js"></script>
</body>

</html>


