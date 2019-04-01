var phpPath = "./change_info.php";
var nameReg = /^[\u0391-\uFFE5]+$/;
var phoneReg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
var dormReg = /^C([1-9]|1[0-9]) *(东|西)? *-? *[1-9][0-9]{2} *$/i;
var phpPath1 = "./signup.php";
var htmlPath2 = "./success.html";
var htmlPath1 = "./selectmain.html";
var phpPath2 = "./search.php";
function Is(style, str, judge) {
    switch (judge) {
        case 1:
            switch (style) {
                case 'chinese':
                    if (str.length != 0) {
                        if (!nameReg.test(str)) {
                            $(".tips").html("对不起，您输入的名字格式不正确!");
                            return false;
                        }
                        else return true;
                    }
                    else { $(".tips").html("信息未完善，请填完!"); return false; }
                    break;
                case 'phone':
                    if (str.length != 0) {
                        if (!phoneReg.test(str)) {
                            $(".tips").html("对不起，您输入的手机格式不正确!");
                            return false;
                        }
                        else return true;
                    } else { $(".tips").html("信息未完善，请填完!"); return false; }
                    break;
                case 'dorm':
                    if (str.length != 0) {
                        if (!dormReg.test(str)) {
                            $(".tips").html("对不起，您输入的宿舍格式不正确!");
                            return false;
                        }
                        else return true;
                    } else { $(".tips").html("信息未完善，请填完!"); return false; }
                    break;
            }
            break;
        case 0:
            switch (style) {
                case 'chinese':
                    if (str.length != 0) {
                        if (!nameReg.test(str)) {
                            alert("对不起，您输入的名字格式不正确!");
                            return false;
                        }
                        else return true;
                    }
                    else { alert("信息未完善，请填完!"); return false; }
                    break;
                case 'phone':
                    if (str.length != 0) {
                        if (!phoneReg.test(str)) {
                            alert("对不起，您输入的手机格式不正确!");
                            return false;
                        }
                        else return true;
                    } else { alert("信息未完善，请填完!"); return false; }
                    break;
                case 'dorm':
                    if (str.length != 0) {
                        if (!dormReg.test(str)) {
                            alert("对不起，您输入的宿舍格式不正确!");
                            return false;
                        }
                        else return true;
                    } else { alert("信息未完善，请填完!"); return false; }
                    break;
            }
            break;
    }
}
function getval(str) {
    var string = document.getElementById(str).value.trim();
    return string;
}
function getoption(str) {
    var string = document.getElementById(str);
    var index = string.selectedIndex;
    var val = string.options[index].value;
    return val;
}