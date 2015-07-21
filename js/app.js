/*js*/
$(document).ready(function(){
	$("body").on("click", ".btn_sendMessage", function(){
		var item=$('#input').val();
		console.log('DEBUG item %o', item);
		var list_str='<li>'+item+'<div class="delete"><img src="images/delete.png"></div><div class="check"><img src="images/check.png"></div></li>';
		console.log('DEBUG item %o', list_str);
		var ul_obj=$('.ul_current');
		ul_obj.append(list_str);
	});

	$("body").keydown (function (e) {
			var item=$('#input').val();
			var list_str='<li>'+item+'</div><div class="delete"><img src="images/delete.png"></div><div class="check"><img src="images/check.png"></div></li>';
			var ul_obj=$('.ul_current');

			if (e.keyCode == 13) {
				ul_obj.append(list_str);
			}  

			
	});
});

$(document).ready(function(){
	$('.ul_current').mouseenter(function(){
		$('.delete').show();
		$('.check').show();
	})

	
	$('.ul_current').mouseleave(function(){
		$('.delete').hide();
		$('.check').hide();
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

