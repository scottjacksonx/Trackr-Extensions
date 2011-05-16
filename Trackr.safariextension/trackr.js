/*

trackr.js - the bulk of the code for the Trackr Safari extensions.

*/

/* Tumblr-checking functions */
function onTumblrDashboard() {
	if (document.location.toString().indexOf("tumblr.com/dashboard") != -1) {
		return true;
	}
	return false;
}

function onTumblrPost() {
	try {
		if ($("iframe").last().attr("src").toString().indexOf("http://assets.tumblr.com/iframe.html") != -1) {
			return true;
		}
		return false;
	} catch(error) {
		return false;
	}
}

/* Twitter-checking functions */

/*
Twitter's webapp uses .favorite-action elements whether we're on the homepage,
a user's profile, or the page for an individual tweet. As a result, we only need
one function to check whether the current location is a Twitter page.
*/
function onTwitter() {
	if (document.location.toString() == "http://twitter.com" ||
	    	document.location.toString() == "http://www.twitter.com" ||
	    	document.location.toString() == "http://twitter.com/#!/") {
		return true;
	}
	return false;
}


/* YouTube-checking functions */
function onYouTubeVideoPage() {
	if (document.location.toString().indexOf("youtube.com/watch?") != -1) {
		return true;
	}
	return false;
}

/* Flickr-checking functions */

function onFlickrPhotoPage() {
	if (document.location.toString().indexOf("flickr.com/photos/") != -1) {
		return true;
	}
	return false;
}

function onFacebookConnectPage() {
	/*$("iframe").foreach(function() {
		alert("iframe");
		if ($(this).attr("src").toString().indexOf("http://www.facebook.com/plugins/like.php")) {
			return true;
		}
	});
	return false;*/
	try {
		$("iframe").foreach(function() {
			alert("iframe");
			return true;
		});
	} catch(error) {
		return false;
	}
}

function onReddit() {
	if (document.location.toString().indexOf("reddit.com") != -1) {
		return true;
	}
	return false;
}

function showMyForm() {
	window.open("http://trackr.scottjackson.org/like", "_blank", "toolbar=no, menubar=no, scrollbars=no, resizable=no, width=720, height=500");
	
}

$(document).ready(function() {
	if (onTumblrDashboard()) {
		$(".like_button").click(showMyForm);
	} else if (onTumblrPost()) {
		$("input").foreach(function() {
			if ($(this).attr("src") == "http://assets.tumblr.com/images/iframe_like_alpha.png") {
				$(this).click(showMyForm);
			}
		});
	} else if (onTwitter()) {
		$(".favorite-action").foreach(function() {
			$(this).click(showMyForm);
		})
	} else if (onYouTubeVideoPage()) {
		$("#watch-like").click(showMyForm);
	} else if (onFlickrPhotoPage()) {
		$("button-bar-fave").click(showMyForm);
	} else if (onFacebookConnectPage()) {
		alert("on facebook connect page");
		$(".connect_widget_like_button").click(showMyForm);
	} else if (onReddit()) {
		$(".arrow.up").click(showMyForm);
	}
});




