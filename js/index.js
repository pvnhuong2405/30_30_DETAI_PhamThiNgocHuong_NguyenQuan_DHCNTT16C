$(document).ready(()=> {
    $(window).scroll(()=> {
        if ($(this).scrollTop()) {
            $('.header-nav').addClass('sticky');
        }
        else {
            $('.header-nav').removeClass('sticky');
        }
    })
})