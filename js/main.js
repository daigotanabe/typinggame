'use strict';
{
  function setWord() {
    word =words.splice(Math.floor(Math.random() * words.length), 1)[0];
    target.textContent = word;
    loc = 0;
  }
  const words = [
    'red',
    'white',
    'purple',
    'black',
    'brown',
    'green',
    'blue',
    'pink',
  ];
  let word;
  let loc = 0;
  let startTime;
  let isPlaying = false;
  const target = document.getElementById('target');
  const btn = document.querySelector('.btn');

  btn.addEventListener('click', () => {
    if(isPlaying === true){
      return;
    }
    btn.classList.add('hide');
    target.classList.add('hide');
    isPlaying = true;
    startTime = Date.now();
    setWord();
  });

  document.addEventListener('keydown',e =>{
    if(e.key !== word[loc]) {
      return;
    }
    loc++;
    target.textContent = '_'.repeat(loc) + word.substring(loc);

    if(loc === word.length) {
      if(words.length === 0){
        const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
        const result = document.getElementById('result');
        target.textContent = 'Congratulations';
        result.textContent = `Finished! ${elapsedTime} seconds`;
        return;
      }
      setWord();
    }
    
  });

}