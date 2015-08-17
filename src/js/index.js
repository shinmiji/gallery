var button_list = document.querySelectorAll('.button_area > a');
var button_list_leng = button_list.length;
var business = document.querySelectorAll('ul > li');
var business_leng = business.length;
var business_ul = document.querySelector('ul');
var business_li_size = 407;

// ul의 width값을 li의 갯수를 고려하여 동적으로 할당.
business_ul.style['width'] = business_li_size*business.length+'px';

// li안에 있는 a태그에 onclick 이벤트 설정.
for (var i=button_list_leng-1 ; i >-1; i--) {
	var button = button_list[i];
	button.onclick = buttonController.bind(button);
}

// click 하였을 때 실행되는 함수
function buttonController() {
	for (var i = 0 ; i < button_list_leng; i++) {
		var class_list = button_list[i].getAttribute('class');
		var _class_list = (class_list || ' ').split(' ');

		for (var j = _class_list.length-1 ;j >-1 ; j--) {
			if (_class_list[j] === 'on') {
				button_list[i].classList.remove('on');
			}	
		}
		this.classList.add('on');
	}	

	var on_class = this.getAttribute('class');
	
	var _on_class_ = on_class.split(' ');

	for (var i = _on_class_.length-1 ; i >-1; i--) {
		switch(_on_class_[i]) {
			case 'btn1':
				business_ul.style['left'] = business_li_size*(-0)+'px';
				break;
			case 'btn2':
				business_ul.style['left'] = business_li_size*(-3)+'px';
				break;
			case 'btn3':
				business_ul.style['left'] = business_li_size*(-6)+'px';
				break;
			case 'btn4':
				business_ul.style['left'] = business_li_size*(-9)+'px';
				break;
		}
	}
	return false;
}