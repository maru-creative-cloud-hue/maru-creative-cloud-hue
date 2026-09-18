// ============ ロード画面
$(window).on('load',function(){
    $("#splash-logo").delay(0).fadeOut('slow');
    $("#splash").delay(0).fadeOut('slow',function(){
    $('body').addClass('appear');
    });
    // ============ 画面遷移後
    $('.splashbg').on('animationend', function() { 
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
        // ============ モーダルウィンドウ
        $(".info").modaal({
        	overlay_close:true,
        	before_open:function(){
        		$('html').css('overflow-y','hidden');
        	},
        	after_close:function(){
                $('html').css('overflow-y','hidden');
        	}
        });
    });
});

