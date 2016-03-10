$(document).ready(function() {

$("#register").click(function() {
	
var name = $("#name").val();
var email = $("#email").val();
var password = $("#password").val();
var cpassword = $("#cpassword").val();

createInput(name);

if (name == '' || email == '' || password == '' || cpassword == '') {

	alert("Please fill all fields...!!!!!!");

} else if ((password.length) < 8) {

	alert("Password should atleast 8 character in length...!!!!!!");

} else if (!(password).match(cpassword)) {

	alert("Your passwords don't match. Try again?");

} else {

	$.post("php/register.php", {
	name1: name,
	email1: email,
	password1: password
	}, function(data) {

	if (data == 'You have Successfully Registered.....') {

		$("form")[0].reset();

	}

	alert(data);

	});

}



});



// $('#addbutton').click(function(){

// createInput();
// test();



// })

// function createInput(){

// 	    var $input = $('<input type="button" value="new button"/>');
// 	    $input.appendTo($("body"));

// 	}


// 		function test(){


// 			var r = $('<input/>').attr({

// 				type:"button",
// 				id: "field"

// 			});

// 			$("body").append(r);

// 		}

});