function main() {
	$("body").hide();
	$("body").fadeIn(900);
	$('.aboutButton').next().hide();
	$('.aboutButton').on('click', function(event) {
		$('.aboutButton').next().slideToggle(800);
		$('.aboutButton').css('background-color', '#566573');
		$('.aboutButton').css('color', 'white');
	});
}
function main() {
	$("body").hide();
	$("body").fadeIn(900);
	$('.aboutButton').next().hide();
	$('.aboutButton').on('click', function(event) {
		$('.aboutButton').next().slideToggle(800);
		$('.aboutButton').css('background-color', '#566573');
		$('.aboutButton').css('color', 'white');
	});
}
	$(document).ready(main);