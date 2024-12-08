$(function(){
    $(".menuBtnDetail li").on("click", function(){
        let i = $(this).index();

        $(".mainMenuImg li h3").removeClass("menuTitle");
        $(".mainMenuImg li h3").eq(i).addClass("menuTitle");

        $(".mainMenuImg li").removeClass("m_on");
        $(".mainMenuImg li").eq(i).addClass("m_on");

        $(".menuBtnDetail li").removeClass("m_btn");
        $(".menuBtnDetail li").eq(i).addClass("m_btn");

        $(".mainMenuList > li").removeClass("s_on");
        $(".mainMenuList > li").eq(i).addClass("s_on");
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
    
    
    $(".steak .steakSection li").on("click", function () {
        let i = $(this).index();
        let section = $(this).closest(".steak");
    
        
        let parentClass = $(this).closest("ol").attr("class");
        let targetClass = parentClass.match(/mainSteakMove\d+/)[0].replace("mainSteakMove", "subSteakView");
    
        let target = section.find(`.${targetClass} li`).eq(i);
    
        if (target.hasClass("origin")) {
            target.removeClass("origin");
        } else {
            $(".steak .subMenuSteak li").removeClass("origin");
            target.addClass("origin");
        }
    });

    $(".pizza .pizzaSection li").on("click", function () {
        let i = $(this).index();
        let section = $(this).closest(".pizza");
    
        
        let parentClass = $(this).closest("ol").attr("class");
        let targetClass = parentClass.match(/mainPizzaMove\d+/)[0].replace("mainPizzaMove", "subPizzaView");
    
        let target = section.find(`.${targetClass} li`).eq(i);
    
        if (target.hasClass("origin")) {
            target.removeClass("origin");
        } else {
            $(".pizza .subMenuPizza li").removeClass("origin");
            target.addClass("origin");
        }
    });

    $(".steaks .steaksSection li").on("click", function () {
        let i = $(this).index();
        let section = $(this).closest(".steaks");
    
        
        let parentClass = $(this).closest("ol").attr("class");
        let targetClass = parentClass.match(/steakSetMove\d+/)[0].replace("steakSetMove", "subSetMenuView");
    
        let target = section.find(`.${targetClass} li`).eq(i);
    
        if (target.hasClass("origin")) {
            target.removeClass("origin");
        } else {
            $(".steaks .setSubMenu li").removeClass("origin");
            target.addClass("origin");
        }
    });
    
}) 