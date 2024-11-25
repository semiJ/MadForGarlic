$(function(){
    let baseline = -800;

    let banner = $("#banner").offset().top + baseline;
    let mainMenu = $("#mainMenu").offset().top + baseline;
    let mainBrand = $("#mainBrand").offset().top + baseline;
    let mainMembership = $("#mainMembership").offset().top + baseline;
    let mainEvent = $("#mainEvent").offset().top + baseline;
    let mainCustomer = $("#mainCustomer").offset().top + baseline;
    let ft = $("footer").offset().top + baseline;

    $(window).on("scroll", function(){
        let sc = $(this).scrollTop();

        if(sc >= banner) {
            $("header img .mainlogo01").addClass("on");
            $("header img .mainlogo02").addClass("on");
        } else {
            $("header img .mainlogo01").removeClass("on");
            $("header img .mainlogo02").removeClass("on");
        };
    });
})