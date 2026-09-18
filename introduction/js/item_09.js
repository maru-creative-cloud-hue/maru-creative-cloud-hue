// ============ 画面スライド
$("#wrapper").multiscroll({
	anchors: ['area1', 'area2', 'area3','area4'],
	menu: "#menu", 
	navigation: true, 
	navigationPosition: 'left',
	navigationTooltips: ["title","outline","detail","preview"],
	sectionsColor: ['#F7F7F7', '#F7F7F7', '#F7F7F7', '#F7F7F7'], 
	loopTop: true, 
	loopBottom: true
});

// ============ 画像のモーダル
$(".gallery").modaal({
	type: 'image',
	overlay_close: true,
	before_open:function(){
		$.fn.multiscroll.setMouseWheelScrolling(false);
	},
	after_close:function(){
		$.fn.multiscroll.setMouseWheelScrolling(true);
	}
});
