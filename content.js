const port = chrome.runtime.connect({name: "port"});

const instructions = [
  'Hello do this',
  'And then do that',
  'And then do this'
]

port.postMessage({url: window.location.origin});

port.onMessage.addListener(function(msg) {

  if (document.getElementById('sweetestteriyaki')) {
    const existingModal = document.getElementById('sweetestteriyaki');
    if (existingModal.style.display === 'none') existingModal.style.display = 'flex';
    else existingModal.style.display = 'none';
    return;
  }

  const modalBox = document.createElement('div');
  modalBox.textContent = instructions[0];
  modalBox.style.width = '50vw';
  modalBox.style.height = '75vh';
  modalBox.style.backgroundColor = 'white';
  modalBox.style.position = 'fixed';
  modalBox.style.top = '12.5vh';
  modalBox.style.left = '25vw';
  modalBox.style.padding = '20px';
  modalBox.style.borderRadius = '10px';
  modalBox.style.zIndex = '100001';
  modalBox.id = 'sweetestteriyaki';
  modalBox.style.overflowY = 'scroll';
  modalBox.style.display = 'flex';
  modalBox.style.flexWrap = 'wrap';
  modalBox.style.justifyContent = 'space-around';

  document.body.appendChild(modalBox);
});