
 function playSound(e){                  //adding an event handler to the window object

    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
    //console.log(audio);
    if(!audio) return;                 //stop the function from running all together
    audio.currentTime = 0;            //rewind to the start
    audio.play();
    key.classList.add('playing');    //add css selector 'playing' to every member of the 'key' classList
}

function removeTransition(e){
    if(e.propertyName !== 'transform') return;       //skip it if it's not a transform  'hash rocket' =>
    this.classList.remove('playing');
    //console.log(e.propertyName);
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removeTransition)
);
window.addEventListener('keydown', playSound);