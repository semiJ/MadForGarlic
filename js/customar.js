$(function(){
    $(".customerDetailBtn li").on("click", function(){
        let i = $(this).index();

        $(".customerDetailBtn li").removeClass("m_btn");
        $(".customerDetailBtn li").eq(i).addClass("m_btn");

    });
})