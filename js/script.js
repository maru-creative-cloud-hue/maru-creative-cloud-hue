$(window).on('load',function(){
    $("#splash-logo").delay(6000).fadeOut('slow');
    $("#splash").delay(2000).fadeOut('slow',function(){
        $('body').addClass('appear');
    });

    // ============ 画面遷移後
    $('.splashbg').on('animationend', function() { 
        // ============ ヘッダー/メニューボタン
        $(".header-open").click(function(){
            $(this).toggleClass('active');
            $("#header-nav").toggleClass('panelactive');
        });
        // ============ ヘッダー/メニューボタン/ナビゲーション
        $("#header-nav a").click(function(){
            $("header-open").removeClass('active');
            $("header-nav").removeClass('panelactive');
        });
    });
});