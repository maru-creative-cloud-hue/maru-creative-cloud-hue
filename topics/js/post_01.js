// ============ メニューボタン
$(".header-open").click(function(){
    $(this).toggleClass('active');
    $("#header-nav").toggleClass('panelactive');
});
// ============ メニューボタン/ナビゲーション
$("#header-nav a").click(function(){
    $("header-open").removeClass('active');
    $("header-nav").removeClass('panelactive');
});
// ============アコーディオンをクリックした時の動作
$('.title-02').on('click', function() {
    $('.box').slideUp(500);
    var findElm = $(this).next(".box");
    if($(this).hasClass('close')){
        $(this).removeClass('close'); 
    }else{
        $('.close').removeClass('close'); 
        $(this).addClass('close');
        $(findElm).slideDown(500);
    }
});
