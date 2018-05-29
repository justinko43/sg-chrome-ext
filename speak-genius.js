/*
TODO:
 -refactor
*/
const preLessonDetails = [
  { 
    instructions: 'Check this', 
    screenShare: null, 
    suggestedTime: null 
  },
  { 
    instructions: 'Check that', 
    screenShare: null, 
    suggestedTime: null 
  },
  { 
    instructions: 'Do this', 
    screenShare: null, 
    suggestedTime: null 
  },
  { 
    instructions: 'Do that', 
    screenShare: null, 
    suggestedTime: null 
  },
  { 
    instructions: 'Lets all be happy', 
    screenShare: null, 
    suggestedTime: null 
  }
]

const inLessonDetails = [
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
  { 
    instructions: 'Underline and go over mispronouned words', 
    screenShare: true, 
    suggestedTime: 15
  },
  { 
    instructions: 'Ask the lead-in question and unpack if necessary', 
    screenShare: true, 
    suggestedTime: 15
  },
  { 
    instructions: 'Go through lead-in inquiry', 
    screenShare: false, 
    suggestedTime: 15
  },
  { 
    instructions: 'Don\'t forget to write down constructive feedback!', 
    screenShare: false, 
    suggestedTime: 15
  },
  { 
    instructions: 'Go over constructive feedback', 
    screenShare: true, 
    suggestedTime: 15
  },
  { 
    instructions: 'Introduce key phrase', 
    screenShare: true, 
    suggestedTime: 10
  },
  { 
    instructions: 'Go through key phrase inquiry', 
    screenShare: false, 
    suggestedTime: 10
  },
  { 
    instructions: 'End the lesson', 
    screenShare: false, 
    suggestedTime: 0
  }
];

let i = 0;
let f = 0;
let preLessonBool;

// console.log(document.getElementById('sg-instructions'));
window.onload = function(e) {

  document.getElementById('sg-preLesson').onclick = preLessonButton;
  document.getElementById('sg-duringLesson').onclick = inLessonButton;
  
  document.getElementById('speakgenius-modal').style.display = 'none';

  const menuEl = document.querySelector('#sg-troubleshootMenu')
  const menu = new mdc.menu.MDCMenu(menuEl);
  const menuButtonEl = document.querySelector('#menu-button');

  // Toggle menu open
  menuButtonEl.addEventListener('click', function() {
    menu.open = !menu.open;
  });

  // Listen for selected item
  menuEl.addEventListener('MDCMenu:selected', function(evt) {
     var detail = evt.detail;
  });

  // Set Anchor Corner to Bottom End
  menu.setAnchorCorner(0);
}

function inLesson() {
  //turn off welcome modal, turn on speakgenius modal
  document.getElementById('speakgenius-modal').style.display = 'flex';
  document.getElementById('welcome-modal').style.display = 'none';
  //display screenshare and suggested time
  document.getElementById('sg-screenShare').style.display = 'flex';
  document.getElementById('sg-suggestedTime').style.display = 'flex';
  document.getElementById('sg-instructions').textContent = inLessonDetails[i].instructions;

  setScreenShare(inLessonDetails, i);
  
  document.getElementById('sg-suggestedTimeText').textContent = inLessonDetails[i].suggestedTime;
  
  document.getElementById('left').onclick = function() {
    i = leftButtonHandler(inLessonDetails, i);
  };
  document.getElementById('right').onclick = function() {
    i = rightButtonHandler(inLessonDetails, i);
  }
}

function setScreenShare(details, index) {
    if (details[index].screenShare) {
    document.getElementById('sg-screenShareText').textContent = 'ON';
    document.getElementById('sg-screenShareText').style.color = 'green';
  }
  else {
    document.getElementById('sg-screenShareText').textContent = 'OFF';
    document.getElementById('sg-screenShareText').style.color = 'red';
  }
}

function preLessonButton() {
  document.getElementById('sg-instructions').classList.remove('fadeOutRight');
  document.getElementById('sg-instructions').classList.add('fadeInRight');
  preLesson();
  preLessonBool = true;
}

function inLessonButton() {
  document.getElementById('sg-instructions').classList.remove('fadeOutRight');
  document.getElementById('sg-instructions').classList.add('fadeInRight');
  inLesson();
  preLessonBool = false;
}

function preLesson() {
  document.getElementById('welcome-modal').style.display = 'none';
  document.getElementById('speakgenius-modal').style.display = 'flex';

  document.getElementById('sg-instructions').textContent = preLessonDetails[f].instructions;

  document.getElementById('sg-screenShare').style.display = 'none';
  document.getElementById('sg-suggestedTime').style.display = 'none';

  document.getElementById('left').onclick = function() {
    f = leftButtonHandler(preLessonDetails, f);
  }

  document.getElementById('right').onclick = function() {
    f = rightButtonHandler(preLessonDetails, f);
  }
}

function leftButtonHandler(details, index) {
  let text = document.getElementById('sg-instructions');
  
  text.classList.remove('fadeInLeft');
  text.classList.remove('fadeInRight');
  text.classList.add('fadeOutRight');

  if (index > 0) {
    index -= 1;
    window.setTimeout(() => {
      text.classList.remove('fadeOutRight');
      text.classList.add('fadeInLeft');
      text.textContent = details[index].instructions;
    }, 300);
    text.textContent = details[index].instructions;
    document.getElementById('sg-suggestedTimeText').textContent = details[index].suggestedTime;
    setScreenShare(details, index);
  } else {
    document.getElementById('speakgenius-modal').style.display = 'none';
    document.getElementById('welcome-modal').style.display = 'flex';
  }
  return index;
}

function rightButtonHandler(details, index) {
  let text = document.getElementById('sg-instructions');
  text.classList.remove('fadeInLeft');
  text.classList.remove('fadeInRight');
  text.classList.add('fadeOutLeft');
  if (index < details.length - 1) {
    index += 1;
    window.setTimeout(() => {
      text.classList.remove('fadeOutLeft');
      text.classList.add('fadeInRight');
      text.textContent = details[index].instructions;
    }, 300);
    document.getElementById('sg-suggestedTimeText').textContent = details[index].suggestedTime;
    setScreenShare(details, index);
  }
  return index;
}