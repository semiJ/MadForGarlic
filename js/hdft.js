$(window).on("scroll",function(){
    let sc = $(this).scrollTop();

    if(sc > 100){
        $("header").addClass("on");
        $(".floaing").addClass("rmv");
    } else {
        $("header").removeClass("on");
        $(".floaing").removeClass("rmv");
    };

    $("nav .menuBar").on("click", function(){
        $(this).toggleClass("active");
        $("nav .subBack").toggleClass("viewControl");
    });

});