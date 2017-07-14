$(function(){
	$('img').click(function() {
		$(this).attr('src', $(this).attr('data-alt-src'));
  		// console.log('data-alt-src value is', );
	});
});