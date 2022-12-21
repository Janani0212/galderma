$(".open_popup").click(function () {
	$(this)
		.parent(".popup_main")
		.children(".popup_body")
		.addClass("popup_body_show");
	$(".plus").addClass("opacity");
	$("body").addClass("overflow");
});
$(".popup_close, .popup_cancel").click(function () {
	$(".popup_body").removeClass("popup_body_show");
	$(".plus").removeClass("opacity");
	$("body").removeClass("overflow");
});
$(".popup_back").click(function () {
	$(".popup_body").removeClass("popup_body_show");
	$(".plus").removeClass("opacity");
	$("body").removeClass("overflow");
});
