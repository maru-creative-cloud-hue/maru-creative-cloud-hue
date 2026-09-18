// ============ 画面スライド
$("#wrapper").multiscroll({      
    anchors: ['area1','area2','area3','area4','area5'],
    menu: "#menu", 
    navigation: true, 
    navigationPosition: 'left',
    navigationTooltips: ["title","outline","detail","preview","preview"],
    sectionsColor: ['#F7F7F7', '#F7F7F7', '#F7F7F7', '#F7F7F7', '#F7F7F7'], 
    loopTop: true, 
    loopBottom: true
});

// ============ モーダルウィンドウ
$('.iframe').modaal({
    type: 'iframe',
    width: 1440,
    height: 800,
      overlay_close: true,
      before_open:function(){
        $.fn.multiscroll.setMouseWheelScrolling(false);
      },
      after_close:function(){
        $.fn.multiscroll.setMouseWheelScrolling(true);
      }
});

// ============ モーダルウィンドウ
$('.mobile-iframe').modaal({
    type: 'iframe',
    width: 390,
    height: 844,
      overlay_close: true,
      before_open:function(){
        $.fn.multiscroll.setMouseWheelScrolling(false);
      },
      after_close:function(){
        $.fn.multiscroll.setMouseWheelScrolling(true);
      }
});