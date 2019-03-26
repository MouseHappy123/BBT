$(".back").click(function () {
    setTimeout(function () { window.location.assign("./selectmain.html"); }, 200);
});
function setCookie(name, value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}
$(".send").bind("click", function () {
    var name = $("#name").val();
    var scholar_num = $("#scholar_num").val();
    var phone = $("#phone").val();
    var grade = $("input[name='grade']:checked").val();
    var sex = $("input[name='Sex']:checked").val();
    var adjust = $("input[name='follow']:checked").val();
    var introduction = $("#eIntroduction").val();
    var obj1 = document.getElementById('college');
    var index1 = obj1.selectedIndex; //序号，取当前选中选项的序号
    var college = obj1.options[index1].value;
    var obj2 = document.getElementById('first');
    var index2 = obj2.selectedIndex; //序号，取当前选中选项的序号
    var first = obj2.options[index2].value;
    var obj3 = document.getElementById('second');
    var index3 = obj3.selectedIndex; //序号，取当前选中选项的序号
    var second = obj3.options[index3].value;
    setCookie("name", name);
    $.ajax({
        type: "POST",
        url: "./signup.php",
        data: { name, scholar_num, phone, college, first, second, grade, sex, adjust, introduction },
        dataType: 'JSON',
        success: function (res) {
            if (!res.errcode) { $(".send").unbind("click"); window.location.assign("./success.html"); }
            else { $(".tips").html(res.msg); }
        }
    });
});