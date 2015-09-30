
;(function(global, $, undefined){
	'use strict';

	var $business = $('.business > ul');
	var $business_contents = $('li', $business);

	var $button = $('.button_area > a');
	var $target = $button.first();

	var view_size = parseInt($('.business').css('width'));
	var business_contents_size = parseInt($business_contents.css('width'));
	var currentIndex = 1;
	var timeID = -1;


	// ul의 width값을 li의 갯수를 고려하여 동적으로 할당.
	$business.css('width', business_contents_size*$business_contents.length+'px');


	initFunction();

	function initFunction() {

		// slide auto play
		slideAutoPlay('start');

		// 버튼에 onclick 이벤트 설정.
		$button.on('click', function(){
			buttonClickEvent.call(this, event);
		});

		// 갤러리에 마우스 올릴 경우 슬라이드 정지
		$business.on('mouseenter', function() {
			slideAutoPlay('stop');
		});

		// 갤러리에서 마우스 벗어날 경우 슬라이드 재생
		$business.on('mouseleave', function() {
			slideAutoPlay('start');
		});

	};

	// slide auto play
	function slideAutoPlay(action) {
		if(action === 'start') {
			timeID = setInterval(function(){
					$business.animate(
						{'margin-left': '-'+view_size*currentIndex+'px'},
						'slow'
					);
					$target.removeClass('on');
					$target = $button.eq(currentIndex);
					$target.addClass('on');

					if(currentIndex === 3) {
						currentIndex =0;
					}
					else {
						currentIndex++;
					}
				}, 3000);
		} else {
			clearInterval(timeID);
		}
	
	};

	// 버튼 클릭 시 슬라이드 이동
	function buttonClickEvent(event) {
		event.preventDefault();
		$target.removeClass('on');
		$target = $(this);
		$target.addClass('on');
		currentIndex = $target.index();
		$business.animate(
			{'margin-left': '-'+view_size*currentIndex+'px'},
			'slow'
		);
	};
})(window, window.jQuery);