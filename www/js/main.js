"use strict";

document.addEventListener("deviceready", onDeviceReady, false);
// add device and doc ready

function onDeviceReady() {
	console.log("device ready");

    document.getElementById("cameraTakeProfPicture").addEventListener
    ("click", cameraTakeProfPicture);

	init();
}


$(document).ready(function () {
	console.log("document ready");
	init();
});


function cameraTakeProfPicture() {
    navigator.camera.getPicture(onSuccess, onFail, {
        quality: 50,
		targetWidth: 360,
		targetHeight: 480,
        destinationType: Camera.DestinationType.DATA_URL
    });

    function onSuccess(imageData) {
        var image = document.getElementById('myImage');
		console.log("photo success");
        image.src = "data:image/jpeg;base64," + imageData;

    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }
}

function init() {
	document.addEventListener("online", onOnline, false);
	document.addEventListener("offline", onOffline, false);

	if (window.navigator.onLine) {
		$('body').addClass('online');
		
	} 
	else {
		$('body').addClass('offline');
	}

}

// handle online and offline intermittent connectivity


function onOffline() {
	$('body').removeClass('online');
	$('body').addClass('offline');
}

function onOnline() {
	$('body').addClass('online');
	$('body').removeClass('offline');
	
}

$(document).on("pagebeforeshow", function () {
	// When entering pagetwo
	//alert("page is about to be shown");

});

$(document).on("pagecontainershow", function () {
	// When entering pagetwo

});

$(document).on("pagecontainerload", function (event, data) {
	//alert("pageload event fired!");
});

$(document).on('pagecreate', '#menu', function () {
	console.log("pagecreate menu");

});

function favHide() {
    var x = document.getElementById("swan");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


var gStorage = {};


function toogle(anImage, anAltSrcArr) {
    if (typeof(anImage) === "undefined" || typeof(anAltSrcArr) === "undefined" || anAltSrcArr.length === 0) {
        return;
    }

    var id = anImage.id;
    var oldSrc = anImage.src;

    if (typeof(gStorage[id]) === "undefined") {
        gStorage[id] = {
            'id': id,
            'origSrc': oldSrc,
            'i': 0
        };
    }

    gStorage[id].i += 1;
    if (gStorage[id].i > anAltSrcArr.length) {
        gStorage[id].i = 0;
    }

    if (gStorage[id].i === 0) {
        anImage.src = gStorage[id].origSrc;
    } else {
        anImage.src = anAltSrcArr[gStorage[id].i - 1];
    }
}