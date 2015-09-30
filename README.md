# Gallery

### Gallery 구현 목표
- JavaScript를 이용하여 자동 회전이 가능한 갤러리 구현 `( jQuery 사용 X )`
- 주요 사용 함수
	- .querySelector() / .querySelectorAll()
	- .add() / .remve()
	- .getAttribute()

-

### 사고 과정

-

### 난관
- ui의 width와 그를 감싸고 있는 div의 width의 크기 설정 시
	해결: ul에 li의 모든 width의 크기를 합친 크기만 큼 width 설정
	        ul 을 감싸고 있는 div의 경우 화면에 보여주고 싶은 width 크기 설정

-

### 버전관리
- 갤러리에 출력되는 데이터 일정 길이 초과 시 '...' 처리 구현
- 갤러리에 출력되는 내용을 JSON 형태의 데이터로 만들어 동적으로 UI 구현
