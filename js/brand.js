$(function() {

    function resizeVideo() {
        const video = document.querySelector('#brandVideo iframe');
        const aspectRatio = 16 / 9; // 동영상 기본 비율
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        if (windowWidth / windowHeight < aspectRatio) {
            // 세로가 더 긴 경우, 높이를 기준으로 너비 조정
            video.style.width = `${windowHeight * aspectRatio}px`;
            video.style.height = `${windowHeight}px`;
        } else {
            // 가로가 더 긴 경우, 너비를 기준으로 높이 조정
            video.style.width = `${windowWidth}px`;
            video.style.height = `${windowWidth / aspectRatio}px`;
        }
    }

    window.addEventListener('resize', resizeVideo);
    window.addEventListener('load', resizeVideo);

    let timer = setInterval(function() {
        $(".brandNewsDetail ul").stop().animate({"margin-top": "-188px"}, 1000, function() {
            $(".brandNewsDetail li").first().appendTo(".brandNewsDetail ul");
            $(".brandNewsDetail ul").css({"margin-top": "0px"});
        });
    }, 3000);
});