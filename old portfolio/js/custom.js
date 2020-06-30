jQuery(document).ready(function(){
	$('#toggle-btn').click(function() {
		$('#toggle-btn').toggleClass('active');
		$('body').toggleClass('open-menu');
		$('ul').toggleClass('animation');
	});

	//For overlay
	$('.overlay').click(function(){
		$('body').removeClass('open-menu');
		$('#toggle-btn').removeClass('active');
	 });
})