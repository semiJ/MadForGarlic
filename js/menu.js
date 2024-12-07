$(function(){
    $(".menuBtnDetail li").on("click", function(){
        let i = $(this).index();

        $(".mainMenuImg li h3").removeClass("menuTitle");
        $(".mainMenuImg li h3").eq(i).addClass("menuTitle");

        $(".mainMenuImg li").removeClass("m_on");
        $(".mainMenuImg li").eq(i).addClass("m_on");

        $(".menuBtnDetail li").removeClass("m_btn");
        $(".menuBtnDetail li").eq(i).addClass("m_btn");

        $(".subMenu li").removeClass("s_on");
        $(".subMenu li").eq(i).addClass("s_on");
        $("subMenu").removeClass("s_on");
        $(".subMenu").eq(i).addClass("s_on");
    });
}) 