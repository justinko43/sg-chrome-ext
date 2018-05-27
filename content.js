const port = chrome.runtime.connect({name: "port"});

const instructions = [
  { 
    instructions: 'Ask me anything', 
    screenShare: false, 
    suggestedTime: 5
  },
  { 
    instructions: 'Introduce the topic', 
    screenShare: true, 
    suggestedTime: 15
  },
  { 
    instructions: 'Have learner read the briefing', 
    screenShare: true, 
    suggestedTime: 15
  },
  { instructions: 'Underline and go over mispronouned words', screenShare: true, suggestedTime: 15},
  { instructions: 'Ask the lead-in question and unpack if necessary', screenShare: true, suggestedTime: 15},
  { instructions: 'Go through lead-in inquiry', screenShare: false, suggestedTime: 15},
  { instructions: 'Don\'t forget to write down constructive feedback!', screenShare: false, suggestedTime: 15},
  { instructions: 'Go over constructive feedback', screenShare: true, suggestedTime: 15},
  { instructions: 'Introduce key phrase', screenShare: true, suggestedTime: 10},
  { instructions: 'Go through key phrase inquiry', screenShare: false, suggestedTime: 10},
  { instructions: 'End the lesson', screenShare: false, suggestedTime: 0}
];

let i = 0;



port.postMessage({url: window.location.origin});

port.onMessage.addListener(function(msg) {
  //if our modal exists already, turn it off
  if (document.getElementById('speakgenius-modal')) {
    const existingModal = document.getElementById('speakgenius-modal');
    if (existingModal.style.display === 'none') existingModal.style.display = 'flex';
    else existingModal.style.display = 'none';
    return;
  }

  //outer box
  const modalBox = document.createElement('div');
  modalBox.style.width = '80vw';
  modalBox.style.height = '140px';
  modalBox.style.backgroundColor = '#F9F9F9';
  modalBox.style.boxShadow = '0px 0px 7px #7D7E7F'
  modalBox.style.position = 'fixed';
  modalBox.style.bottom = '0';
  modalBox.style.left = '10vw';
  modalBox.style.padding = '15px';
  modalBox.style.borderRadius = '10px';
  modalBox.style.zIndex = '100001';
  modalBox.id = 'speakgenius-modal';
  modalBox.style.overflowY = 'scroll';
  modalBox.style.display = 'flex';
  modalBox.style.flexWrap = 'wrap';
  modalBox.style.justifyContent = 'space-around';

  //top div
  const top = document.createElement('div');
  top.style.display = 'flex';
  top.style.justifyContent = 'space-between';
  top.style.width = '100%';
  top.style.height = '50px';
  //top left
  const topLeft = document.createElement('div');
  const screenShare = document.createElement('div');
  // screenShare.id = 'sg-screenShare';
  screenShare.innerText = `SCREEN SHARE: `;
  screenShare.style.width = '100%';
  let toggle = createTextNode(instructions[i].screenShare);
  toggle.id = 'sg-screenShare';
  screenShare.appendChild(toggle);

  // screenShare.style.textAlign = 'left';
  const suggestedTime = document.createElement('div');
  suggestedTime.id = 'sg-suggestedTime';
  suggestedTime.innerText = `SUGGESTED TIME: ${instructions[i].suggestedTime}`;
  suggestedTime.style.width = '100%'
  // suggestedTime.style.textAlign = 'left';
  topLeft.append(screenShare, suggestedTime);
  topLeft.style.display = 'flex';
  topLeft.style.width = '25%';
  topLeft.style.justifyContent = 'flex-start';
  topLeft.style.flexFlow = 'row wrap';
  //buttons
  const left = document.createElement('button');
  left.innerText = '<-';
  left.style.width = '25%';
  left.onclick = (e) => {
    if (i > 0) i--;
    document.getElementById('sg-instructions').textContent = instructions[i].instructions;
    document.getElementById('sg-screenShare') = createTextNode(instructions[i].screenShare);
    document.getElementById('sg-suggestedTime').innerText = `SUGGESTED TIME: ${instructions[i].suggestedTime}`;
  }
  const right = document.createElement('button');
  right.innerText = '->';
  right.style.width = '25%';
  right.onclick = (e) => {
    if (i < instructions.length - 1) i++;
    document.getElementById('sg-instructions').textContent = instructions[i].instructions;
    document.getElementById('sg-screenShare').textContent = `SCREEN SHARE: ${instructions[i].screenShare ? 'ON' : 'OFF'}`;
    document.getElementById('sg-suggestedTime').textContent = `SUGGESTED TIME: ${instructions[i].suggestedTime}`;
  }
  //troubleshoot
  const troubleShoot = document.createElement('div');
  troubleShoot.style.display = 'flex';
  troubleShoot.style.justifyContent = 'flex-end';
  troubleShoot.innerText = 'T'
  troubleShoot.style.width = '25%';

  //appendTopElements
  top.append(topLeft, left, right, troubleShoot);



  const bottom = document.createElement('div');
  bottom.id = 'sg-instructions';
  bottom.textContent = instructions[i].instructions;
  bottom.style.width = '100%';
  bottom.style.fontSize = '40px';
  bottom.style.display = 'flex';
  bottom.style.justifyContent = 'center';
  bottom.style.textAlign = 'center';
  bottom.style.alignItems = 'center';


  modalBox.append(top, bottom);
  document.body.appendChild(modalBox);
});

function createTextNode(bool) {
  let bold = document.createElement('strong');
  let color;
  if (bool) {
    color = document.createTextNode('ON');
    bold.style.color = 'green';
  } else {
    color = document.createTextNode('OFF');
    bold.style.color = 'red';
  }
  return bold.appendChild(color);
}