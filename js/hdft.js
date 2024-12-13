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

    //플로팅 버튼 숨기기
    $("nav .menuBar").on("click", function(){
        $(this).toggleClass("rmv");
        
        $("#banner .floaing").toggleClass("rmv");
    });

    // footer top btn

    $(window).on("scroll", function(){
        let viewTop = $(this).scrollTop();
        // console.log(viewTop);

        if(viewTop >= 100) {
            $(".topBtn").addClass("ftTopbtn");
        } else {
            $(".topBtn").removeClass("ftTopbtn");
        };
    });

});