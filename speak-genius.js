/*
TODO:
 -refactor
*/
const preLessonDetails = [
  { 
    instructions1: 'Organize your lesson windows',
    screenShare: null, 
    suggestedTime: null,
    link: 'https://bit.ly/2JowRNX',
  },
  { 
    instructions1: 'Use SG’s dedicated Meet account to join your lesson',
    screenShare: null, 
    suggestedTime: null,
    link: 'https://bit.ly/2LbZPh6',
  },
  { 
    instructions1: 'Optimize your Meet connection settings',
    screenShare: null, 
    suggestedTime: null,
    link: 'https://bit.ly/2Lb3viZ',
  },
  { 
    instructions1: 'Keys to moderating a good lesson',
    screenShare: null, 
    suggestedTime: null,
    link: 'https://bit.ly/2JjXxPO',
  },
  { 
    instructions1: [{ word:'You\'re all set!', color: '#598be9' }],
    instructions2: [{word:' '}],
    instructions3: ['I. ', { word:'Click', color: 'orange' }, '“Join Meeting” in Meet'],
    instructions4: ['II. ', { word:'Click', color: 'orange' }, 'the Next Arrow below'],
    screenShare: null, 
    suggestedTime: null,
  }
]

const inLessonDetails = [
  { 
    instructions1: '- Begin Recording: “Settings”, “Record Meeting”',
    instructions2: ['- If you\'ve never met before, briefly', { word: 'introduce', underline: true}, 'your background and', {word:'ask', underline:true}, 'learner to do the same'],
    subjectMatter: 'Learner Joins',
    screenShare: false, 
    suggestedTime: '<1' ,
    link: 'https://www.google.com/',
  },
  { 
    instructions1: 'Warm-up by casually exchanging questions',
    instructions2: [{word:'Answer', underline: true}, 'your own questions', {word: 'following', underline:true}, 'your learner\'s responses'],
    instructions3: ['eg. "Did you do anything interesting today?",', {word: '"Do you have any questions for me?"', underline: true}, '"What did you think about the pre-lesson video?"'],
    subjectMatter: 'Ask Me Anything',
    screenShare: false, 
    suggestedTime: '<15',
    link: 'https://www.google.com/',
  },
  { 
    instructions1: 'Throw in a brief comment that you’re transitioning',
    instructions2: 'eg. “Okay cool, you did a great job with Ask Me Anything - are you ready to move onto the Lesson Topic?”',
    subjectMatter: 'Section Transition',
    screenShare: false, 
    suggestedTime: 1,
    link: 'https://www.google.com/',
  },
  { 
    instructions1: ['Be a conversational guide,', {word:'not a language teacher', underline:true}],
    instructions2: ['Approach your learner as', {word: 'a friend who speaks native English', underline: true}],
    instructions3: [{word: 'Aim to spend zero time', underline: true}, 'explaining English grammar / technicalities'],
    subjectMatter: 'Friendly Reminders',
    screenShare: true, 
    suggestedTime: 15,
    link: 'https://www.google.com/',
  },
  { 
    instructions1: 'Screen Share ON: “Present Now”, “A Window”',
    instructions2: 'Simply paraphrase the Context in your own words ',
    instructions3: 'eg. “Today’s lesson is about [ Topic ] - we’ll be thinking about questions like, [ Context Questions ]. Ready to get started?”',
    subjectMatter: 'Introduce the Topic',
    screenShare: true, 
    suggestedTime: '<1 min',
    link: 'https://www.google.com/',
  },
  { 
    instructions1: 'Ask learner to read Briefing out loud',
    instructions2: 'Underline any mis-pronounced words in real-time',
    subjectMatter: 'Learner Reads Briefing',
    screenShare: true, 
    suggestedTime: 2,
    link: 'https://www.google.com/',
  },
  { 
    instructions1: 'Ask learner to repeat mis-pronounced words after you (2-3x per word)',
    instructions2: 'Ask learner if they have any questions about the Briefing',
    instructions3: 'eg. “Great job on reading the Briefing. We’re going to quickly review words you could have pronounced better…[ review words ]...did you have any questions before we move on?”',
    subjectMatter: 'Review Briefing',
    screenShare: true, 
    suggestedTime: 2,
    link: 'https://www.google.com/',
  },
  { 
    instructions1: 'Read Lead-In and ask learner what he/she thinks',
    instructions2: 'If learner doesn’t understand, use your judgement to unpack / review',
    instructions3: 'eg. “Okay, so the Lead-In for today is [ Lead-In ]. If you understand the Lead-In, it’d be great to hear your thoughts.”',
    instructions4: 'Screen Share OFF: “Stop Presenting”',
    subjectMatter: 'Lead-In',
    screenShare: true, 
    suggestedTime: 2,
    link: 'https://www.google.com/',
  },
  { 
    instructions1: 'Step 1: use SG’s pre-set questions to guide your discussion ',
    instructions2: 'Step 2: paraphrase learner’s response and (if relevant) follow up with your own brief commentary ',
    instructions3: 'Step 3: dig deeper with your own follow up questions (eg. “Why?”) ',
    instructions4: 'eg. “Interesting, so what you’re saying is [ key takeaway ]...[ follow up commentary ]...[ follow up question ]...[ SG’s pre-set question ]”',
    subjectMatter: 'Inquiry',
    screenShare: false, 
    suggestedTime: '<10',
    link: 'https://www.google.com/',
  },
  { 
    instructions1: 'Screen Share ON',
    instructions2: 'Briefly read all written Constructive Feedback',
    instructions3: 'Ask your learner if he/she has any questions on your statements',
    instructions4: 'eg. “Before we move on, I’d just like to quickly review a few statements I corrected while you were speaking…[ Simply Read Statements ]”',
    subjectMatter: 'Review Constructive Feedback',
    screenShare: true, 
    suggestedTime: 1,
    link: 'https://www.google.com/',
  },
  { 
    instructions1: 'eg. “If you’re ready, let’s move onto today’s Key Phrase?”',
    subjectMatter: 'Section Transition',
    screenShare: false, 
    suggestedTime: 0,
    link: 'https://www.google.com/',
  },
  { 
    instructions1: 'Step 1: read the key phrase and sample sentence out loud',
    instructions2: 'Step 2: ask your learner what he/she thinks the word means',
    instructions3: 'Step 3: recap the meaning in your own words',
    instructions4: 'eg. “The Key Phrase for today is [ Key Phrase ]...in a Sample Sentence [ Sample Sentence ]...Based on the sentence, what do you think the phrase means?...[ recap meaning ]”',
    subjectMatter: 'Key Phrase',
    screenShare: true, 
    suggestedTime: 2,
    link: 'https://www.google.com/',
  },
  { 
    instructions1: 'Screen Share OFF',
    instructions2: 'Use SG’s pre-set questions to guide your discussion',
    instructions3: 'eg. “Interesting, so what you’re saying is [ key takeaway ]...[ follow up commentary ]...[ follow up question ]...[ SG’s pre-set question ] ”',
    subjectMatter: 'Inquiry',
    screenShare: false, 
    suggestedTime: '5-10',
    link: 'https://www.google.com/',
  },
  { 
    instructions1: 'If 35 minutes has not passed, ask your learner if they have any questions for you ',
    instructions2: 'End the session with a positive comment about your learner’s performance',
    subjectMatter: 'Closing the Session',
    screenShare: false, 
    suggestedTime: 1,
    link: 'https://www.google.com/',
  },
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
  document.getElementById('sg-documentation').style.display = 'none';
  document.getElementById('demo-menu').style.display = 'block';
  document.getElementById('sg-category').style.display = 'block';
  //display screenshare and suggested time
  document.getElementById('sg-screenShare').style.display = 'flex';
  document.getElementById('sg-suggestedTime').style.display = 'flex';
  document.getElementById('sg-documentation').href = inLessonDetails[i].link;
  //sg instructions
  setInstructions(inLessonDetails, i);
  setScreenShare(inLessonDetails, i);
  
  document.getElementById('sg-suggestedTimeText').textContent = inLessonDetails[i].suggestedTime + ' min';
  
  document.getElementById('left').onclick = function() {
    i = leftButtonHandler(inLessonDetails, i);
  };
  document.getElementById('right').onclick = function() {
    i = rightButtonHandler(inLessonDetails, i);
  }
}

