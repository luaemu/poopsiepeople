function main() {
	$("body").hide();
	$("body").fadeIn(900);
	$('.slideButton').next().hide();
	$('.slideButton').on('click', function(event) {
		$('.slideButton').next().slideToggle(800);
		$('.slideButton').css('background-color', '#566573');
		$('.slideButton').css('color', 'white');
	});
}
	$(document).ready(main);