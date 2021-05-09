let menu1 = document.getElementById('menu1');
	let menu2 = document.getElementById('menu2');
	let menu3 = document.getElementById('menu3');

	/*
	let page3 = document.getElementById('p3_news');
	let page4 = document.getElementById('p4_titles');
	let page5 = document.getElementById('p5_tests');
	let page6 = document.getElementById('p6_books');
	let page7 = document.getElementById('p7_links');
	let page8 = document.getElementById('p8_histor');
	let page9 = document.getElementById('p9_other');
	*/

	let menuBut1 = document.getElementById('menuBut1');
	let menuBut2 = document.getElementById('menuBut2');
	let menuBut3 = document.getElementById('menuBut3');
	let butstat1;//\
	let butstat2;// | статусы для кнопок
	let butstat3;///

		//onmouseover наводится
		//mouseenter
		//onmouseout покидает
		//mouseleave

		//selected - выбранная страница в навигации(число от обработчика событий), status - запрос обработчика (открыть или закрыть)
		function Nav (selected, status) {
			if (status == 'open') {
				switch (selected) {
					case 1:
						menuBut1.style.visibility = 'visible'
					break;
					case 2:
						menuBut2.style.visibility = 'visible'
					break;
					case 3:
						menuBut3.style.visibility = 'visible'
					break;
				}
			} else if (status == 'close') {
				switch (selected) {
					case 1:
						menuBut1.style.visibility = 'hidden'
					break;
					case 2:
						menuBut2.style.visibility = 'hidden'
					break;
					case 3:
						menuBut3.style.visibility = 'hidden'
					break;
				}
			} else if  (selected == 0) {
				menuBut1.style.visibility = 'hidden'
				menuBut2.style.visibility = 'hidden'
				menuBut3.style.visibility = 'hidden'
			}
			return 0;
		};
		let o = 'open'
		let k = 'close'
		//less symbols and all be OK ;)

		menu1.addEventListener('mouseenter', function(){Nav(1, o)});
		menu2.addEventListener('mouseenter', function(){Nav(2, o)});
		menu3.addEventListener('mouseenter', function(){Nav(3, o)});
		
		menuBut1.addEventListener('mouseenter', function(){butstat1 = o});
		menuBut2.addEventListener('mouseenter', function(){butstat2 = o});
		menuBut3.addEventListener('mouseenter', function(){butstat3 = o});

		menuBut1.addEventListener('mouseleave', function(){
			Nav(1, k)
			butstat1 = k
		});
		menuBut2.addEventListener('mouseleave', function(){
			Nav(2, k)
			butstat2 = k
		});
		menuBut3.addEventListener('mouseleave', function(){
			Nav(3, k)
			butstat3 = k
		});

		/*доделать
		menu1.addEventListener('mouseleave', function(){
			if (butstat1 != o) {
				Nav(1, k)
			}
		});
		menu2.addEventListener('mouseleave', function(){
			if (butstat2 != o) {
				Nav(2, k)
			}
		});
		menu3.addEventListener('mouseleave', function(){
			if (butstat3 != o) {
				Nav(3, k)
			}
		});
		*/