function addDynamicText(inputArray) {
  let myText = document.createElement('p');
  inputArray.forEach((element) => {
    if (typeof element === 'object') {
      let textNode = document.createTextNode(element.word);
      let node;
      if (element.italics && element.underline) {
        node = document.createElement('U');
        node.appendChild(textNode);
        node.style.fontStyle = 'italic';
      } else if (element.italics) {
        node = document.createElement('I');
        node.appendChild(textNode);
      } else if (element.underline) {
        node = document.createElement('U');
        node.appendChild(textNode);
      } else {
        node = document.createElement('span');
        node.appendChild(textNode);
      }
      if (element.color) node.style.color = element.color;
      myText.appendChild(node);
      myText.append(" ");
    } else {
      let textNode = document.createTextNode(element);
      myText.appendChild(textNode);
      myText.append(" ");
    }
  })
  return myText;
}

function setInstructions(details, index) {
  if (details[index].instructions1) {
    document.getElementById('sg-instructions1').style.display = 'flex';
    if (Array.isArray(details[index].instructions1)) {
      if (document.getElementById('sg-instructions1').hasChildNodes()) document.getElementById('sg-instructions1').removeChild(document.getElementById('sg-instructions1').firstChild);
      document.getElementById('sg-instructions1').appendChild(addDynamicText(details[index].instructions1));
    } else document.getElementById('sg-instructions1').textContent = details[index].instructions1;
  } else document.getElementById('sg-instructions1').style.display = 'none';
  if (details[index].instructions2) {
    console.log('hello')
    let instruction2 = document.getElementById('sg-instructions2');
    instruction2.style.display = 'flex';
    if (Array.isArray(details[index].instructions2)) {
      if (instruction2.hasChildNodes()) instruction2.removeChild(instruction2.firstChild);
      instruction2.appendChild(addDynamicText(details[index].instructions2));
    } else document.getElementById('sg-instructions2').textContent = details[index].instructions2;
  } else document.getElementById('sg-instructions2').style.display = 'none';
  if (details[index].instructions3) {
    let instruction3 = document.getElementById('sg-instructions3')
    instruction3.style.display = 'flex';
    if (Array.isArray(details[index].instructions3)) {
      if (instruction3.hasChildNodes()) instruction3.removeChild(instruction3.firstChild);
      instruction3.appendChild(addDynamicText(details[index].instructions3));
    } else document.getElementById('sg-instructions3').textContent = details[index].instructions3;
  } else document.getElementById('sg-instructions3').style.display = 'none';
  if (details[index].instructions4) {
    let instruction4 = document.getElementById('sg-instructions4');
    instruction4.style.display = 'flex';
    if (Array.isArray(details[index].instructions4)) {
      if (instruction4.hasChildNodes()) instruction4.removeChild(instruction4.firstChild);
      instruction4.appendChild(addDynamicText(details[index].instructions4));
    } else document.getElementById('sg-instructions4').textContent = details[index].instructions4;
  } else document.getElementById('sg-instructions4').style.display = 'none';

  if (details[index].subjectMatter) document.getElementById('sg-category').textContent = details[index].subjectMatter;
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
  f = 0;
  preLesson();
  preLessonBool = true;
}

