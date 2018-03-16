// this is phonegap specific
document.addEventListener("deviceready", setup, false);
function setup() {
/
navigator.notification.alert(
'You are the winner!', // message
alertDismissed, // callback
'Game Over', // title
'Done' // buttonName
);

function setup() {
	alert('boom');
	navigator.notification.alert(
    'You are the winner!',  // message
    alertDismissed,         // callback
    'Game Over',            // title
    'Done'                  // buttonName
);
	document.addEventListener("online", onOnline, false);
	document.addEventListener("offline", onOffline, false);
	//alert('dready', device.platform)
	if (window.navigator.onLine) {
		$('body').addClass('online');
      
    } else {
        ////console.log('offline');
        $('body').addClass('offline');

    }
};

function onOffline() {
    // Handle the offline event
	$('body').removeClass('online');
	$('body').addClass('offline');
}
function onOnline() {
	$('body').addClass('online');
	$('body').removeClass('offline');
    // Handle the offline event
}
