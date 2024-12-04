$(function() {
    let timer = setInterval(function() {
        $(".brandNewsDetail ul").stop().animate({"margin-top": "-188px"}, 1000, function() {
            $(".brandNewsDetail li").first().appendTo(".brandNewsDetail ul");
            $(".brandNewsDetail ul").css({"margin-top": "0px"});
        });
    }, 3000);
});