$(function(){
    $(".menuBtnDetail li").on("click", function(){
        let i = $(this).index();

        $(".mainMenuImg li").removeClass("m_on");
        $(".mainMenuImg li").eq(i).addClass("m_on");

        $(".mainMenuImg li h3").removeClass("menuTitle");
        $(".mainMenuImg li h3").eq(i).addClass("menuTitle");

        $(".menuBtnDetail li").removeClass("m_btn");
        $(".menuBtnDetail li").eq(i).addClass("m_btn");
    })
})