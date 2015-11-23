audioIds = [];
boxDivs = [];
labels = [];
keys = [115,100,102,103,104,106,107]

$(document).ready(function() {
    
  var addAudio = function(array) {
    return function(event){
      audioIds[array.indexOf(event.target)].currentTime = 0;
      console.log(array.indexOf(event.target))
      audioIds[array.indexOf(event.target)].play();
    }
  }

  for (var i=0;i<7;i++) {
    audioIds.push(document.querySelectorAll('audio')[i]);
    boxDivs.push(document.querySelectorAll('.box')[i]);
    labels.push(document.querySelectorAll('h1')[i]);

    boxDivs[i].addEventListener('mousedown',addAudio(boxDivs));
    labels[i].addEventListener('mousedown',addAudio(labels));

  }

  window.addEventListener('keypress',function(event){
      if (keys.indexOf(event.keyCode)>=0) {
        audioIds[keys.indexOf(event.keyCode)].currentTime = 0;
        audioIds[keys.indexOf(event.keyCode)].play();
      }
    }
  )
  
});