$(window).on("scroll",function(){
    let sc = $(this).scrollTop();

    if(sc > 100){
        $("header").addClass("on");
        $(".floaing").addClass("on");
    } else {
        $("header").removeClass("on");
        $(".floaing").removeClass("on");
    };

    $("nav .menuBar").on("click", function(){
        $(this).toggleClass("active");

        $("nav .subBack").toggleClass("viewControl");

        $(".floaing").toggleClass("on");
    });

});