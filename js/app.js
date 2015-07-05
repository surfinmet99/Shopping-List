/*js*/
$(document).ready(function(){
	$('#btn_createList').click(function(){
		$('.ul_current').append($('<li>', {
			text: $('#item').val()
		}));
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
	});
});
