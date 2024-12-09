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

    // 메뉴 디스크립션 열릴 때 높이 변경
    $(".mainMenuPasta li, .mainMenuSteak li, .mainMenuPizza li").on("click", function(){
        let i = $(this).index();

        $(".subMenu").removeClass("hei");
        $(".subMenu").addClass("hei");
        
    });

    // 파스타 메뉴 클릭 시 디스크립션 노출
    $(".pasat .mainMenuPasta li").on("click", function () {
        let i = $(this).index();
        let section = $(this).closest(".pasat");

        let parentClass = $(this).closest("ol").attr("class");
        let targetClass = parentClass.match(/mainPastaMove\d+/)[0].replace("mainPastaMove", "subPastaView");

        let target = section.find(`.${targetClass} li`).eq(i);

        // 파스타 디스크립션 열기/닫기
        if (target.hasClass("origin")) {
            target.removeClass("origin");
            section.find(".subMenuPasta").removeClass("origin");
        } else {
            $(".pasat .subMenuPasta li").removeClass("origin");
            section.find(".subMenuPasta li").removeClass("origin");
            target.addClass("origin");
            section.find(".subMenuPasta").addClass("origin");

            // 다른 메뉴가 열려 있으면 닫기
            $(".pizza .subMenuPizza li").removeClass("origin");
            $(".steak .subMenuSteak li").removeClass("origin");
            $(".signature .subSignatureSet li").removeClass("origin");
        }
    });

    // 스테이크 메뉴 클릭 시 디스크립션 노출
    $(".steak .steakSection li").on("click", function () {
        let i = $(this).index();
        let section = $(this).closest(".steak");

        let parentClass = $(this).closest("ol").attr("class");
        let targetClass = parentClass.match(/mainSteakMove\d+/)[0].replace("mainSteakMove", "subSteakView");

        let target = section.find(`.${targetClass} li`).eq(i);

        // 스테이크 디스크립션 열기/닫기
        if (target.hasClass("origin")) {
            target.removeClass("origin");
            section.find(".subMenuSteak").removeClass("origin");
        } else {
            $(".steak .subMenuSteak li").removeClass("origin");
            section.find(".subMenuSteak li").removeClass("origin");
            target.addClass("origin");
            section.find(".subMenuSteak").addClass("origin");

            // 다른 메뉴가 열려 있으면 닫기
            $(".pasat .subMenuPasta li").removeClass("origin");
            $(".pizza .subMenuPizza li").removeClass("origin");
            $(".signature .subSignatureSet li").removeClass("origin");
        }
    });

    // 피자 메뉴 클릭 시 디스크립션 노출
    $(".pizza .pizzaSection li").on("click", function () {
        let i = $(this).index();
        let section = $(this).closest(".pizza");

        let parentClass = $(this).closest("ol").attr("class");
        let targetClass = parentClass.match(/mainPizzaMove\d+/)[0].replace("mainPizzaMove", "subPizzaView");

        let target = section.find(`.${targetClass} li`).eq(i);

        // 피자 디스크립션 열기/닫기
        if (target.hasClass("origin")) {
            target.removeClass("origin");
            section.find(".subMenuPizza").removeClass("origin");
        } else {
            $(".pizza .subMenuPizza li").removeClass("origin");
            section.find(".subMenuPizza li").removeClass("origin");
            target.addClass("origin");
            section.find(".subMenuPizza").addClass("origin");

            // 다른 메뉴가 열려 있으면 닫기
            $(".pasat .subMenuPasta li").removeClass("origin");
            $(".steak .subMenuSteak li").removeClass("origin");
            $(".signature .subSignatureSet li").removeClass("origin");
        }
    });

    // 스테이크 세트 메뉴 클릭 시 디스크립션 노출
    $(".signature .signatureSection li").on("click", function () {
        let i = $(this).index();
        let section = $(this).closest(".signature");

        let parentClass = $(this).closest("ol").attr("class");
        let targetClass = parentClass.match(/signatureSetMove\d+/)[0].replace("signatureSetMove", "signatureSubMenuView");

        let target = section.find(`.${targetClass} li`).eq(i);

        // 세트 메뉴 디스크립션 열기/닫기
        if (target.hasClass("origin")) {
            target.removeClass("origin");
            section.find(".subSignatureSet").removeClass("origin");
        } else {
            $(".signature .subSignatureSet li").removeClass("origin");
            section.find(".subSignatureSet li").removeClass("origin");
            target.addClass("origin");
            section.find(".subSignatureSet").addClass("origin");

            // 다른 메뉴가 열려 있으면 닫기
            $(".pasat .subMenuPasta li").removeClass("origin");
            $(".pizza .subMenuPizza li").removeClass("origin");
            $(".steak .subMenuSteak li").removeClass("origin");
        }
    });

}) 