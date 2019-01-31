$(function () {
	var $readMoreLink = $(".read-more");

	$readMoreLink.on("click", function (e) {
		e.preventDefault();
		alert("The link has been clicked!")
	});
});