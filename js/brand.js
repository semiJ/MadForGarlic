$(function() {

    // brandnews 자동 슬라이드
    let timer = setInterval(function() {
        $(".brandNewsDetail ul").stop().animate({"margin-top": "-185px"}, 1000, function() {
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
            let elementTop = element.getBoundingClientRect().top;
            let elementBottom = element.getBoundingClientRect().bottom;
            let elementVisible = windowHeight * 0.9;

            if (elementTop < elementVisible && elementBottom > 0) {
               
                element.style.transform = "translateX(0)";
                element.style.opacity = "1";
                element.style.transition = "all 1.5s ease-in-out";
            } else {
                
                if (element.classList.contains("moveLeft")) {
                    element.style.transform = "translateX(-150%)";
                } else if (element.classList.contains("moveRight")) {
                    element.style.transform = "translateX(150%)";
                }
                element.style.opacity = "0";
                element.style.transition = "none";
            }
        });
    });
});


