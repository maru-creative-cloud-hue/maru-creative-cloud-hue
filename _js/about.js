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
    });

    // ============Muuriギャラリープラグイン設定
    var grid = new Muuri('.grid', {

    // ============アイテムの表示速度※オプション。入れなくても動作します
    showDuration: 600,
    showEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    hideDuration: 600,
    hideEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        
    // ============ アイテムの表示/非表示状態のスタイル※オプション。入れなくても動作します
    visibleStyles: {
        opacity: '1',
        transform: 'scale(1)'
    },
    hiddenStyles: {
        opacity: '0',
        transform: 'scale(0.5)'
    }    
    });

    // ============ 並び替えボタン設定
    $('.sort-btn li').on('click',function(){			// 並び替えボタンをクリックしたら
        $(".sort-btn .active").removeClass("active");	// 並び替えボタンに付与されているactiveクラスを全て取り除き
        var className = $(this).attr("class");			    // クラス名を取得
        className = className.split(' ');				    // 「sortXX active」のクラス名を分割して配列にする
        $("."+className[0]).addClass("active");			    // 並び替えボタンに付与されているクラス名とギャラリー内のリストのクラス名が同じボタンにactiveクラスを付与
        if(className[0] == "sort00"){					    // クラス名がsort00（全て）のボタンの場合は、
            // ============ grid.show('');					// 全ての要素を出す
            grid.filter("."+className[0]);
        }
        else{											    // それ以外の場合は
            grid.filter("."+className[0]); 				    // フィルターを実行
        }
    });

    var grid = new Muuri('.grid', {
    dragEnabled: true,
    // ============ ドラッグ時に少し移動させないとソートや移動が発火しないようにする設定
    dragStartPredicate: {
        distance: 10,
        delay: 100
    }
    });

    // ============ Fancyboxの設定
    $('[data-fancybox]').fancybox({
        thumbs: {
            autoStart: false // グループのサムネイル一覧をデフォルトで出す。不必要であればfalseに
        }	
    });

});
