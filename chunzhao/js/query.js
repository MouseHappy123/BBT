$(".back").click(function () {
    setTimeout(function () { window.location.assign("./selectmain.html"); }, 400);
});
$(".query").click(function () {
    var scholar_num = $("#scholar_num").val();
    var phone = $("#phone").val();
    $.ajax({
        type: "POST",
        url: "./search.php",
        data: { scholar_num, phone },
        dataType: 'JSON',
        success: function (res) {
            if (!res.errcode) {
                $("#result").html("<div id=\"mainForm\"style=\"height:100%;\">" +
                    "<div id=\"tips\"style=\"margin-top: 50px; margin-bottom: 5%;\">梯仔找到你的报名信息啦！<br>如有错误直接点击就可修改哦~</div>" +
                    "<div id=\"key\">姓名" +
                    "<input id=\"name\" class=\"first\"type=\"text\" value=\"" + res.name + "\" maxlength=\"15\"></div>" +
                    "<div id=\"key\">性别" +
                    "<input class=\"sec\"type=\"radio\"  name=\"Sex\" value=\"1\" /><span style=\"position:relative;left: 40px;\">男</span>" +
                    "<input class=\"sec\"type=\"radio\" name=\"Sex\" value=\"2\" /><span style=\"position:relative;left: 40px;\">女</span>" +
                    "</div>" +
                    "<script> var xradio = document.getElementsByName(\"Sex\");" +
                    "for(var i=0;i<xradio.length;i++){" +
                    "if(xradio[i].value ==" + res.sex + "){" +
                    "xradio[i].checked = true;" +
                    "break;" +
                    "}" +
                    "}</script>" +
                    "<div id=\"key\">年级" +
                    "<input class=\"sec\"type=\"radio\" name=\"grade\" value=\"1\" /><span style=\"position: relative;left: 40px;\">大一</span>" +
                    "<input class=\"sec\"type=\"radio\" name=\"grade\" value=\"2\" style=\"left:230px;\"/><span style=\"position: relative;left: -15px;\">大二</span>" +
                    "</div>" +
                    "<script> var xradio = document.getElementsByName(\"grade\");" +
                    "for(var i=0;i<xradio.length;i++){" +
                    "if(xradio[i].value == " + res.grade + "){" +
                    "xradio[i].checked = true;" +
                    "break;" +
                    "}" +
                    "}</script>" +
                    "<div id=\"key\">学院<select class=\"first\" id=\"college\"style=\"left:200px;\">" +
                    " <option value=\"0\">请选择</option>" +
                    "<option value=\"1\">机械与汽车工程学院</option>" +
                    "<option value=\"2\">建筑学院</option>" +
                    "<option value=\"3\">土木与交通学院</option>" +
                    "<option value=\"4\">电子与信息学院</option>" +
                    "<option value=\"5\">材料科学与工程学院</option>" +
                    "<option value=\"6\">化学与化工学院</option>" +
                    "<option value=\"7\">轻工科学与工程学院</option>" +
                    "<option value=\"8\">食品科学与工程学院</option>" +
                    "<option value=\"9\">数学学院</option>" +
                    "<option value=\"10\">物理与光电学院</option>" +
                    "<option value=\"11\">经济与贸易学院</option>" +
                    "<option value=\"12\">自动化科学与工程学院</option>" +
                    "<option value=\"13\">计算机科学与工程学院</option>" +
                    "<option value=\"14\">电力学院</option>" +
                    "<option value=\"15\">生物科学与工程学院</option>" +
                    "<option value=\"16\">环境与能源学院</option>" +
                    "<option value=\"17\">软件学院</option>" +
                    "<option value=\"18\">工商管理学院</option>" +
                    "<option value=\"19\">公共管理学院</option>" +
                    "<option value=\"20\">马克思主义学院</option>" +
                    "<option value=\"21\">外国语学院</option>" +
                    "<option value=\"22\">法学院</option>" +
                    "<option value=\"23\">新闻与传播学院</option>" +
                    "<option value=\"24\">艺术学院</option>" +
                    "<option value=\"25\">体育学院</option>" +
                    "<option value=\"26\">设计学院</option>" +
                    "<option value=\"27\">医学院</option>" +
                    "<option value=\"28\">国际教育学院</option>" +
                    "</select></div>" +
                    "<script>$(\"#college option[value='" + res.college + "'] \").attr(\"selected\",true);</script>" +
                    "<div id=\"key\">学号" +
                    "<input id=\"scholar_num1\" class=\"first\"type=\"text\" value=\"" + res.scholar_num + "\" maxlength=\"12\"></div>" +
                    "<div id=\"key\">手机" +
                    "<input id=\"phone\" class=\"first\"type=\"text\" value=\"" + res.phone + "\" maxlength=\"11\"></div>" +
                    "<div id=\"key\">第一志愿<select class=\"first\"id=\"first\"style=\"left:100px;\">" +
                    "<option value=\"0\">请选择</option>" +
                    "<option value=\"1\">技术部 - 代码组</option>" +
                    "<option value=\"2\">技术部 - 设计组</option>" +
                    "<option value=\"3\">技术部（北校专业）</option>" +
                    "<option value=\"4\">策划推广部</option>" +
                    "<option value=\"5\">编辑部 - 原创写手</option>" +
                    "<option value=\"6\">编辑部 - 摄影</option>" +
                    "<option value=\"7\">编辑部 - 可视化设计</option>" +
                    "<option value=\"8\">视觉设计部</option>" +
                    "<option value=\"9\">视频部 - 策划导演</option>" +
                    "<option value=\"10\">视频部 - 摄影摄像</option>" +
                    "<option value=\"11\">视频部 - 剪辑特效</option>" +
                    "<option value=\"12\">外联部</option>" +
                    "<option value=\"13\">节目部 - 国语组</option>" +
                    "<option value=\"14\">节目部 - 英语组</option>" +
                    "<option value=\"15\">节目部 - 粤语组</option>" +
                    "<option value=\"16\">人力资源部</option>" +
                    "<option value=\"17\">综合管理部 - 行政管理</option>" +
                    "<option value=\"18\">综合管理部 - 物资财务</option>" +
                    "<option value=\"19\">综合新闻部 - 撰文记者</option>" +
                    "<option value=\"20\">综合新闻部 - 摄影记者</option>" +
                    "<option value=\"21\">产品运营部（北校专业）</option>" +
                    "</select></div>" +
                    "<script>$(\"#first option[value='" + res.first + "'] \").attr(\"selected\",true);</script>" +
                    "<div id=\"key\">第二志愿" +
                    "<select class=\"first\" id=\"second\"style=\"left:100px;\">" +
                    "<option value=\"0\">请选择</option>" +
                    "<option value=\"1\">技术部 - 代码组</option>" +
                    "<option value=\"2\">技术部 - 设计组</option>" +
                    "<option value=\"3\">技术部（北校专业）</option>" +
                    "<option value=\"4\">策划推广部</option>" +
                    "<option value=\"5\">编辑部 - 原创写手</option>" +
                    "<option value=\"6\">编辑部 - 摄影</option>" +
                    "<option value=\"7\">编辑部 - 可视化设计</option>" +
                    "<option value=\"8\">视觉设计部</option>" +
                    "<option value=\"9\">视频部 - 策划导演</option>" +
                    "<option value=\"10\">视频部 - 摄影摄像</option>" +
                    "<option value=\"11\">视频部 - 剪辑特效</option>" +
                    "<option value=\"12\">外联部</option>" +
                    "<option value=\"13\">节目部 - 国语组</option>" +
                    "<option value=\"14\">节目部 - 英语组</option>" +
                    "<option value=\"15\">节目部 - 粤语组</option>" +
                    "<option value=\"16\">人力资源部</option>" +
                    "<option value=\"17\">综合管理部 - 行政管理</option>" +
                    "<option value=\"18\">综合管理部 - 物资财务</option>" +
                    "<option value=\"19\">综合新闻部 - 撰文记者</option>" +
                    "<option value=\"20\">综合新闻部 - 摄影记者</option>" +
                    "<option value=\"21\">产品运营部（北校专业）</option>" +
                    "</select>" +
                    "</div>" +
                    "<script>$(\"#second option[value='" + res.second + "'] \").attr(\"selected\",true);</script>" +
                    "<div id=\"key\">服从调剂" +
                    "<input class=\"sec\"type=\"radio\" checked=\"checked\" name=\"follow\" value=\"1\"style=\"left: 175px;\" /><span style=\"position:relative;left:-55px;\">是</span>" +
                    "<input class=\"sec\"type=\"radio\" name=\"follow\" value=\"2\"style=\"left:165px;\" /><span style=\"position: relative;left: -55px;\">否</span>" +
                    "</div>" +
                    "<script> var xradio = document.getElementsByName(\"follow\");" +
                    "for(var i=0;i<xradio.length;i++){" +
                    "if(xradio[i].value == " + res.adjust + "){" +
                    "xradio[i].checked = true;" +
                    "break;" +
                    "}" +
                    "}</script>" +
                    "<div id=\"key\">个人简介(选填)" +
                    "<textarea id=\"eIntroduction\" rows=\"6\">" + res.introduction + "</textarea>" +
                    "</div>" +
                    "<div class=\"bg\">" +
                    "<div class=\"container\" style=\"position:relative;padding-top:200%;\">" +
                    "<div class=\"tips\"style=\"text-align:center;color:red;line-height:60px;margin-bottom:50px;\"></div>" +
                    "<a data-animation=\"ripple1\" class=\"text ani send\"style=\"margin-bottom:70px;\" >修改</a></div>" + "<br/>" +
                    "<br/>" +
                    "<br/>" +
                    "<br/>" +
                    "<br/>" +
                    "<img src=\"part3.png\"style=\"width:100%;\"></img>" + "<script src=\"./change.js\"></script>" + "</div></div>");
            }

            else { alert(res.errmsg); }
        }

    });
});