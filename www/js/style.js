
$(document).ready(function(){
	choosecolour();

	//var $colour = $('.header').css('background').val();

	// $("p").append("Some appended text."); 

	// var name = "Facebbok";

	
	// setfield(name);
	

	

	$('#changecolor').click(function(){

	  if ($(this).prop('checked'))
	  {
		$('.red').css('visibility','visible');
		$('.blue').css('visibility','visible');
		$('.green').css('visibility','visible');
		$('.yellow').css('visibility','visible');
	  }

	 else {

	 	$('.red').css('visibility','hidden');
		$('.blue').css('visibility','hidden');
		$('.green').css('visibility','hidden');
		$('.yellow').css('visibility','hidden');

	 }

	})

	// var $bg = document.getElementsById("header").getPropertyValue('background-color');

	// var x = document.getElementsByClassName("header").css("background");

	var headercolor = $('.header').css("background-color");
	console.log(headercolor,x);
	console.log("gd");

	$('.abc').css("background");



});








var text = '{"fields":[' +
'{"name":"","username":"","email":"","password":"","url":""},' +
'{"name":"","username":"","email":"","password":"","url":""},' +
'{"name":"","username":"","email":"","password":"","url":""} ]}';


// fuction that create a new field button in the index
function setfield (n){


	$('#addbutton').click(function(){

		console.log("adding button");

		var r = $('<input/>').attr({

			type:"button",
			id: n,
			value: n,
			name:  n,
			class: "newfield"
			

		});

		$('#addfields').append(r);

		//$('#addfields').append('<input type="button" name="addbutton" id="addbutton" value="addbutton">');


	});

}


//function that change the headers color
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