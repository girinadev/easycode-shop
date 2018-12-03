$(function () {
    $("#newestproducts-tabs").tabs();
    $('.newestproducts__tabs-item-link').click(function(){
        $('.newestproducts__tabs-item-link').removeClass('newestproducts__tabs-item-link--active');
        $(this).addClass('newestproducts__tabs-item-link--active');
    });
  
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