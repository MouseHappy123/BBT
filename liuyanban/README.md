### 留言板项目简介



#### HTML代码



##### 登陆注册界面



##### 登录和注册界面在同一页面下，采用以下代码实现相互切换

```javascript
var TurnToLogin = () => {
    document.getElementById('form_login_div').style.display = "block";
    document.getElementById('form_register_div').style.display = "none";
}
var TurnToRegister = () => {
    document.getElementById('form_register_div').style.display = "block";
    document.getElementById('form_login_div').style.display = "none";
```



##### 让背景自适应屏幕大小

```html
 <div id="Layer1" style="position:fixed; left:0px; top:0px; width:100%; height:100%">

        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543304259605&di=22ace36240af38868342e8c5bef81ed4&imgtype=0&src=http%3A%2F%2Fimgs.aixifan.com%2Fo_1c8uc9u9l1n56ap1vk5m69vji2v.jpg"

         width="100%" height="100%" />
```



##### 以下为全部代码

```html
<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">

    <title>留言板</title>

    <link rel="stylesheet" type="text/css" href="liuyanban.css">

</head>

<body>

    <div id="Layer1" style="position:fixed; left:0px; top:0px; width:100%; height:100%">

        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543304259605&di=22ace36240af38868342e8c5bef81ed4&imgtype=0&src=http%3A%2F%2Fimgs.aixifan.com%2Fo_1c8uc9u9l1n56ap1vk5m69vji2v.jpg"

         width="100%" height="100%" />

        <div id="form_login_div">

            <div class="form_login">

                <label class="login_title"><span>登陆账号</span></label><br /><br />

                <input id="user1" type="user1" placeholder="请输入用户名" style="width: 240px;height: 24px;" /><br />

                <input id="password" type="password" name="password" placeholder="请输入密码" style="width: 240px;height: 24px;" /><br />

                <input type='submit' class="btn-block" id="login" value="登陆" style="width:100px;height: 26px;" /><br />

                <input type='submit' class="btn-block" id="tuichu" value="退出登录" style="width:100px;height: 26px;" /><br />

                <input type='button' onclick="TurnToLogin()" value='登陆' />&nbsp;&nbsp;&nbsp;

                <input type='button' onclick="TurnToRegister()" value='注册' /><br />

                <div id="result-msg"></div>

                <div id="comments1"></div>

                <a href="http://localhost/liuyanban/liuyanban.html">

                    <h2>(￣３￣)a 去留言吧</h2>

                </a>

            </div>

        </div>

        <div id="form_register_div">

            <div class="form_register">

                <label class="register_title"><span>注册账号</span></label><br /><br />

                <input id="user2" type="user2" placeholder="请输入用户名" style="width: 240px;height: 24px;" /><br />

                <input id="password1" type="password1" name="password1" placeholder="请输入密码" style="width: 240px;height: 24px;" /><br />

                <input id="password2" type="password2" name="checkpwd" placeholder="请确认密码" style="width: 240px;height: 24px;" /><br />

                <input type='submit' class="btn-block" id="regist" value="注册" style="width:100px;height: 26px;" /><br />

                <input type='button' onclick="TurnToLogin()" value='登陆' />&nbsp;&nbsp;&nbsp;

                <input type='button' onclick="TurnToRegister()" value='注册' /><br />

                <div id="result-msg1"></div>

            </div>

        </div>

        <script type="text/javascript" src="js/jquery.js"></script>

        <script type="text/javascript" src="liuyanban.js"></script>

</body>

</html>
```



##### 留言板界面

```html
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
    <a href="http://localhost/liuyanban/index.html">
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
        <div id="comments"></div>
    </div>
    <script type="text/javascript" src="js/jquery.js"></script>
    <script type="text/javascript" src="liuyanban.js"></script>
</body>

</html>
```





------





### js



#### 传输数据部分使用ajax

```javascript
$.ajax({

        type: "POST",

        url: "xxx.php",

        data: {xx,xx,... },

        dataType: 'JSON',

        success: function (res) {........}  });
```



#### 返回留言部分通过拼接html代码实现功能

```javascript
var text = "<div class=\"kuang\">" + "<div class=\"left\">ID:" + array["id"] + "</div><div class=\"center\">用户名:" + array["user"] + "</div><div class=\"right\">时间: " + array["addtime"] +

                "</div><br/><div class=\"left\">留言:" + array["comment"] + "</div><div class=\"right\">操作:" + "<button class=\"btn-a\" "

                \+ "data-id=" + array["id"] + " data-user=\""

                \+ array["user"] + "\">" + "删除</button>" + "</div><div class=\"right\">操作:"

                \+ "<button class=\"btn-b\" " + "data-id=" + array["id"] + " data-user=\"" + array["user"] + "\">"

                \+ "修改</button>" + "</div></div>";
```

#### 以下为js全部代码

