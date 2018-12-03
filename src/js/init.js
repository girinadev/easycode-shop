$(function() {
    
    (function () {
        let nav = $('.main-menu__nav');

        $('.header__menu-btn').click(function() {
            if(nav.hasClass('active')) {
                nav.removeClass('active');
            }
            else {
                nav.addClass('active');
            }
        });
    }());

});