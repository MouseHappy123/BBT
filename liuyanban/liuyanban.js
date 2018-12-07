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
                + "data-id=" + array["id"] + " data-user=\""
                + array["user"] + "\">" + "删除</button>" + "</div><div class=\"right\">操作:"
                + "<button class=\"btn-b\" " + "data-id=" + array["id"] + " data-user=\"" + array["user"] + "\">"
                + "修改</button>" + "</div></div>";
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

