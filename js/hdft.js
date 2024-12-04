$(window).on("scroll",function(){
    let sc = $(this).scrollTop();

    if(sc > 100){
        $("header").addClass("on");
    } else {
        $("header").removeClass("on");
    };

    $("nav .menuBar").on("click", function(){
        $(this).toggleClass("active");
        $("nav .subBack").toggleClass("viewControl");
    });

});