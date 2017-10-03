$(document).ready(function(){
	$(".small_imgs div img").on({
		mouseover:function(){
			$(this).css('cursor','pointer');
		},
		click:function(){
			var ImgUrl=$(this).attr("src");
			$('.slick-current').fadeOut(300,function(){
				$(this).attr('src',ImgUrl);
			}).fadeIn(500);
		}
	});

	$('.big_img').slick({
		autoplay:true,
		speed:1000
	});
});