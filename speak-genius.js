/*
TODO:
 -refactor
*/
const preLessonDetails = [
  { 
    instructions1: 'Organize your lesson windows',
    instructions2: [{word:' '}],
    screenShare: null, 
    suggestedTime: null,
    link: 'https://bit.ly/2JowRNX',
  },
  { 
    instructions1: 'Use SG’s dedicated Google account to join your lesson',
    instructions2: [{word:' '}],
    screenShare: null, 
    suggestedTime: null,
    link: 'https://bit.ly/2LbZPh6',
  },
  { 
    instructions1: 'Optimize your network connection settings',
    instructions2: [{word:' '}],
    screenShare: null, 
    suggestedTime: null,
    link: 'https://bit.ly/2Lb3viZ',
  },
  { 
    instructions1: 'Keys to moderating a good lesson',
    instructions2: [{word:' '}],
    screenShare: null, 
    suggestedTime: null,
    link: 'https://bit.ly/2JjXxPO',
  },
  { 
    instructions1: [{ word:'You\'re all set!', color: '#598be9' }],
    instructions2: [{word:' '}],
    instructions3: ['I.', { word:'Click', color: 'orange' }, '“Join Meeting” in Meet'],
    instructions4: ['II.',{ word:'Click', color: 'orange' }, 'the Next Arrow below'],
    instructions5: [ {word:'(', noSpace: true}, {word:'please', underline: true}, 'use headphones)'],
    screenShare: null, 
    suggestedTime: null,
  }
]

