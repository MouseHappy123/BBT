$('.send').bind("click", function () {
    var judge1;
    var judge2;
    var judge3;
    var name = getval('name');
    judge1 = Is('chinese', name, 1);
    var dorm = getval('dorm1');
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
    if (judge1 && judge2 && judge3) {
        $.ajax({
            type: "POST",
            url: phpPath,
            data: { name, dorm, phone, college, first, second, grade, sex, adjust, introduction },
            dataType: 'JSON',
            success: function (res) {
                if (!res.errcode) {
                    $(".send").unbind("click");
                    alert(res.msg);
                    location.reload();
                }
                else { $(".tips").html(res.msg); }
            }
        });
    }
});
