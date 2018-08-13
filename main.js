<<<<<<< HEAD
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
=======
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
>>>>>>> 89d6dfa5fcfa092b4f35a9c6c88aedc2c6c6fc82
	$(document).ready(main);