function setDOMInfo(info) {
  document.getElementById('total').textContent   = info.total;
  document.getElementById('inputs').textContent  = info.inputs;
  document.getElementById('buttons').textContent = info.buttons;
}

// Once the DOM is ready...
window.addEventListener('DOMContentLoaded', function () {
  // ...query for the active tab...

});

$(document).ready(function() {
    $(".btn").click(function(){
      var val = $(this).text();

      chrome.tabs.query({
        active: true,
        currentWindow: true
      }, function (tabs) {
        // ...and send a request for the DOM info...
        console.log("Sending Data");
        chrome.tabs.sendMessage(
            tabs[0].id,
            {from: 'popup', subject: 'DOMInfo',tmp:val},
            // ...also specifying a callback to be called
            //    from the receiving end (content script)
            setDOMInfo);
      });
    });
});
