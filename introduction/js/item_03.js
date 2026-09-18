// ============ 画面スライド
$("#wrapper").multiscroll({
	anchors: ['area1','area2','area3','area4'],
	menu: "#menu", 
	navigation: true, 
	navigationPosition: 'left',
	navigationTooltips: ["title","outline","detail","preview"],
	sectionsColor: ['#F7F7F7', '#F7F7F7', '#F7F7F7', '#F7F7F7'], 
	loopTop: true, 
	loopBottom: true
});

//4. 動画のモーダル
// $(".video-open").modaal({
// 	type: 'video',
// 	overlay_close:true,//モーダル背景クリック時に閉じるか
// 	background: '#28BFE7', // 背景色
// 	overlay_opacity:0.8, // 透過具合
// 	before_open:function(){// モーダルが開く前に行う動作
// 		$('html').css('overflow-y','hidden');/*縦スクロールバーを出さない*/
// 	},
// 	after_close:function(){// モーダルが閉じた後に行う動作
// 		$('html').css('overflow-y','scroll');/*縦スクロールバーを出す*/
// 	}
// });

// ============ モーダルウィンドウ
// $('.iframe').modaal({
//     type: 'iframe',
// 	width: 1260,
// 	height: 800,
//     overlay_close: true,
//     before_open:function(){
//       $.fn.multiscroll.setMouseWheelScrolling(false);
//     },
//     after_close:function(){
//       $.fn.multiscroll.setMouseWheelScrolling(true);
//     }
// });


// ============ モーダルウィンドウ
$('.video-open').modaal({
	type: 'inline', // インラインコンテンツとして読み込む
	width: 800,     // 必要に応じてモーダルの幅を指定
	after_open: function() {
		// モーダルが開いた時に動画を自動再生する場合
		$.fn.multiscroll.setMouseWheelScrolling(false);
		$('#my-video video').get(0).play();
		
	},
	after_close: function() {
		// モーダルが閉じた時に動画を停止する場合
		$.fn.multiscroll.setMouseWheelScrolling(true);
		$('#my-video video').get(0).pause();
		$('#my-video video').get(0).currentTime = 0; // 先頭に戻す
	}
});

