$(function () {
    $("#newestproducts-tabs").tabs();
    $('.newestproducts__tabs-item-link').click(function(){
        $('.newestproducts__tabs-item-link').removeClass('newestproducts__tabs-item-link--active');
        $(this).addClass('newestproducts__tabs-item-link--active');
    });
});