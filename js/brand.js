$(function() {

    // brandnews 자동 슬라이드
    let timer = setInterval(function() {
        // 화면 크기를 확인하여 모바일 환경인지 확인
        let isMobile = window.innerWidth <= 767;
        
        // 모바일 환경에서는 margin-top을 -225px로, PC 환경에서는 -185px로 설정
        let marginTopValue = isMobile ? "-225px" : "-185px";
        
        $(".brandNewsDetail ul").stop().animate({"margin-top": marginTopValue}, 1000, function() {
            $(".brandNewsDetail li").first().appendTo(".brandNewsDetail ul");
            $(".brandNewsDetail ul").css({"margin-top": "0px"});
        });
    }, 3000);
    

    // brandconcept 움직임
});

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        let windowHeight = window.innerHeight;

        let elements = document.querySelectorAll(".moveLeft, .moveRight");

        elements.forEach(function (element) {

            element.style.transform = "translateX(0)";
                element.style.opacity = "1";
                element.style.transition = "all 2s ease-in-out";
        });
    });
});


