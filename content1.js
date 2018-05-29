 //if our modal exists already, turn it off
 if (document.getElementById('speakgenius-modal')) {
  const existingModal = document.getElementById('speakgenius-modal');
  if (existingModal.style.display === 'none') existingModal.style.display = 'flex';
  else existingModal.style.display = 'none';
  return;
}

//outer box
const modalBox = document.createElement('div');
modalBox.id = 'speakgenius-modal';

//top div
const top = document.createElement('div');
top.className = 'sg-top';

//top left
const topLeft = document.createElement('div');
topLeft.className = 'sg-topLeft'
const screenShare = document.createElement('div');
screenShare.id = 'sg-screenShare';
screenShare.innerText = `SCREEN SHARE: `;

// screenShare.style.textAlign = 'left';
const suggestedTime = document.createElement('div');
suggestedTime.id = 'sg-suggestedTime';
suggestedTime.innerText = `SUGGESTED TIME: ${instructions[i].suggestedTime}`;

// suggestedTime.style.textAlign = 'left';
topLeft.append(screenShare, suggestedTime);

//buttons
const left = document.createElement('div');
left.className = 'sg-leftButton'

const icon = document.createElement('i');
icon.className = 'material-icons';
icon.innerText = 'skip_next';
left.appendChild(icon);

left.onclick = (e) => {
  if (i > 0) i--;
  document.getElementById('sg-instructions').textContent = instructions[i].instructions;
  document.getElementById('sg-screenShare').textContent = instructions[i].screenShare;
  document.getElementById('sg-suggestedTime').innerText = `SUGGESTED TIME: ${instructions[i].suggestedTime}`;
}

const right = document.createElement('div');
right.className = 'sg-rightButton';
right.innerText = '->';
right.style.width = '25%';
right.onclick = (e) => {
  if (i < instructions.length - 1) i++;
  document.getElementById('sg-instructions').textContent = instructions[i].instructions;
  document.getElementById('sg-screenShare').textContent = instructions[i].screenShare;
  document.getElementById('sg-suggestedTime').textContent = `SUGGESTED TIME: ${instructions[i].suggestedTime}`;
}
//troubleshoot
const troubleShoot = document.createElement('div');
troubleShoot.className = 'sg-troubleshoot'
troubleShoot.innerText = 'T'

//appendTopElements
top.append(topLeft, left, right, troubleShoot);



const bottom = document.createElement('div');
bottom.id = 'sg-instructions';
bottom.className = 'sg-bottom';
bottom.textContent = instructions[i].instructions;

modalBox.append(top, bottom);
document.body.appendChild(modalBox);

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