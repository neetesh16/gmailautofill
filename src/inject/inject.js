chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Loaded");
		// ----------------------------------------------------------

	}
	}, 10);
});

chrome.runtime.onMessage.addListener(function (msg, sender, response) {
  // First, validate the message's structure
  if ((msg.from === 'popup') && (msg.subject === 'DOMInfo')) {
		console.log("Received Data");
		console.log(msg);
    // Collect the necessary data
    // (For your specific requirements `document.querySelectorAll(...)`
    //  should be equivalent to jquery's `$(...)`)
		var p = document.getElementsByClassName('gmail_default')[0];
		p.innerText = msg.tmp;
    var domInfo = {
      total:   document.querySelectorAll('*').length,
      inputs:  document.querySelectorAll('input').length,
      buttons: document.querySelectorAll('button').length
    };

    // Directly respond to the sender (popup),
    // through the specified callback */
    response(domInfo);
  }
});
