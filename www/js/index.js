var notification_count=0;

$(document).on('pageinit', function() {

	// $('#messageButton').on('click', function() {
	// 	createMessage();
	// });
    


	// $('#dialogButton').on('click', function() {
	// 	createDialog();
	// });

   
	//Notify the user didn'tknow how to make the notification every 3 months
	// for that i left it to custom 3 seconds to show that it works 
	$('#notificationButton').on('click', function() {
		createNotification();
	});


});


//Different messages that will pop up to user
function changepass(){		
	//phoneGap and jQueryMobile do not support toast messages directly
    //so we can add this using toast.js
    new Toast({content: 'You succesfuly change your password', duration: 2000}); 	
}
function successfield(n){		
	//phoneGap and jQueryMobile do not support toast messages directly
    //so we can add this using toast.js
    new Toast({content: 'You succesfuly cretaed  ' + n + '  field', duration: 2000}); 	
}
   
function createMessage(){		
	//phoneGap and jQueryMobile do not support toast messages directly
    //so we can add this using toast.js
    new Toast({content: 'Fill all the field please', duration: 2000}); 	
}
   
 function correctpass(){		
	//phoneGap and jQueryMobile do not support toast messages directly
    //so we can add this using toast.js
    new Toast({content: 'Please give the correct password', duration: 2000}); 	
}   

function correctword(){		
	//phoneGap and jQueryMobile do not support toast messages directly
    //so we can add this using toast.js
    new Toast({content: 'Please give the correct safe word', duration: 2000}); 	
}    

function createDialog() {

	//phonegap supports native dialog boxes.
	//here's a simple example
      
	navigator.notification.confirm(
    	'What do you think of this dialog?',  // message
        dialogDismissed,         // callback
        'An example dialog!',            // title
        ['Awesome!', 'Sucks']                  // buttons
    );

}


        	
        	
        	
function dialogDismissed(buttonIndex) {
	
	if(buttonIndex==1) new Toast({content: "You're easily pleased", duration: 3000});
            
        
   	else if(buttonIndex==2) new Toast({content: 'It is rather boring.', duration: 3000});

}

   
   
function createNotification() {
        		
	//
    //generate a time to post notification
    //
    var currentTime = new Date().getTime(); //current time
    var notificationTime = new Date(currentTime + 30000); //delayed time  - add 1 second
    			
    //
    //setup notification
    //
	window.plugin.notification.local.add({ 
    	id: 		1,
        title: 		"PassBox: Change your password",
        message: 	"You can use the password generator",
        date: 		notificationTime, 
        badge: 		notification_count++
   	});
    
}