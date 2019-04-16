function getCookie(name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(name + "=")
        if (c_start != -1) {
            c_start = c_start + name.length + 1
            c_end = document.cookie.indexOf(";", c_start)
            if (c_end == -1) c_end = document.cookie.length
            return unescape(document.cookie.substring(c_start, c_end))
        }
    }
    return ""
}
var name = getCookie("name");
var clear = document.getElementsByClassName("clear")[0];
var value = document.getElementById("value");
var time = new Date();
time = time.toLocaleString();
clear.disabled = true;
if (window.WebSocket) {
    var ws = new WebSocket('ws://182.254.161.213:3389');
    clear.disabled = false;
    document.getElementById("send").onclick = function (e) {
        if (name == "") {
            $("input[name=send]").val("");
            $("input[name=send]").attr("placeholder", "登录后才能发言");
        }
        else {
            if (value.value) {
                ws.send(name + ";" + value.value);
                value.value = "";
            }
            else {
                $("input[name=send]").val("");
                $("input[name=send]").attr("placeholder", "弹幕不能为空");
            }
        }
    }
    document.onkeydown = function (e) {
        e = e || window.event;
        if (e.keyCode == 13) {
            document.getElementById("send").onclick();
            return false;
        }
    }
    ws.onopen = function (e) {
        console.log("连接服务器成功");
        //ws.send("欢迎" + name + "进入弹幕测试网页！")
        ;
    }
    ws.onmessage = function (e) {
        var result = e.data.indexOf(";");
        console.log(result);
        var strlen = e.data.length;
        var string1 = e.data.substring(0, result);
        var string2 = e.data.substring(result + 1, strlen);
        var jqueryDom = createBarrage(string2);
        addInterval(jqueryDom);
        $('.textarea').append("<div id=\"comment\">" +
            "<img src=\"./general.jpg\"style=\"width:50px;float:left;margin:5%;\"/><div class=\"append\">用户名："
            + string1 + "</div>" + "<div class=\"append\">评论：" + string2 + "</div>" +
            "<div class=\"append\">时间：" + time + "</div></div>");
    }
    ws.onclose = function (e) {
        console.log("服务器关闭");
        ws.send(JSON.stringify({
            "type": "close",
            "name": name,
        }));
    }
    ws.onerror = function () {
        console.log("连接出错");
        ws.send(JSON.stringify({
            "type": "close",
            "name": name,
        }));
    }

}