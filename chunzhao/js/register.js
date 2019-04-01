function setCookie(name, value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}
$(".back").click(function () {
    window.location.assign(htmlPath1);
});
$(".send").bind("click", function () {
    var judge1;
    var judge2;
    var judge3;
    var name = getval('name');
    judge1 = Is('chinese', name, 1);
    var dorm = getval('dorm');
    judge2 = Is('dorm', dorm, 1);
    var phone = getval('phone');
    judge3 = Is('phone', phone, 1);
    var grade = $("input[name='grade']:checked").val();
    var sex = $("input[name='Sex']:checked").val();
    var adjust = $("input[name='follow']:checked").val();
    var introduction = getval('eIntroduction');
    var college = getoption('college');
    var first = getoption('first');
    var second = getoption('second');
    setCookie("name", name);
    if (judge1 && judge2 && judge3) {
        $.ajax({
            type: "POST",
            url: phpPath1,
            data: { name, dorm, phone, college, first, second, grade, sex, adjust, introduction },
            dataType: 'JSON',
            success: function (res) {
                if (!res.errcode) { $(".send").unbind("click"); window.location.assign(htmlPath2); }
                else { $(".tips").html(res.msg); }
            }
        });
    }
});