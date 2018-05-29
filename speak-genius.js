const onboardDetails = [
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


// console.log(document.getElementById('sg-instructions'));
window.onload = function(e) {
  document.getElementById('sg-instructions').textContent = onboardDetails[0].instructions;
  
  document.getElementById('sg-suggestedTimeText').textContent = onboardDetails[i].suggestedTime;
  if (onboardDetails[i].screenShare) document.getElementById('sg-screenShareText').textContent = 'ON';
  else document.getElementById('sg-screenShareText').textContent = 'OFF';
  
  document.getElementById('left').onclick = leftButtonHandler;
  document.getElementById('right').onclick = rightButtonHandler;

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


  console.log(menu);
  // Set Anchor Corner to Bottom End
  menu.setAnchorCorner(0);

  // Turn off menu open animations
  // menu.quickOpen = true;
  // menu.setAnchorCorner(Corner.BOTTOM_END);
  // console.log(menu);
  // document.getElementById('dropdown-menu').setAnchorCorner(Corner.BOTTOM_END);
  // console.log(document.getElementById('dropdown-menu').isOpen());
}

function leftButtonHandler() {
  let text = document.getElementById('sg-instructions');
  if (i > 0) {
    i -= 1;
    text.textContent = onboardDetails[i].instructions;
    document.getElementById('sg-suggestedTimeText').textContent = onboardDetails[i].suggestedTime;
    if (onboardDetails[i].screenShare) document.getElementById('sg-screenShareText').textContent = 'ON';
    else document.getElementById('sg-screenShareText').textContent = 'OFF';
  }
}

function rightButtonHandler() {
  let text = document.getElementById('sg-instructions');
  console.log(i, ' length: ', onboardDetails.length);
  if (i < onboardDetails.length - 1) {
    i += 1;
    text.textContent = onboardDetails[i].instructions;
    document.getElementById('sg-suggestedTimeText').textContent = onboardDetails[i].suggestedTime;
    if (onboardDetails[i].screenShare) document.getElementById('sg-screenShareText').textContent = 'ON';
    else document.getElementById('sg-screenShareText').textContent = 'OFF';
  }
}