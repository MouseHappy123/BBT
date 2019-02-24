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
        url: "http://182.254.161.213/tuichu.php",
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
        url: "http://182.254.161.213/login.php",
        data: { user1, password }, //"user1=" + user1 + "&password=" + password,
        dataType: 'JSON',
        success: function (res) {
            if (res.errcode != 0) {
                $("#result-msg").show().html(res.errmsg).fadeOut(1000);
            } else {
                var str = " 这是你的第 " + res.data.number_of_times + " 次登录" +
                    "最近一次登录在 " + res.data.last_login_time;
                comments1.innerHTML = str;
                $("#touxiang").show().html('<h3>你可以上传你的头像了！</h3>' + '<form action="upimage.php" method="POST" enctype="multipart/form-data">' +
                    '<input type="file" name="form_data" size="40"><br>' +
                    '<input type="submit" name="submit" value="submit">'
                    + '</form>');
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
        url: "http://182.254.161.213/signup.php",
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



$(".btn-a").click(function () {
    var element = this;
    var id = element.dataset.id;
    var user = element.dataset.user;
    $.ajax({
        type: "POST",
        url: "http://182.254.161.213/delete.php",
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
        url: "http://182.254.161.213/xiugai.php",
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
$(".btn-c").click(function () {
    var element = this;
    var id = element.dataset.id;
    var user = element.dataset.user;
    var text = prompt("请输入你的回复", "");
    $.ajax({
        type: "POST",
        url: "http://182.254.161.213/reply.php",
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
$(".btn-d").click(function () {
    var element = this;
    var id = element.dataset.id;
    $.ajax({
        type: "POST",
        url: "http://182.254.161.213/chakan.php",
        data: { id },
        dataType: 'JSON',
        success: function (res) {

        }
    });
});
$("#add").click(function () {
    var txt = $("#txt").val();
    $.ajax({
        type: "POST",
        url: "http://182.254.161.213/comment.php",
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

