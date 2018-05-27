chrome.runtime.onConnect.addListener(function(port) {
  port.onMessage.addListener(function(msg) {
    chrome.browserAction.onClicked.addListener(tab => {
      port.postMessage({message: 'hello'});
    });
  });
});