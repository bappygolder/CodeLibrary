//animate page when loading
$(".animsition").animsition();

//stick the input section to the top
$("header").sticky({
  topSpacing:0,
  getWidthFrom: '.main-wrapper',	//controls responsiveness of sticky eliment
  responsiveWidth: true				//controls responsiveness of sticky eliment
});

//hide & show help option when user scrolls
$("header").on('sticky-start', function(){
	"use strict";
	$(".header_wrapper .question_mark").css("display", "none");
});

$("header").on('sticky-end', function(){
	"use strict";
	$(".header_wrapper .question_mark").css("display", "block");
});
//end: hide & show...

//change input field design on hover
$("input").focus(function(){
	"use strict";
	$(this).css({
		'border' : '1px solid  rgba(88, 87, 255, 0.5)'			
	});
});

$("input").blur(function(){
	"use strict";
	$(this).css({
		'border' : '0px solid'				
	});
});

/*----------------------------------------------------
build and show the numbers table
----------------------------------------------------*/

var num;					//holds the number of the num table
num = 2;					//seeding num for testing
var num_table_template;		//holds numbers table
var time_value_start = 1;	//hold the number that num will be timed to
var max_time_value_start;	//hold value up to which the numbers table will be shown
max_time_value_start = 555;	//seeding for test


//construct HTML for numbers table
function template_of_num_table(num, times_num){
	"use strict";
	num_table_template = "<p>";
	num_table_template += num;
	num_table_template += " x ";
	num_table_template += times_num;
	num_table_template += " = ";
	num_table_template += num * times_num;
	num_table_template += "</p>";
	
	return num_table_template;
}


//test constructed HTML
//$(".num_table_view").html(template_of_num_table(num, time_value_start));


function show_full_num_table(){
	"use strict";
	
	//empty HTML for the numbers table
	$(".num_table_view").html("");
	
	for(var i = 1; i <= max_time_value_start; i++){
		$(".num_table_view").append(template_of_num_table(num, time_value_start));
		//increase times value
		time_value_start++;
		
	} //end: for
} //end: show_full_num_table


//show the full numbers table
show_full_num_table();

/*----------------------------------------------------
end: build and show the numbers table
----------------------------------------------------*/


//show tooltip with help options
//hide and show the button on input focus