/**
(c) Hoang Nguyen 2014

Allows you to turn plain text into XHTML scrollable book format
*/

//scale_factor
scale_factor = 0.5;

//determine page widthxheight
function page_dimensions(width, height) {

	//return values
	var p_width = 0;
	var p_height = 0;

	//if the height is greater than the width we can assume the screen is in portrait mode
	// in this case we can use the whole screen for the page
	if(height > width) {
		p_width = width;
		p_height = height;
	}

	//if the width is greater than the height we can assume the screen is in landscape mode
	// in this case we should only use part of the screen for the page
	else {
		p_width = width * scale_factor;
		p_height = height;
	}

	return [p_width, p_height];
}

//To use ereader, you must assign an area with the id="ereaderJS"
$(document).ready(function() {
	//variable for textarea containing the body of text
	var ereader = $('#ereaderJS');

	//get text content
	var manuscript = ereader.val();

	//get the height and width of the window
	var height = $(window).height();
	var width = $(window).width();

	var dimensions = page_dimensions(width, height);

	alert(dimensions[0]);
	alert(dimensions[1]);
});



