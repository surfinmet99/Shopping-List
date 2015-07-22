/*js*/
$(document).ready(function(){
	$("body").on("click", ".btn_sendMessage", function(){
		var item=$('#input').val();
		console.log('DEBUG item %o', item);
		var list_str='<li>'+item+'<div class="delete"><img src="images/delete.png"></div><div class="check"><img src="images/check.png"></div></li>';
		console.log('DEBUG item %o', list_str);
		var ul_obj=$('.ul_current');
		ul_obj.append(list_str);
		$('#input').val('');
	});

	$("body").keydown (function (e) {
			
			if (e.keyCode == 13) {
				var item=$('#input').val();
				var list_str='<li>'+item+'</div><div class="delete"><img src="images/delete.png"></div><div class="check"><img src="images/check.png"></div></li>';
				var ul_obj=$('.ul_current');
				ul_obj.append(list_str);
				$('#input').val('');
			}  	
	});
});

$(document).ready(function(){
	$('.ul_current').on('mouseenter', 'li', function(){
		$(this).children('.delete').show();
		$(this).children('.check').show();
	});

	
	$('.ul_current').on('mouseleave', 'li', function(){
		$(this).children('.delete').hide();
		$(this).children('.check').hide();
	});

	$('.ul_current').on('click', '.delete', function() {
		$(this).parent('li').remove();
	});

	$('.ul_current').on('click', '.check', function() {
		$(this).parent('li').toggleClass('checked');
	});

	$('.btn_reset').on('click', function(){
		$('.ul_current').empty();
	});


});

