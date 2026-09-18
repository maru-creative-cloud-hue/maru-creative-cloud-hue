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