const inLessonDetails = [
  { 
    instructions1: [{word: 'Begin Recording:', color:'orange'}, '"Settings", "Record Meeting"'],
    instructions2: ['I. If you\'ve never met before,', { word: 'briefly introduce', underline: true}, 'your background'],
    instructions3: [{word:'and ask', underline:true}, 'your learner to do the same'],
    subjectMatter: 'Learner Joins',
    screenShare: false, 
    suggestedTime: '< 1' ,
    link: 'https://www.google.com/',
  },
  { 
    instructions1: ['I. AMA is an open-ended', {word:'warm-up', underline:true}, 'to kick off the lesson'],
    instructions2: ['II. If your learner is not asking questions,', {word:'answer', underline:true}, 'your own questions',],
    instructions3: [{word:'following', underline:true}, 'your learner\'s response'],
    instructions4: [{word: '"Did you do anything interesting today?", "', color: '#6aa84f', noSpace:true}, {word:'Do you have any questions', color:'#6aa84f', underline: true, noSpace:true}],
    instructions5: [{word:'for me', underline:true, color: '#6aa84f', noSpace: true}, {word:'?", "What did you think about the pre-lesson video?"', color:'#6aa84f'} ],
    subjectMatter: 'Ask Me Anything',
    screenShare: false, 
    suggestedTime: '< 5',
    link: 'https://www.google.com/',
  },
  { 
    instructions1: ['I. Mention that you\'re', {word:'moving on', underline:true}],
    instructions2: [{word: '"Okay cool, you did a', color: '#6aa84f'}, {word:'great job', underline:true, color:'#6aa84f'}, {word:'with Ask Me Anything.', color: '#6aa84f'}],
    instructions3: [{word: 'Are you ready', color:'#6aa84f', underline:true},{word:'to move onto today\'s Lesson Topic?"', color: '#6aa84f'}],
    subjectMatter: 'Section Transition',
    screenShare: false, 
    suggestedTime: 1,
    link: 'https://www.google.com/',
  },
  { 
    instructions1: ['I. Be a',{word: 'conversational guide', underline: true, noSpace: true}, ',', {word:'not', underline:true}, 'a language teacher'],
    instructions2: ['II. Approach your learner', {word: 'as a friend', underline: true}, 'who speaks native English'],
    instructions3: '(ie. be yourself and have fun!)',
    instructions4: ['III. Spend', {word: 'zero time', underline: true}, 'explaining English grammar / technicalities'],
    instructions5: ['IV. Learner and mod should be speaking', {word:'60:40', underline: true}],
    subjectMatter: 'Friendly Reminders',
    screenShare: true, 
    suggestedTime: 15,
    link: 'https://www.google.com/',
  },
  { 
    instructions1: [{word: 'Screen Share ON:', color:'orange'}, '"Present Now", "A Window"'],
    instructions2: ['I. Simply', {word: 'paraphrase the Context', underline: true}, 'in your own words'],
    instructions3: [{word:'“Ok, today we\'ll be talking about [', color:'#6aa84f'}, {word: 'read', color:'#6aa84f', underline: true, italics: true}, {word: 'Topic', color:'#6aa84f', italics: true}, {word: '].', color:'#6aa84f'}],
    instructions4: [{word:'“We\'ll be thinking about questions like, [', color:'#6aa84f'}, {word: 'read', color:'#6aa84f', underline: true, italics: true}, {word: 'Context questions', color:'#6aa84f', italics: true}, {word: '].', color:'#6aa84f'}],
    instructions5: [{word:'Ready to get started', color: '#6aa84f', underline: true, noSpace: true}, {word: '?"', color: '#6aa84f'}],
    subjectMatter: 'Introduce the Topic',
    screenShare: true, 
    suggestedTime: '< 1',
    link: 'https://www.google.com/',
  },
  { 
    instructions1: ['I.', {word:'Learner reads Briefing', underline: true}, 'out loud'],
    instructions2: ['II.',{word:'Underline', underline: true}, 'mis-pronounced words', {word:'in real-time', underline: true}],
    instructions3: [{word: '(', noSpace:true}, {word:'hide your cursor', underline: true}, 'unless underlining)'],
    instructions4: [{word: '"Okay, let\'s start by reviewing the Briefing for today\'s topic', color:'#6aa84f'}],
    instructions5: [{word: 'Can you go ahead and', color:'#6aa84f'}, {word: 'read it for me', color:'#6aa84f', underline: true, noSpace: true}, {word: '?"', color:'#6aa84f'}],
    subjectMatter: 'Learner Reads Briefing',
    screenShare: true, 
    suggestedTime: 2,
    link: 'https://www.google.com/',
  },
  { 
    instructions1: ['I.', {word:'Learner repeats', underline: true}, 'underlined words after you (2-3x per word)'],
    instructions2: ['II. Address', {word:'learner\'s questions', underline: true}, 'on Briefing\'s contents'],
    instructions3: [{word: '"', color:'#6aa84f', noSpace: true}, {word: 'Great job', color:'#6aa84f', underline: true}, {word: 'on reading the Briefing.', color:'#6aa84f'}],
    instructions4: [{word: 'Let\'s review a few words you had trouble with...[', color:'#6aa84f'}, {word: 'review', color:'#6aa84f', underline: true, italics: true}, {word: 'words', color:'#6aa84f', italics:true}, {word: ']...', color:'#6aa84f'}],
    instructions5: [{word: 'Do you have', color:'#6aa84f'}, {word: 'any questions', color:'#6aa84f', underline: true}, {word: 'on the Briefing?"', color:'#6aa84f'}],
    subjectMatter: 'Review Briefing',
    screenShare: true, 
    suggestedTime: 2,
    link: 'https://www.google.com/',
  },
  { 
    instructions1: ['I.', {word:'Read', underline: true}, 'Lead-In and', {word:'pause', underline: true}, 'for learner to absorb'],
    instructions2: [{word:'Screen Share OFF:', color:'orange'}, '"Stop Presenting"'],
    instructions3: ['II.', {word:'Learner responds', underline: true}, 'to Lead-in'],
    instructions4: [{word: '"Okay, the Lead-in for today is a [ Question / Hypothetical / Opinion ],', color:'#6aa84f'}],
    instructions5: [{word:'which is, [', color:'#6aa84f'}, {word: 'read', color:'#6aa84f', underline: true, italics: true}, {word: 'Lead-in', color:'#6aa84f', italics: true}, '].'],
    instructions6: [{word: 'When you\'re ready', color:'#6aa84f', underline: true}, {word: 'to respond, it\'d be great to hear', color:'#6aa84f'}, {word: 'what you think.', color:'#6aa84f', underline: true, noSpace: true}, {word:'"', color:'#6aa84f'}],
    subjectMatter: 'Lead-In',
    screenShare: true, 
    suggestedTime: 2,
    link: 'https://www.google.com/',
  },
  { 
    instructions1: ['I.', {word:'Use pre-set questions', underline: true}, 'to guide your discussion (in order)'],
    instructions2: ['II.', {word:'Paraphrase', underline: true}, 'your learner\'s key takeaways'],
    instructions3: ['III.', {word:'Contribute', underline: true}, 'your own opinion / link to U.S. culture'],
    instructions4: ['IV.', {word:'Dig deeper', underline: true}, 'with follow ups (eg. "Why?")'],
    instructions5: [{word:'"Interesting, so what you\'re saying is [', color:'#6aa84f'}, {word: 'paraphrase', color:'#6aa84f', underline: true, italics: true}, {word: 'key takeaways', color:'#6aa84f', italics: true}, {word:']...', color:'#6aa84f'}],
    instructions6: [{word:'[', color: '#6aa84f'}, {word: 'contribute', color:'#6aa84f', underline: true, italics: true}, {word:']...', color: '#6aa84f', noSpace: true}, {word:'[', color: '#6aa84f'}, {word: 'dig deeper', color:'#6aa84f', underline: true, italics: true},{word:']...[', color: '#6aa84f'}, {word: 'use', color:'#e06666', underline: true, italics: true}, {word: 'pre-set question', color:'#e06666', italics: true}, {word:']"', color: '#6aa84f'}],
    subjectMatter: 'Inquiry',
    screenShare: false, 
    suggestedTime: '< 10',
    link: 'https://www.google.com/',
  },
  { 
    instructions1: [{word: 'Screen Share ON', color:'orange'}],
    instructions2: ['I.', {word:'Simply read', underline: true}, 'your Constructive Feedback'],
    instructions3: ['II. Address', {word:'learner\'s questions', underline: true}, 'on Constructive Feedback'],
    instructions4: [{word: '"Great job', color:'#6aa84f', underline: true}, {word: 'with inquiry.', color:'#6aa84f'}],
    instructions5: [{word:'Let\'s', color:'#6aa84f'}, {word: 'review', color:'#6aa84f', underline: true}, {word: 'a few statements I corrected for you...[', color:'#6aa84f'},{word: 'read', color:'#6aa84f', underline: true, italics: true},{word: 'statements', color:'#6aa84f', italics: true},{word:']...', color:'#6aa84f'}],
    instructions6: [{word:'Do you have', color:'#6aa84f'}, {word: 'any questions', color:'#6aa84f', underline: true}, {word: 'on these statements?"', color:'#6aa84f'}],
    subjectMatter: 'Review Constructive Feedback',
    screenShare: true, 
    suggestedTime: 1,
    link: 'https://www.google.com/',
  },
  { 
    instructions1: ['I. Mention that you\'re', {word:'moving on', underline: true}],
    instructions2: [{word: '"Okay cool,', color:'#6aa84f'}, {word: 'if you\'re ready', color:'#6aa84f', underline: true}, {word: 'let\'s move onto today\'s Key Phrase."', color:'#6aa84f'}],
    subjectMatter: 'Section Transition',
    screenShare: false, 
    suggestedTime: 0,
    link: 'https://www.google.com/',
  },
  { 
    instructions1: ['I.', {word:'Read', underline: true}, 'Key Phrase', {word:'and', underline: true}, 'Sample Sentence out loud'],
    instructions2: ['II.', {word:'Ask your learner', underline: true}, 'what he / she thinks the Phrase means'],
    instructions3: ['III.', {word:'Recap', underline: true}, 'the Phrase\'s meaning in your own words'],
    instructions4: [{word:'"Ok, the Key Phrase for today is [', color:'#6aa84f'}, {word: 'read', color:'#6aa84f', underline: true, italics: true}, {word: 'Key Phrase', color:'#6aa84f', italics: true}, {word:'].', color:'#6aa84f'}],
    instructions5: [{word:'Used in a sentence [', color:'#6aa84f'}, {word: 'read', color:'#6aa84f', underline: true, italics: true}, {word: 'Sample Sentence', color:'#6aa84f', italics: true}, {word:'].', color:'#6aa84f'}],
    instructions6: [{word:'Can you try to', color:'#6aa84f'}, {word:'explain', color:'#6aa84f', underline: true}, {word: 'what the phrase means?...[', color:'#6aa84f'}, {word: 'recap', color:'#6aa84f', underline: true, italics: true}, {word: 'meaning', color:'#6aa84f', italics: true}, {word:']"', color:'#6aa84f'}],
    subjectMatter: 'Key Phrase',
    screenShare: true, 
    suggestedTime: 2,
    link: 'https://www.google.com/',
  },
  { 
    instructions1: [{word: 'Screen Share OFF', color:'orange'}],
    instructions2: ['I.', {word:'Use pre-set questions', underline: true}, 'to guide your discussion (in order)'],
    instructions3: ['II.', {word:'Paraphrase', underline: true}, 'your learner\'s key takeaways'],
    instructions4: ['III.', {word:'Contribute', underline: true}, 'your own opinion / link to U.S. culture'],
    instructions5: ['IV.', {word:'Dig deeper', underline: true}, 'with follow ups (eg. "Why?")'],
    instructions6: [{word:'"Interesting, so what you\'re saying is [', color:'#6aa84f'}, {word: 'paraphrase', color:'#6aa84f', underline: true, italics: true}, {word: 'key takeaways', color:'#6aa84f', italics: true}, {word:']...', color:'#6aa84f'}],
    instructions7: [{word:'[', color: '#6aa84f'}, {word: 'contribute', color:'#6aa84f', underline: true, italics: true}, {word:']...', color: '#6aa84f', noSpace: true}, {word:'[', color: '#6aa84f'}, {word: 'dig deeper', color:'#6aa84f', underline: true, italics: true},{word:']...[', color: '#6aa84f'}, {word: 'use', color:'#e06666', underline: true, italics: true}, {word: 'pre-set question', color:'#e06666', italics: true}, {word:']"', color: '#6aa84f'}],
    subjectMatter: 'Inquiry',
    screenShare: false, 
    suggestedTime: '5 - 10',
    link: 'https://www.google.com/',
  },
  { 
    instructions1: ['I. If 35 minutes',{word: 'has not', underline: true}, 'passed:'],
    instructions2: [{word: 'ask', underline: true}, 'your learner if they have any questions for you'],
    instructions3: [{word: 'and / or', underline: true}, 'fulfill 35 mins with casual conversation'],
    instructions4: ['II.', {word: 'End with a positive comment', underline: true}, 'about your learner\'s performance'],
    subjectMatter: 'Closing the Session',
    screenShare: false, 
    suggestedTime: 'through 35',
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
  document.getElementById('sg-topLeft').style.display = 'flex';
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
      if (!element.noSpace) myText.append(" ");
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
  
  if (details[index].instructions5) {
    let instruction5 = document.getElementById('sg-instructions5');
    instruction5.style.display = 'flex';
    if (Array.isArray(details[index].instructions5)) {
      if (instruction5.hasChildNodes()) instruction5.removeChild(instruction5.firstChild);
      instruction5.appendChild(addDynamicText(details[index].instructions5));
    } else document.getElementById('sg-instructions5').textContent = details[index].instructions5;
  } else document.getElementById('sg-instructions5').style.display = 'none';

  if (details[index].instructions6) {
    let instruction6 = document.getElementById('sg-instructions6');
    instruction6.style.display = 'flex';
    if (Array.isArray(details[index].instructions6)) {
      if (instruction6.hasChildNodes()) instruction6.removeChild(instruction6.firstChild);
      instruction6.appendChild(addDynamicText(details[index].instructions6));
    } else document.getElementById('sg-instructions6').textContent = details[index].instructions6;
  } else document.getElementById('sg-instructions6').style.display = 'none';

  if (details[index].instructions7) {
    let instruction7 = document.getElementById('sg-instructions7');
    instruction7.style.display = 'flex';
    if (Array.isArray(details[index].instructions7)) {
      if (instruction7.hasChildNodes()) instruction7.removeChild(instruction7.firstChild);
      instruction7.appendChild(addDynamicText(details[index].instructions7));
    } else document.getElementById('sg-instructions7').textContent = details[index].instructions7;
  } else document.getElementById('sg-instructions7').style.display = 'none';

  
  if (details[index].subjectMatter) {
    document.getElementById('sg-category').textContent = details[index].subjectMatter;
    if (details[index].subjectMatter === 'Friendly Reminders') document.getElementById('sg-category').style.color = '#e06666'
    else document.getElementById('sg-category').style.color = '#598be9'
  }
}

function setScreenShare(details, index) {
  if (details[index].subjectMatter === 'Lead-In') {
    document.getElementById('sg-screenShareText').textContent = 'ON / OFF';
    document.getElementById('sg-screenShareText').style.color = '#9ea0a6';
  }
  else if (details[index].screenShare) {
    document.getElementById('sg-screenShareText').textContent = 'ON';
    document.getElementById('sg-screenShareText').style.color = '#5d99f8';
  }
  else {
    document.getElementById('sg-screenShareText').textContent = 'OFF';
    document.getElementById('sg-screenShareText').style.color = '#e08282';
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
    if (preLessonBool) document.getElementById('sg-topLeft').style.display = 'none';
    else document.getElementById('sg-topLeft').style.display = 'flex';
    index -= 1;
    if (!preLessonBool && (details[index].subjectMatter === 'Section Transition' || details[index].subjectMatter === 'Friendly Reminders')) {
      document.getElementById('sg-suggestedTime').style.display = 'none';
      document.getElementById('sg-screenShare').style.display = 'none';
    } else {
      document.getElementById('sg-suggestedTime').style.display = 'flex';
      document.getElementById('sg-screenShare').style.display = 'flex';
    }
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
    if (preLessonBool) document.getElementById('sg-topLeft').style.display = 'none';
    else document.getElementById('sg-topLeft').style.display = 'flex';
    index += 1;
    if (!preLessonBool && (details[index].subjectMatter === 'Section Transition' || details[index].subjectMatter === 'Friendly Reminders')) {
      document.getElementById('sg-suggestedTime').style.display = 'none';
      document.getElementById('sg-screenShare').style.display = 'none';
    } else {
      document.getElementById('sg-suggestedTime').style.display = 'flex';
      document.getElementById('sg-screenShare').style.display = 'flex';
    }
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