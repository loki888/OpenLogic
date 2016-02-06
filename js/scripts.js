
$(document).ready(function(){
	$('submenu_list:has(subsubmenu)').hover(function(e){   //Пофіксити - непрацює
		$(".triangle_right").css('display' , 'block');
	});
	
	
		$('.menu_list__item___ancor').click(function(e){
		$('.menu_list').find('a').removeClass('active');
		$(this).closest('a:first-child').addClass('active');
 		e.preventDefault();
		});
	
$('.accordeon_conteiner').click(function(e){				//Перший вкладений акордеон
		$(".accordeon").addClass('show');
		e.preventDefault();
	});

	$('.accordeon_conteiner').click(function(e){				//Перший вкладений акордеон
		$(".accordeon").addClass('show');
		e.preventDefault();
	});
	
		$('.subaccordeon_conteiner').click(function(e){		//Другий  вкладений акордеон
		$(".subaccordeon").addClass('show');
		e.preventDefault();
	});
	
	$('.menu_list__item___ancor:not(accordeon, subaccordeon)').click(function(e){ 
		$(".accordeon,.subaccordeon").removeClass('show');
		e.preventDefault();
		});												//при натисненні на вкладку меню (вищого порядку) акордеон деактивується
});




