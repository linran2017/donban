$(function(){
	var timer;
	$('.back').click(function(){
		timer=setInterval(function(){
			$(window).scrollTop($(window).scrollTop()-50);
			if($(window).scrollTop()==0){
				clearInterval(timer);
			}
		},10)
	})
	$(window).scroll(function(){
		if($(window).scrollTop()<=150){
			$('.back').hide(500);
		}else{
			$('.back').show(500);
		}
	})
})
