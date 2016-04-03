$(document).ready(function() {

var bol = false;

$("#register").click(function() {
	
var name = $("#name").val();
var username = $("#username").val();
var email = $("#email").val();
var password = $("#password").val();
var cpassword = $("#cpassword").val();
var url = $("#url").val();





if (name == '' || username =='' || email == '' || password == '' || cpassword == '') {

	alert("Please fill all fields...!!!!!!");

} else if ((cpassword.length) < 3) {

	alert("Password should atleast 8 character in length...!!!!!!");

} else if (!(password).match(cpassword)) {

	alert("Your passwords don't match. Try again?");

} else {

////////////////////php connectino\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
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
////////////////////////////////////////////////////////////////


//save the values on JSON
// var fieldstable [i] = 
//     {"name":name, "username":username, "email":email, "password":cpassword, "url":url};
// i = i++;

// var text = '{"fields":[' +
// '{"name":"","username":"","email":"","password":"","url":""} ]}';



	//take it to main page
	window.location.assign("#page");

	//calling the function
	var button = setfielda(name);

	$('#addfields').append(button);

	//clear the inputs
     $("#name").val('');
	 $("#username").val('');
	 $("#email").val('');
	 $("#password").val('');
	 $("#cpassword").val('');
	 $("#url").val('');
	
	

}


		$(button).click(function(){

			console.log("phase2");
			window.location.assign("#page4");

			document.getElementById("bname").innerHTML = name;
			document.getElementById("busername").innerHTML = username;
			document.getElementById("bemail").innerHTML = email;
			document.getElementById("bpassword").innerHTML = password;
			document.getElementById("burl").innerHTML = url;
			console.log("phase3");

		})




});



});

function setfielda(n){


	

		console.log("adding button");
		console.log(n);

		var r = $('<input/>').attr({

			type:"button",
			id: n,
			value: n,
			name:  n,
			class: "newfield"

			

		});
	


		
		return r;

		

				

	
		
		

		//$('#addfields').append('<input type="button" name="addbutton" id="addbutton" value="addbutton">');


	

}