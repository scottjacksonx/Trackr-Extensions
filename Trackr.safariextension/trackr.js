/*

trackr.js

*/

/* Tumblr-checking functions */
function onTumblrDashboard() {
	if (document.location.toString().indexOf("tumblr.com/dashboard") != -1) {
		return true;
	}
	return false;
}

function onTumblrPost() {
	if ($("iframe").last().attr("src").toString().indexOf("http://assets.tumblr.com/iframe.html") != -1) {
		return true;
	}
	return false;
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
	    	document.location.toString() == "http://twitter.com/#/") {
		return true;
	}
	return false;
}

function showMyForm() {
	alert("Hey. You just liked something!");
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
	}
	
});




