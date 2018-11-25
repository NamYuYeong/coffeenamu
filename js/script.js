/* script.js */
$(function(){
	// 2단계 메뉴 닫기
	$('.depth2').hide();
	
	// 메뉴 열고 닫기(hover)
	$('.depth1 > li').hover(
		function(){
			$('.depth2')
				.stop()
				.slideDown(200);
		},
		function(){
			$('.depth2')
				.stop()
				.slideUp(200);
		}
	);
	
	// bxslider
	$('.slider').bxSlider({
		auto: true,
		mode: 'fade'
		
	});
	
	
	
});

//// sub 2 js


$(function(){
    $(".coffee1").hover({
        "mouseover":function(){
            $(".tiramisu").css({"background-color" : "black"});
        },
        "mouseout":function(){
            $(".tiramisu").css({"background-color" : "none"});
        }
    });

    $(".coffee1").hover(function(){
        $(".tiramisu").css({"background-color": "aqua"});
    }, function(){
        $(".tiramisu").css({"background" : "none"});
    });

});