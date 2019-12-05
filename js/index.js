var notification_count=0;

$(document).on('pageinit', function() {

	$('#messageButton').on('click', function() {
		createMessage();
	});
	
	$('#dialogButton').on('click', function() {
		createDialog();
	});


	$('#notificationButton').on('click', function() {
		createNotification();
	});


});



//
//section 1
//
function createMessage(){		
	//phoneGap and jQueryMobile do not support toast messages directly
    //so we can add this using toast.js
    new Toast({content: 'Hello World!', duration: 5000});

}
        	

//
//section 2
//
function createDialog() {

	//phonegap supports native dialog boxes.
	//here's a simple example
      
	navigator.notification.confirm(
    	'Are You Hungry?',  // message
        dialogDismissed,         // callback
        'Break Time?',            // title
        ['Yes', 'No']                  // buttons
    );

}
        	
        	
        	
function dialogDismissed(buttonIndex) {
	
	if(buttonIndex==1) new Toast({content: "Take a break and Eat some Food!", duration: 3000});
   	else if(buttonIndex==2) new Toast({content: 'Carry on Working!', duration: 3000});

}

   
   
//
//section 3
//
function createNotification() {

        		
    			
    //
    //setup notification
    //
	cordova.plugins.notification.local.schedule({ 
    	id: 	1,
        title: 	"Hey you!",
        text: 	"Get Back To Work!",
        trigger: { in: 30, unit: 'second' }
   	});
    
}