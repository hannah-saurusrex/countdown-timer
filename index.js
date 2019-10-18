// get plus & minus bottons
const plus = document.querySelectorAll('.plus');
const minus = document.querySelectorAll('.minus');

// get set time button
const set = document.getElementById('set');

// get controls div
const controls = document.getElementById('controls');

// get button controls
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const rewriting = document.getElementById('rewriting');
const reply = document.getElementById('reply');

// get time paragraph
const hoursDiv = document.getElementById('hours').children[2];
const minutesDiv = document.getElementById('minutes').children[2];
const secondsDiv = document.getElementById('seconds').children[2];

// plus the time
plus.forEach((elem) => {
  
  elem.onclick = () => {
    
    let value = elem.parentElement.children[2];
    
    if (elem.parentElement.className === 'hours') {
      if (value.textContent == 24) {
        value.textContent = window.parseInt(value.textContent);
      } else {
        value.textContent = window.parseInt(value.textContent) + 1;
      }
      
      if (value.textContent <= 9) {
        value.textContent = '0' + window.parseInt(value.textContent);
      }
    }
    
    if (elem.parentElement.className === 'minutes' || elem.parentElement.className === 'seconds') {
      if (value.textContent == 59) {
value.textContent = window.parseInt(value.textContent); 
      } else {
        value.textContent = window.parseInt(value.textContent) + 1;
      }
      if (value.textContent <= 9) {
        value.textContent = '0' + window.parseInt(value.textContent);
      }
    }
  }
});

// minus the time
minus.forEach((elem) => {
  
  elem.onclick = () => {
    
    let value = elem.parentElement.children[2];
    
    if (value.textContent == 0) {
      value.textContent = window.parseInt(value.textContent);
    } else {
      value.textContent = window.parseInt(value.textContent) - 1;
    }
    if (value.textContent <= 9) {
      value.textContent = '0' + window.parseInt(value.textContent);
    }
  }
});

// set the time
set.onclick = () => {
  
  const hou = window.parseInt(hoursDiv.textContent) * 60;
  const min = (hou + window.parseInt(minutesDiv.textContent)) * 60;
  let sec = min + window.parseInt(secondsDiv.textContent);
  
  let saveSec = sec;
  
  if (sec === 0) {
    
    alert('please set a value for the timer');
    
  } else {
    
    set.style.display = 'none';
    controls.style.display = 'block';
    
    plus.forEach((elem) => {
      elem.style.display = 'none';
    });
    
    minus.forEach((elem) => {
      elem.style.display = 'none';
    });
    
    var setIn = setInterval(countdown, 1000);
  }
  
  //countdown function
  function countdown() {
    
    let minutes = Math.floor(sec / 60);
    let hours = Math.floor(minutes / 60);
    let seconds = sec % 60;
    
    minutes %= 60;
    
    if (hours <= 9) hours = '0' + hours;
    if (minutes <= 9) minutes = '0' + minutes;
    if (seconds <= 9) seconds = '0' + seconds;
    
    hoursDiv.textContent = hours;
    minutesDiv.textContent = minutes;
    secondsDiv.textContent = seconds;
    
    sec--;
    
  }
  
  countdown();
  
  // pause the countdown timer
  pause.onclick = () => {
    
    play.style.display = 'inline-block';
    pause.style.display = 'none';
    
    clearInterval(setIn);
  };
  
  // play the countdown timer
  play.onclick = () => {
    
    pause.style.display = 'inline-block';
    play.style.display = 'none';
    
    setIn = setInterval(countdown, 1000);
  };
  
  // rewriting the time
  rewriting.onclick = () => {
    
    set.style.display = 'block';
    controls.style.display = 'none';
    
    plus.forEach((elem) => {
      elem.style.display = 'block';
    });
    
    minus.forEach((elem) => {
      elem.style.display = 'block';
    });
    
    clearInterval(setIn);
  };
  
  // reply the countdown
  reply.onclick = () => {
    sec = saveSec;
  };
  
};
