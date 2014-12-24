$(function(){
		$('a[rel*=leanModal]').leanModal({
top: 200,                     // モーダルウィンドウの縦位置を指定
overlay : 0.0,               // 背面の透明度 
closeButton: ".modal_close"  // 閉じるボタンのCSS classを指定
});
		/*
		$(".slider img:first").imagesLoaded(function(){

			$('.slider').bxSlider({
auto: true
});
			});
			*/
		$('.flexslider').flexslider({
slideshow:true
});

		var nav = $('#navigation');
		var bt = $("header").offset().top; 
		var ds = 0;

		$(document).scroll(function(){ 
			ds = $(this).scrollTop(); 

			if (bt <= ds) {  
			$("header").addClass('follow'); 
			} else if (bt >= ds) { 
			$("header").removeClass('follow'); 
			}
			});


$('a[href^=#]').click(function() {
		// スクロールの速度
		var speed = 400; // ミリ秒
		// アンカーの値取得
		var href= $(this).attr("href");
		// 移動先を取得
		var target = $(href == "#" || href == "" ? 'html' : href);
		// 移動先を数値で取得
		var position = target.offset().top;
		// スムーススクロール
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
		});
});


