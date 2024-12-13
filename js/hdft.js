$(function(){
    $("nav .menuBar").on("click", function(){
        $(this).toggleClass("active");
    });
    
    $("nav .menuBar").on("click",function(){
        $(".subBack").toggleClass("viewControl");
    });
    
    
    $(window).on("scroll",function(){
        // subMenu bar 클릭 이벤트  
        let sc = $(this).scrollTop();
    
        if(sc > 100){
            $("header").addClass("on");
        } else {
            $("header").removeClass("on");
        };
    
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
})