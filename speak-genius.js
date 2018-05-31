/*
TODO:
 -refactor
*/
const preLessonDetails = [
  { 
    instructions: 'Check this', 
    subjectMatter: 'Hello',
    screenShare: null, 
    suggestedTime: null 
  },
  { 
    instructions: 'Check that', 
    subjectMatter: 'Hello',
    screenShare: null, 
    suggestedTime: null 
  },
  { 
    instructions: 'Do this', 
    subjectMatter: 'Hello',
    screenShare: null, 
    suggestedTime: null 
  },
  { 
    instructions: 'Do that', 
    subjectMatter: 'Hello',
    screenShare: null, 
    suggestedTime: null 
  },
  { 
    instructions: 'Lets all be happy', 
    subjectMatter: 'Hello',
    screenShare: null, 
    suggestedTime: null 
  }
]

const inLessonDetails = [
  { 
    instructions: 'Ask me anything', 
    subjectMatter: 'Hello',
    screenShare: false, 
    suggestedTime: 5 
  },
  { 
    instructions: 'Introduce the topic', 
    subjectMatter: 'Hello',
    screenShare: true, 
    suggestedTime: 15
  },
  { 
    instructions: 'Have learner read the briefing', 
    subjectMatter: 'Hello',
    screenShare: true, 
    suggestedTime: 15
  },
  { 
    instructions: 'Underline and go over mispronouned words', 
    subjectMatter: 'Hello',
    screenShare: true, 
    suggestedTime: 15
  },
  { 
    instructions: 'Ask the lead-in question and unpack if necessary', 
    subjectMatter: 'Hello',
    screenShare: true, 
    suggestedTime: 15
  },
  { 
    instructions: 'Go through lead-in inquiry', 
    subjectMatter: 'Hello',
    screenShare: false, 
    suggestedTime: 15
  },
  { 
    instructions: 'Don\'t forget to write down constructive feedback!', 
    subjectMatter: 'Hello',
    screenShare: false, 
    suggestedTime: 15
  },
  { 
    instructions: 'Go over constructive feedback', 
    subjectMatter: 'Hello',
    screenShare: true, 
    suggestedTime: 15
  },
  { 
    instructions: 'Introduce key phrase', 
    subjectMatter: 'Hello',
    screenShare: true, 
    suggestedTime: 10
  },
  { 
    instructions: 'Go through key phrase inquiry', 
    subjectMatter: 'Hello',
    screenShare: false, 
    suggestedTime: 10
  },
  { 
    instructions: 'End the lesson', 
    subjectMatter: 'Hello',
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

  document.querySelector('#sggg').addEventListener('click', function(ev) {
    // ev.stopPropagation();
    // console.log('hello1');
    let openMenu = document.getElementById('sg-troubleshootMenu');
    if (!openMenu.classList.contains('sg-opener')) {
      openMenu.classList.add('sg-opener')
    }
  });

  document.querySelector('#scrim').addEventListener('click', function(ev) {
    let openMenu = document.getElementById('sg-troubleshootMenu');
    if (openMenu.classList.contains('sg-opener')) {
      openMenu.classList.remove('sg-opener')
    }
    if (openMenu.classList.contains('mdc-menu--open')) {
      openMenu.classList.remove('mdc-menu--open')
    }
    document.getElementById('scrim').style.display = 'none';    
    ev.stopPropagation();
  });

  document.querySelector('#sg-closeWrapper').addEventListener('click', function(ev) {
    // console.log('hello');
    let openMenu = document.getElementById('sg-troubleshootMenu');
    if (openMenu.classList.contains('sg-opener')) {
      openMenu.classList.remove('sg-opener')
    }
    if (openMenu.classList.contains('mdc-menu--open')) {
      openMenu.classList.remove('mdc-menu--open')
    }
    document.getElementById('scrim').style.display = 'none';    
    ev.stopPropagation();
  });

  // Toggle menu open
  menuButtonEl.addEventListener('click', function() {
    let openMenu = document.getElementById('sg-troubleshootMenu');
    if (!openMenu.classList.contains('sg-opener')) {
      openMenu.classList.add('sg-opener')
    }
    menu.open = !menu.open;
    document.getElementById('scrim').style.display = 'block';
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
  document.getElementById('demo-menu').style.display = 'block';
  //display screenshare and suggested time
  document.getElementById('sg-screenShare').style.display = 'flex';
  document.getElementById('sg-suggestedTime').style.display = 'flex';
  document.getElementById('sg-instructions').textContent = inLessonDetails[i].instructions;
  document.getElementById('sg-category').textContent = inLessonDetails[i].subjectMatter;

  setScreenShare(inLessonDetails, i);
  
  document.getElementById('sg-suggestedTimeText').textContent = inLessonDetails[i].suggestedTime + ' min';
  
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
    document.getElementById('sg-screenShareText').style.color = '#5d99f8';
  }
  else {
    document.getElementById('sg-screenShareText').textContent = 'OFF';
    document.getElementById('sg-screenShareText').style.color = 'red';
  }
}

function preLessonButton() {
  preLesson();
  preLessonBool = true;
}

function inLessonButton() {
  inLesson();
  preLessonBool = false;
}

function preLesson() {
  document.getElementById('welcome-modal').style.display = 'none';
  document.getElementById('speakgenius-modal').style.display = 'flex';
  document.getElementById('demo-menu').style.display = 'none';

  document.getElementById('sg-category').textContent = preLessonDetails[f].subjectMatter;
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
  if (index > 0) {
    index -= 1;
    document.getElementById('sg-category').textContent = details[index].subjectMatter;
    text.textContent = details[index].instructions;
    document.getElementById('sg-suggestedTimeText').textContent = details[index].suggestedTime + ' min';
    setScreenShare(details, index);
  } else {
    document.getElementById('speakgenius-modal').style.display = 'none';
    document.getElementById('welcome-modal').style.display = 'flex';
  }
  return index;
}

function rightButtonHandler(details, index) {
  let text = document.getElementById('sg-instructions');
  if (index < details.length - 1) {
    index += 1;
    text.textContent = details[index].instructions;
    document.getElementById('sg-category').textContent = details[index].subjectMatter;    
    document.getElementById('sg-suggestedTimeText').textContent = details[index].suggestedTime + ' min';
    setScreenShare(details, index);
  }
  return index;
}