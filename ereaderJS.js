

/**
(c) Hoang Nguyen 2014

Allows you to turn plain text into XHTML scrollable book format
*/

//scale_factor
scale_factor_width = 0.5;
scale_factor_height = 1.0;

//the number of characters that can fit into a page div
er_str_len = 0;
er_font_size = 12;

//set the number of characters that can fit into a page div
var set_str_len = function(p_width, p_height) {
	er_page_area = p_width * p_height;

	//number of char that fit in the area
	er_str_len = er_page_area / er_font_size;

	return er_str_len;
}

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
		p_width = width * scale_factor_width;
		p_height = height * scale_factor_height;
	}

	return [p_width, p_height];
};

//To use ereader, you must assign an area with the id="ereaderJS"
var er_page_setup = function(p_width, p_height, manuscript) {
	//variable for textarea containing the body of text
	//var ereader = $(page_id);

	//get text content
	//var manuscript = ereader.val();;

	var er_output = $('.er_output');

	//set up the page
	$('body').css({
		"margin" : "0",
    	"padding" : "0"
	});

	er_output.css({
		"border-color": "black",
		"border-style" : "solid",
		"border-width" : "1px",
		"backgroundColor": "white",
		"width" : p_width,
		"height": p_height,
		"max-height": p_height - 32,
		"max-width": p_width,
		"margin-left": "auto",
		"margin-right": "auto",
		"padding" : "16px 16px 16px 16px",
		"overflow" : "hidden"
	});
};


var er_format = function() {

	//get the height and width of the window
	var height = $(window).height();
	var width = $(window).width();

	var dimensions = page_dimensions(width, height)

    var ereader = $('#ereaderJS');
    var manuscript = ereader.val().replace(/\n/g, '</p><p>');
    manuscript = "<p>" + manuscript;
    $('.er_output').html(manuscript);
    $('#testform').hide();

    //set up css on <p> element
    $('p').css({
    	"textIndent" : "50px",
    	"margin" : "0",
    	"padding" : "0"
    })

    manuscript = $('#ereaderJS').val();

	er_page_setup(dimensions[0], dimensions[1], manuscript);
}

