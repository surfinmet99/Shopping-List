/*js*/
$(document).ready(function(){
	$('#btn_createList').click(function(){
		var item=$('#item').val();
			var li_string='<li>'+item+'</li>';
			var ul_obj=$('.ul_current');
			ul_obj.append(li_string);
	});
});

$(document).ready(function(){
	$('.items').mouseenter(function(){
		$('.delete').show();
		$('.check').show();
	})

	$('.items-checked').mouseenter(function(){
		$('.delete').show();
		$('.check').show();
	})

	$('.items').mouseleave(function(){
		$('.delete').hide();
		$('.check').hide();
	});

	$('.items-checked').mouseleave(function(){
		$('.delete').hide();
		$('.check').hide();
	});

	$('.items').mousedown(function(){
		$('.items-checked').show();
		$('.items').hide();
	})

	$('.items-checked').mousedown(function(){
		$('.items').show();
		$('.items-checked').hide();
	})


	$('ul.ul_current').on('click', 'li', function() {
		$(this).after('<li>'+li_string+'</li>');
	});
});

