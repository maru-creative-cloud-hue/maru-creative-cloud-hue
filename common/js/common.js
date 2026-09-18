// // ============ マウスストーカー
// const stalker = document.getElementById('js-stalker');
// document.addEventListener('mousemove', function (e) {
//   const x = e.clientX;
//   const y = e.clientY;
//   // ============ transformで移動
//   stalker.style.transform = `translate(${x}px, ${y}px)`;
// });


// カーソル用のdivタグを取得してcursorに格納
var cursor = document.getElementById('js-stalker');
var mouseX = 0;
var mouseY = 0;
var posX = 0;
var posY = 0;

// カーソル用のdivタグをマウスに追従させる
document.addEventListener('mousemove', function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// アニメーションフレームを使用してスムーズに追従
function updateCursor() {
    posX += (mouseX - posX) * 0.5;
    posY += (mouseY - posY) * 0.5;
    cursor.style.transform = 'translate(' + posX + 'px, ' + posY + 'px)';
    requestAnimationFrame(updateCursor);
}
updateCursor();

// リンクにホバーした時にクラス追加、離れたらクラス削除
var link = document.querySelectorAll('a');
for (var i = 0; i < link.length; i++) {
    link[i].addEventListener('mouseover', function (e) {
        cursor.classList.add('cursor--hover');
    });
    link[i].addEventListener('mouseout', function (e) {
        cursor.classList.remove('cursor--hover');
    });
}