function inLessonButton() {
  i = 0;
  inLesson();
  preLessonBool = false;
}

function preLesson() {
  document.getElementById('welcome-modal').style.display = 'none';
  document.getElementById('speakgenius-modal').style.display = 'flex';
  document.getElementById('demo-menu').style.display = 'none';
  document.getElementById('sg-category').style.display = 'none';

  document.getElementById('sg-documentation').style.display = 'flex';
  document.getElementById('sg-documentation').href = preLessonDetails[f].link;
  
  document.getElementById('sg-screenShare').style.display = 'none';
  document.getElementById('sg-suggestedTime').style.display = 'none';
  
  setInstructions(preLessonDetails, f);

  document.getElementById('left').onclick = function() {
    f = leftButtonHandler(preLessonDetails, f);
  }

  document.getElementById('right').onclick = function() {
    f = rightButtonHandler(preLessonDetails, f);
  }
}

function leftButtonHandler(details, index) {
  if (index > 0) {
    if (index === details.length - 1 && preLessonBool) document.getElementById('sg-documentation').style.display = 'flex';
    index -= 1;
    if (!preLessonBool) document.getElementById('sg-category').textContent = details[index].subjectMatter;
    document.getElementById('sg-documentation').href = details[index].link;
    document.getElementById('sg-suggestedTimeText').textContent = details[index].suggestedTime + ' min';
    setScreenShare(details, index);
    setInstructions(details, index);
  } else {
    document.getElementById('speakgenius-modal').style.display = 'none';
    document.getElementById('welcome-modal').style.display = 'flex';
  }
  return index;
}

function rightButtonHandler(details, index) {
  if (index < details.length - 1) {
    index += 1;
    if (!preLessonBool) document.getElementById('sg-category').textContent = details[index].subjectMatter;
    if (index === details.length - 1 && preLessonBool) document.getElementById('sg-documentation').style.display = 'none';
    document.getElementById('sg-documentation').href = details[index].link;
    document.getElementById('sg-suggestedTimeText').textContent = details[index].suggestedTime + ' min';
    setScreenShare(details, index);
    setInstructions(details, index);
  } else {
    if (preLessonBool) {
      inLesson();
      preLessonBool = false;
    }
  }
  return index;
}