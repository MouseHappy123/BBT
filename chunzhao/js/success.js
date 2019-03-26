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
$("#result1").html(name + " 同学:<br/>" + "&emsp;&emsp;恭喜你探险成功，并收获勋章<br/>一枚。期待你加入百步梯大家庭。");
$(".text").click(function () {
  window.location.assign("./selectmain.html");
});
