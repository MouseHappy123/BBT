var ws = require("nodejs-websocket");
console.log("开始建立连接...");
var server = ws.createServer(function (conn) {
    conn.on('text', function (str) {
        var data = JSON.parse(str);
        if (data.type == "welcome") {
            if (data.name == "")
                broadcast(JSON.stringify({
                    "back": "欢迎游客进入弹幕测试网页！",
                }));
            else {
                broadcast(JSON.stringify({
                    "back": "欢迎" + data.name + "进入弹幕测试网页！",
                }));
            }
        }
        if (data.type == "message") {
            broadcast(JSON.stringify({
                "back": data.name + "说：" + data.value,
            }));
        }
        if (data.type == "close") {
            broadcast(JSON.stringify({
                "back": data.name + "离开了",
            }));
        }
    })

    conn.on("close", function (code, reason) {
        console.log("关闭连接");
    })
    conn.on("error", function (code, reason) {
        console.log("异常关闭");
    })
}).listen(3389);
console.log("websocket连接完毕")
function broadcast(str) {
    server.connections.forEach(function (connection) {
        connection.sendText(str);
    })
}