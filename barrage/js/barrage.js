var isShow = true;
var fontcolor = "white";
var fontSize = Math.floor(Math.random() * 24) + "px";
var up="70px";
$("#white").click(function () {
    fontcolor = "white";
    $("#white").addClass("active1");
    $("#red").removeClass("active1");
    $("#blue").removeClass("active1");
    $("#green").removeClass("active1");
    $("#purple").removeClass("active1");
    $("#yellow").removeClass("active1");
});
$("#red").click(function () {
    fontcolor = "red";
    $("#red").addClass("active1");
    $("#white").removeClass("active1");
    $("#blue").removeClass("active1");
    $("#green").removeClass("active1");
    $("#purple").removeClass("active1");
    $("#yellow").removeClass("active1");
});
$("#blue").click(function () {
    fontcolor = "blue";
    $("#blue").addClass("active1");
    $("#red").removeClass("active1");
    $("#white").removeClass("active1");
    $("#green").removeClass("active1");
    $("#purple").removeClass("active1");
    $("#yellow").removeClass("active1");
});
$("#green").click(function () {
    fontcolor = "green";
    $("#green").addClass("active1");
    $("#red").removeClass("active1");
    $("#blue").removeClass("active1");
    $("#white").removeClass("active1");
    $("#purple").removeClass("active1");
    $("#yellow").removeClass("active1");
});
$("#purple").click(function () {
    fontcolor = "purple";
    $("#purple").addClass("active1");
    $("#red").removeClass("active1");
    $("#blue").removeClass("active1");
    $("#green").removeClass("active1");
    $("#white").removeClass("active1");
    $("#yellow").removeClass("active1");
});
$("#yellow").click(function () {
    fontcolor = "yellow";
    $("#yellow").addClass("active1");
    $("#red").removeClass("active1");
    $("#blue").removeClass("active1");
    $("#green").removeClass("active1");
    $("#purple").removeClass("active1");
    $("#white").removeClass("active1");
});
$(".sm").click(function () {
    fontSize = "10px";
    $(".sm").addClass("active");
    $(".s").removeClass("active");
    $(".m").removeClass("active");
    $(".l").removeClass("active");
});
$(".s").click(function () {
    fontSize = "15px";
    $(".s").addClass("active");
    $(".sm").removeClass("active");
    $(".m").removeClass("active");
    $(".l").removeClass("active");
});
$(".m").click(function () {
    fontSize = "20px";
    $(".m").addClass("active");
    $(".s").removeClass("active");
    $(".sm").removeClass("active");
    $(".l").removeClass("active");
});
$(".l").click(function () {
    fontSize = "25px";
    $(".l").addClass("active");
    $(".s").removeClass("active");
    $(".m").removeClass("active");
    $(".sm").removeClass("active");
});
$(".sends").click(function () {
    $(".sends").addClass("active");
    $(".comments").removeClass("active");
    $(".sendbarrage").css("visibility", "visible");
    $(".comment").css("visibility", "hidden");
    $("#one").replaceWith("<img id=\"one\"src=\"./barrage2.png\"style=\"width:20px;\"/>");
    $("#two").replaceWith("<img id=\"two\"src=\"./comment1.png\"style=\"width:20px;\"/>");
});
$(".comments").click(function () {
    $(".comments").addClass("active");
    $(".sends").removeClass("active");
    $(".sendbarrage").css("visibility", "hidden");
    $(".comment").css("visibility", "visible");
    $("#two").replaceWith("<img id=\"two\"src=\"./comment2.png\"style=\"width:20px;\"/>");
    $("#one").replaceWith("<img id=\"one\"src=\"./barrage1.png\"style=\"width:20px;\"/>");
});
$(".middle").click(function () {
    up="70px";
    $(".middle").addClass("active");
    $(".up").removeClass("active");
    $(".down").removeClass("active");
    $("#middle").replaceWith("<img id=\"middle\"src=\"./middle2.png\"style=\"width:20px;\"/>");
    $("#up").replaceWith("<img id=\"up\"src=\"./up1.png\"style=\"width:20px;\"/>");
    $("#down").replaceWith("<img id=\"down\"src=\"./down1.png\"style=\"width:20px;\"/>");
});
$(".up").click(function () {
    up="10px";
    $(".up").addClass("active");
    $(".middle").removeClass("active");
    $(".down").removeClass("active");
    $("#up").replaceWith("<img id=\"up\"src=\"./up2.png\"style=\"width:20px;\"/>");
    $("#middle").replaceWith("<img id=\"middle\"src=\"./middle1.png\"style=\"width:20px;\"/>");
    $("#down").replaceWith("<img id=\"down\"src=\"./down1.png\"style=\"width:20px;\"/>");
});
$(".down").click(function () {
    up="130px";
    $(".down").addClass("active");
    $(".up").removeClass("active");
    $(".middle").removeClass("active");
    $("#down").replaceWith("<img id=\"down\"src=\"./down2.png\"style=\"width:20px;\"/>");
    $("#up").replaceWith("<img id=\"up\"src=\"./up1.png\"style=\"width:20px;\"/>");
    $("#middle").replaceWith("<img id=\"middle\"src=\"./middle1.png\"style=\"width:20px;\"/>");
});
$(".clear").on("click", function () {
    if (isShow) {
        $(".bullet").css("opacity", 0);
        isShow = false;
    } else {
        $(".bullet").css("opacity", 1);
        isShow = true;
    }
});
function createBarrage(text) {
    var jqueryDom = $("<div class='bullet'>" + text + "</div>");
    var left = $(".screen_container").width() + "px";
    jqueryDom.css({
        "position": 'absolute',
        "color": fontcolor,
        "font-size": fontSize,
        "left": left,
        "top": up,
        "white-space": 'nowrap',
    });
    $(".screen_container").append(jqueryDom);
    return jqueryDom;
}
function addInterval(jqueryDom) {
    var left = jqueryDom.offset().left - $(".screen_container").offset().left;
    var timer = setInterval(function () {
        left--;
        jqueryDom.css("left", left + "px");
        if (jqueryDom.offset().left + jqueryDom.width() < $(".screen_container").offset().left) {
            jqueryDom.remove();
            clearInterval(timer);
        }
    }, 10);

}