const port = chrome.runtime.connect({name: "port"});

port.postMessage({url: window.location.origin});

port.onMessage.addListener(function(msg) {
  if (document.getElementById('speakgenius-iframe')) {
    const existingModal = document.getElementById('speakgenius-iframe');
    if (existingModal.style.display === 'none') existingModal.style.display = 'flex';
    else existingModal.style.display = 'none';
    return;
  }

  let iFrame = document.createElement("iframe");
  iFrame.src = chrome.extension.getURL("./sg-html.html");
  iFrame.id = 'speakgenius-iframe';
  document.body.insertBefore (iFrame, document.body.firstChild);
});