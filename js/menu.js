$(function(){
    $(".menuBtnDetail li").on("click", function(){
        let i = $(this).index();

        $(".mainMenuImg li h3").removeClass("menuTitle");
        $(".mainMenuImg li h3").eq(i).addClass("menuTitle");

        $(".mainMenuImg li").removeClass("m_on");
        $(".mainMenuImg li").eq(i).addClass("m_on");

        $(".menuBtnDetail li").removeClass("m_btn");
        $(".menuBtnDetail li").eq(i).addClass("m_btn");
    });

    $(".pasat .mainMenuPasta li").on("click", function () {
        let i = $(this).index();
        let section = $(this).closest(".pasat");
    
        
        let parentClass = $(this).closest("ol").attr("class");
        let targetClass = parentClass.match(/mainPastaMove\d+/)[0].replace("mainPastaMove", "subPastaView");
    
        let target = section.find(`.${targetClass} li`).eq(i);
    
        if (target.hasClass("origin")) {
            target.removeClass("origin");
        } else {
            $(".pasat .subMenuPasta li").removeClass("origin");
            target.addClass("origin");
        }
    });
    
    
    
}) 