```javascript
var TurnToLogin = () => {

    document.getElementById('form_login_div').style.display = "block";

    document.getElementById('form_register_div').style.display = "none";

}

var TurnToRegister = () => {

    document.getElementById('form_register_div').style.display = "block";

    document.getElementById('form_login_div').style.display = "none";

}

$("#tuichu").click(function () {

    $.ajax({

        type: "POST",

        url: "tuichu.php",

        data: {},

        dataType: 'JSON',

        success: function (res) {

            if (res.errcode != 0) {

                $("#result-msg").show().html(res.errmsg).fadeOut(1000);

            }

        }

    });

});

$("#login").click(function () {

    var user1 = $("#user1").val();

    var password = $("#password").val();

    $.ajax({

        type: "POST",

        url: "login.php",

        data: { user1, password }, //"user1=" + user1 + "&password=" + password,

        dataType: 'JSON',

        success: function (res) {

            if (res.errcode != 0) {

                $("#result-msg").show().html(res.errmsg).fadeOut(1000);

            } else {

                var str = " 这是你的第 " + res.data.number_of_times + " 次登录" +

                    "最近一次登录在 " + res.data.last_login_time;

                comments1.innerHTML = str;

                $("#result-msg").show().html("登陆成功!").fadeOut(1000);

            }

        }

    });

});

$("#regist").click(function () {

    var user2 = $("#user2").val();

    var password1 = $("#password1").val();

    var password2 = $("#password2").val();

    $.ajax({

        type: "POST",

        url: "signup.php",

        data: { user2, password1, password2 },//"user2=" + user2 + "&password1=" + password1+"&password2="+password2,

        dataType: 'JSON',

        success: function (res) {

            if (res.errcode != 0) {

                $("#result-msg1").show().html(res.errmsg).fadeOut(1000);

            } else {

                $("#result-msg1").show().html("注册成功！").fadeOut(1000);

            }

        }

    });

});

$(function () {

    var comments = $("#comments");

    $.getJSON("data.php", function (json) {

        $.each(json, function (index, array) {

            var text = "<div class=\"kuang\">" + "<div class=\"left\">ID:" + array["id"] + "</div><div class=\"center\">用户名:" + array["user"] + "</div><div class=\"right\">时间: " + array["addtime"] +

                "</div><br/><div class=\"left\">留言:" + array["comment"] + "</div><div class=\"right\">操作:" + "<button class=\"btn-a\" "

                \+ "data-id=" + array["id"] + " data-user=\""

                \+ array["user"] + "\">" + "删除</button>" + "</div><div class=\"right\">操作:"

                \+ "<button class=\"btn-b\" " + "data-id=" + array["id"] + " data-user=\"" + array["user"] + "\">"

                \+ "修改</button>" + "</div></div>";

            comments.append(text);

        });

        $(".btn-a").click(function () {

            var element = this;

            var id = element.dataset.id;

            var user = element.dataset.user;

            $.ajax({

                type: "POST",

                url: "delete.php",

                data: { user, id },

                dataType: 'JSON',

                success: function (res) {

                    if (res.errcode != 0) {

                        alert(res.errmsg);

                        location.reload();

                    }

                    else { alert(res.errmsg); }

                }

            });

        });

        $(".btn-b").click(function () {

            var element = this;

            var id = element.dataset.id;

            var user = element.dataset.user;

            var text = prompt("请输入你的留言", "");

            $.ajax({

                type: "POST",

                url: "xiugai.php",

                data: { user, id, text },

                dataType: 'JSON',

                success: function (res) {

                    if (res.errcode != 0) {

                        alert(res.errmsg);

                        location.reload();

                    }

                    else { alert(res.errmsg); }

                }

            });

        });

    });

    $("#add").click(function () {

        var txt = $("#txt").val();

        $.ajax({

            type: "POST",

            url: "comment.php",

            data: { txt },//"user=" + user + "&txt=" + txt,

            dataType: 'JSON',

            success: function (res) {

                if (res.code == 1) {

                    $("#message").show().html("发表成功！").fadeOut(1000);

                    $("#txt").attr("value", "");

                    location.reload();

                } else {

                    $("#message").show().html(res.message).fadeOut(1000);

                }

            }

        });

    });

});
```

---------------------------





#### PHP中使用htmlspecialchars防御xss攻击

```php
$txt = htmlspecialchars(trim($_POST['txt']));
```



#### 同时使用mysqli_prepare等语句防御sql注入

```php
$stmt= mysqli_prepare($link,"INSERT INTO comments(user,comment,addtime)VALUES(?,?,?)");
    mysqli_stmt_bind_param($stmt, "sss", $user, $txt, $time);
    mysqli_stmt_execute($stmt);
    mysqli_stmt_close($stmt);
```







-------------------------------

### 图片

Images：

![](https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543304259605&di=22ace36240af38868342e8c5bef81ed4&imgtype=0&src=http%3A%2F%2Fimgs.aixifan.com%2Fo_1c8uc9u9l1n56ap1vk5m69vji2v.jpg)

> 图为登陆注册界面背景（一拳超人s级英雄大合照）
>
>

![](https://raw.githubusercontent.com/MouseHappy123/BBT/master/liuyanban/53c388616b576.gif)

>
>
> 图为留言板界面背景

--------------

### end

