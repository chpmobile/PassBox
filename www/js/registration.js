$(document).ready(function() {

var bol = false;
var len = 7;
var exampleJSON;
var id;
var name;
var username;
var email;
var password;
var cpassword;
var url;
var data;
var first = true;
var localData;
var localdata;
var a;
var userpass;

$('#delete').click(function(){

	var del = document.getElementById("bname").value;
	document.getElementById(del).remove();

})




$('#regpass').click(function(){

userpass = $('#user_password').val();

if(userpass ==''){

	console.log("give pass");
	alert("give pass");

}

else{


 a = window.localStorage.getItem("user");
	

if (a)a=0;

if (a!==0)

{
	console.log("save password");
	userpass = $('#user_password').val();

	console.log(userpass);

	
    window.localStorage.setItem("user", userpass);    
    window.location.assign("#page");

} 


	console.log(a);
	console.log(userpass);
	a = window.localStorage.getItem("user", userpass);  
	userpass = $('#user_password').val();

   if (a==userpass){

   	console.log("PASS");
	window.location.assign("#page");

}else{

		alert("wrong password");

	}

}
})


 //var localData = JSON.parse(window.localStorage.getItem(id));

//window.localStorage.clear();

id = window.localStorage.getItem("autoid");
if(!id) id =0;

console.log(id);
  
localdata = JSON.parse(window.localStorage.getItem(id-1));
console.log(localdata);

if(localdata) data =true;
//data = Object.keys(localdata).length;
console.log(data);


//printing

if(data) 
{
	
	console.log("pass");
	for(var i=0; i<=id-1; i++ ) {

		var localData = JSON.parse(window.localStorage.getItem(i));

		//console.log(localData.name);
		console.log(i + "     " + localData);
	 // $('#addfields').html(exampleJSON[i]);
	 	var n=localData.name;
	 	//console.log(n);
	 	var button = setfield(n);

		$('#addfields').append(button);
		$(button).click(function(){

			//console.log("phase2");
			window.location.assign("#page4");

			document.getElementById("bname").value = localData.name;
			document.getElementById("busername").value = localData.username;
			document.getElementById("bemail").value = localData.email;
			document.getElementById("bpassword").value = localData.password;
			document.getElementById("burl").value = localData.url;
			//console.log("phase3");

		})

	}
}



choosecolour();

$('#round-button').click(function(){

	$("p").hide();


})

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
	
 name = $("#name").val();
 username = $("#username").val();
 email = $("#email").val();
 password = $("#password").val();
 //cpassword = $("#cpassword").val();
 url = $("#url").val();





if (name == '' || username =='' || email == '' || password == '') {

	alert("Please fill all fields...!!!!!!");
	createMessage();

} else if ((password.length) < length) {

	alert("Password should atleast 8 character in length...!!!!!!");

// } else if (!(password).match(cpassword)) {

// 	alert("Your passwords don't match. Try again?");

} else {



//Take the latest id from the lacal storage 
//Convert id from string to integer

// id = parseInt(window.localStorage.getItem(id));




//Pass the information of user account to JSON
exampleJSON = ({"name":name, "username":username, "email":email, "password":password, "url":url});


//window.localStorage.setItem("id",id);





console.log("id      :" + id);


//store somethign with ID here
//Convert the exampleJSON to string
localData = JSON.stringify(exampleJSON);

//save the id and the exampleJSON to local storage
window.localStorage.setItem(id,localData);

id++;

window.localStorage.setItem("autoid",id);

// exampleJSON.push({"name":name, "username":username, "email":email, "password":cpassword, "url":url});





// var storage = array[];

// storage.name = name;
// storage.username = username;

// data.push(
// {"id" :{"name":name, "username":username, "email":email, "password":cpassword, "url":url}}
// 	);

//console.log(exampleJSON);






//Take the length og the local storage table
//var test = window.localStorage.length;

//Convert the exampleJSON from styring back to data
//var localData = JSON.parse(window.localStorage.getItem(id));

//Testing  
console.log(localData);
//console.log(test);
//console.log(id);

	//take it to main page
	window.location.assign("#page");

	//calling the function
	var button = setfield(name);

	$('#addfields').append(button);

	//console.log(name);

	

	//console.log(name);
	//clear the inputs
     $("#name").val('');
	 $("#username").val('');
	 $("#email").val('');
	 $("#password").val('');
	// $("#cpassword").val('');
	 $("#url").val('');
	 //console.log(name);
	
	var color = $('.header').css('background-color');
		//console.log(color);

}


		$(button).click(function(){

			//console.log("phase2");
			window.location.assign("#page4");

			document.getElementById("bname").innerHTML = name;
			document.getElementById("busername").innerHTML = username;
			document.getElementById("bemail").innerHTML = email;
			document.getElementById("bpassword").innerHTML = password;
			document.getElementById("burl").innerHTML = url;
			//console.log("phase3");

		})

		
		$('#header1').css('background',color);


});

	$('#generator').click(function(){

		var pg = generatePass(len);
		//console.log(pg);
		document.getElementById("password").value = pg;

	})


	$('#eye').click(function(){


		if ($(this).prop('checked'))
		{
			$('#password').attr('type','text');
			//$('#cpassword').attr('type','text');
		}
		
		else{
			$('#password').attr('type','password');
			//$('#cpassword').attr('type','password');
		}


	})



});

function setfield(n){


	

		//console.log("adding button");
		//console.log(n);

		var r = $('<input>').attr({

			type: "button",			
			id: n,
			name:  n,
			class: "newfield",
			value: n
		


			
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
