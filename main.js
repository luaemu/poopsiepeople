function main() {
	var $body = $("body");
	var $abtButton = $(".aboutButton");
	$abtButton.next().hide();
	$body.hide();
	$body.fadeIn(1000);
	$abtButton.nextAll().slideDown(800);
}
$(document).ready(main);