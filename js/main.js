$(function(){
    gsap.registerPlugin(ScrollTrigger);

    //banner 이미지 자동 슬라이드

    let panel = document.querySelectorAll(".bannerPanel li"), 
    bnnavi = document.querySelectorAll(".bannerPanelnavi li"),
    bnprev = document.querySelector(".bnprev"),
    bnnext = document.querySelector(".bnnext");
    
    let total = panel.length - 1;
    
    let i = 0;

    function style(){
        for(let reItem of panel){
            reItem.classList.remove("view");
        }
        for(let againItem of bnnavi){
        againItem.classList.remove("bnlist");
        }

        panel[i].classList.add("view");
        bnnavi[i].classList.add("bnlist");
    }
    
    function slide(){
        start = setInterval(function(){
            if(i == total){
                i = 0;
            } else{
                i++;
            }
            style();
        }, 3000)
    }

    slide();

    // 다음, 이전 버튼
    bnnext.addEventListener("click", function() {
        clearInterval(start);
        if(i == total){
            i = 0;
        } else{
            i++;
        }
        style();
        slide();
    })
    
    bnprev.addEventListener("click", function() {
        clearInterval(start);
        if(i == 0){
            i = total;
        } else {
            i = --i;
        }
        style();
        slide();
    })
    
    // 네비 버튼
    bnnavi.forEach(function (item, index) {
        item.addEventListener("click",() => {
            clearInterval(start);

            i = index;
            
            style();
            slide();
        })
    })

    // 메뉴 영역
    // const mainMenuls = document.querySelectorAll(".upImg");

    // let sr = gsap.timeline({
    //     scrollTrigger : {
    //         trigger: "#mainMenu",
    //         pin: true,
    //         scrub: 1,
    //         start: "top top",
    //         end: "+=600%",
    //         markers: false,
    //     }
    // });

    // sr.from(mainMenuls, {
    //     Y: "400%",
    //     duration:"5",
    //     ease: "none",
    //     stagger:"3",
    //     opacity: "0",
    // });

    $(".mainMenuList li").on("mouseenter", function(){
        let i = $(this).index();
        $(".mainMenuList li").eq(i).addClass("menuView");
    });

    $(".mainMenuList li").on("mouseleave", function(){
        let i = $(this).index();
        $(".mainMenuList li").removeClass("menuView");
    })

    // brand concept 영역
    let brandSum = $(".mainBrandConcept li").length;
    let lang = 1;

    setInterval(function () {
      if (lang == brandSum - 1) {
        lang = 0;
      } else {
        lang++;
      }
  
      $(".mainBrandConcept li").stop().fadeOut();
      $(".mainBrandConcept li").eq(i).stop().fadeIn();

      $(".mainBrandConcept li img").removeClass("moveBrand");
      $(".mainBrandConcept li img").eq(i).addClass("moveBrand");

    }, 800);

    // storeSearch 영역

    let users = document.querySelector("#stSearch");
    let btn = document.querySelector("#searchUser");

        btn.addEventListener("click", function(){
            let message = users.value;

            let result = message == "" ? alert("글자를 입력해주세요") : alert(message);

        });

        users.addEventListener("focus",function(){
            users.value = "";
        });






})