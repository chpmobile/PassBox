
$(document).ready(function(){
	choosecolour();

	var $colour = $('.header').css('background').val();
$("p").append("Some appended text."); 

	$('#addbutton').click(function(){

		

		var r = $('<input/>').attr({

			type:"button",
			id: "field"

		});

		$('r').append('.addfields');


	})

});



function choosecolour(){

$('.red').click(function(){

    $('.header').css('background','#ff0000');

});

$('.green').click(function(){

    $('.header').css('background','#008000');

});

$('.blue').click(function(){

    $('.header').css('background','#3B88DE');

});

$('.white').click(function(){

    $('.header').css('background','#ffffff');

});

$('.yellow').click(function(){

    $('.header').css('background','#ffd700');

});

}




// function createInput(){

// 	    var $input = $('<input type="button" value="new button"/>');
// 	    $input.appendTo($("body"));

// 	}


function test(){


	var r = $('<input/>').attr({

		type:"button",
		id: "field"

	});

	$('r').after('#addbutton');

}