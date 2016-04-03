$(document).ready(function() {

var bol = false;
var length = 7;

choosecolour();



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


$("#register").click(function() {
	
var name = $("#name").val();
var username = $("#username").val();
var email = $("#email").val();
var password = $("#password").val();
var cpassword = $("#cpassword").val();
var url = $("#url").val();





if (name == '' || username =='' || email == '' || password == '' || cpassword == '') {

	alert("Please fill all fields...!!!!!!");

} else if ((cpassword.length) < length) {

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
	
	var color = $('.header').css('background-color');
		console.log(color);

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

		
		$('#header1').css('background',color);


});

	$('#generator').click(function(){

		var pg = generatePass(length);
		console.log(pg);
		document.getElementById("password").value = pg;

	})


	$('#eye').click(function(){


		if ($(this).prop('checked'))
		{
			$('#password').attr('type','text');
			$('#cpassword').attr('type','text');
		}
		
		else{
			$('#password').attr('type','password');
			$('#cpassword').attr('type','password');
		}


	})

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


function generatePass(plength){

    var keylistalpha="abcdefghijklmnopqrstuvwxyz";
    var keylistint="123456789";
    var keylistspec="!@#_";
    var temp='';
    var len = plength/2;
    var len = len - 1;
    var lenspec = plength-len-len;

    for (i=0;i<len;i++)
        temp+=keylistalpha.charAt(Math.floor(Math.random()*keylistalpha.length));

    for (i=0;i<lenspec;i++)
        temp+=keylistspec.charAt(Math.floor(Math.random()*keylistspec.length));

    for (i=0;i<len;i++)
        temp+=keylistint.charAt(Math.floor(Math.random()*keylistint.length));

        temp=temp.split('').sort(function(){return 0.5-Math.random()}).join('');

    return temp;
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
