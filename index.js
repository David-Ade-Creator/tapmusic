window.addEventListener('load',  () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector('.visual');
  const colors = [
    "#60d394",
    "#fcba03",
    "#0384fc",
    "#fc03e3",
    "#fc0331",
    "#03fcf0"
  ];

//get going with the sound here
pads.forEach((pad, i) => {
  pad.addEventListener('click', function(){
    sounds[i].currentTime = 0;
    sounds[i].play();

    createBubbles(i);
  });
});

//create a function that made bubbles
const createBubbles = (i) => {
  const bubble = document.createElement("div");
  visual.appendChild(bubble);
  bubble.style.backgroundColor = colors[i];
  bubble.style.animation = 'jump 2s ease';
  bubble.addEventListener('animationend', function(){
    visual.removeChild(this);
  });
};
});
