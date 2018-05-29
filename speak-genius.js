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

  var menuEl = document.querySelector('#test')
  var menu = new mdc.menu.MDCMenu(menuEl);
  var menuButtonEl = document.querySelector('#menu-button');

  // menu.setMaxHeight('100px');
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
  document.getElementById('speakgenius-modal').style.display = 'flex';
  document.getElementById('welcome-modal').style.display = 'none';

  document.getElementById('sg-screenShare').style.display = 'flex';
  document.getElementById('sg-suggestedTime').style.display = 'flex';
  document.getElementById('sg-instructions').textContent = inLessonDetails[i].instructions;
  
  document.getElementById('sg-suggestedTimeText').textContent = inLessonDetails[i].suggestedTime;
  if (inLessonDetails[i].screenShare) {
    document.getElementById('sg-screenShareText').textContent = 'ON';
    document.getElementById('sg-screenShareText').style.color = 'green';
  }
  else {
    document.getElementById('sg-screenShareText').textContent = 'OFF';
    document.getElementById('sg-screenShareText').style.color = 'red';
  }
  
  document.getElementById('left').onclick = function() {
    i = leftButtonHandler(inLessonDetails, i);
  };
  document.getElementById('right').onclick = function() {
    i = rightButtonHandler(inLessonDetails, i);
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
  console.log(index);
  if (index > 0) {
    index -= 1;
    text.textContent = details[index].instructions;
    document.getElementById('sg-suggestedTimeText').textContent = details[index].suggestedTime;
    if (details[index].screenShare) {
      document.getElementById('sg-screenShareText').textContent = 'ON';
      document.getElementById('sg-screenShareText').style.color = 'green';
    }
    else {
      document.getElementById('sg-screenShareText').textContent = 'OFF';
      document.getElementById('sg-screenShareText').style.color = 'red';
    }
  } else {
    document.getElementById('speakgenius-modal').style.display = 'none';
    document.getElementById('welcome-modal').style.display = 'flex';
  }
  return index;
}

function rightButtonHandler(details, index) {
  let text = document.getElementById('sg-instructions');
  console.log(index, details.length - 1);
  if (index < details.length - 1) {
    index += 1;
    text.textContent = details[index].instructions;
    document.getElementById('sg-suggestedTimeText').textContent = details[index].suggestedTime;
    if (details[index].screenShare) {
      document.getElementById('sg-screenShareText').textContent = 'ON';
      document.getElementById('sg-screenShareText').style.color = 'green';
    }
    else {
      document.getElementById('sg-screenShareText').textContent = 'OFF';
      document.getElementById('sg-screenShareText').style.color = 'red';
    }
  }
  return index;
}