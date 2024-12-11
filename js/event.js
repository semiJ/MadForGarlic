$(function() {
    let imageWidth = $(".eveTXT li img").outerWidth();
    let gap = 40;

    // 애니메이션 시작
    setInterval(function() {
        $(".eveTXT").css("transition", "transform 2s ease-in-out");
        $(".eveTXT").css("transform", "translateX(-" + (imageWidth + gap) + "px)");

        setTimeout(function() {
            $(".eveTXT li:first-child").appendTo(".eveTXT");  
            $(".eveTXT").css("transition", "none");
            $(".eveTXT").css("transform", "translateX(0)"); 

            setTimeout(function() {
                $(".eveTXT").css("transition", "transform 2s ease-in-out");
            }, 50); 
        }, 3000); 
    }, 4000);

    
});
