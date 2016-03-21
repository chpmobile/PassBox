$(document).ready(function() {

$("#register").click(function() {
	
var name = $("#name").val();
var username = $("#username").val();
var email = $("#email").val();
var password = $("#password").val();
var cpassword = $("#cpassword").val();
var bol = false;



if (name == '' || username =='' || email == '' || password == '' || cpassword == '') {

	alert("Please fill all fields...!!!!!!");

} else if ((cpassword.length) < 3) {

	alert("Password should atleast 8 character in length...!!!!!!");

} else if (!(password).match(cpassword)) {

	alert("Your passwords don't match. Try again?");

} else {

	// $.post("php/register.php", {
	// name1: name,
	// email1: email,
	// password1: password
	// }, function(data) {

	// if (data == 'You have Successfully Registered.....') {

	// 	$("form")[0].reset();

	// }

	// alert(data);

	// });

	bol = true;
	window.location.assign("#page");
	setfielda(bol,name);
	

}



});



});

function setfielda(b,n){


	if (b == true) {

		console.log("adding button");

		var r = $('<input/>').attr({

			type:"button",
			id: n,
			value: n,
			name:  n,
			class: "newfield"
			

		});


		$('#addfields').append(r);
		bol = false;

	}
		
		

		//$('#addfields').append('<input type="button" name="addbutton" id="addbutton" value="addbutton">');


	

}