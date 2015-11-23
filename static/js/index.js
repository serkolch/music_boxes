audioIds = [];
boxDivs = [];
labels = [];
// These are the keycodes for S D F G H J K
keys = [115,100,102,103,104,106,107]

$(document).ready(function() {

  for (var i=0;i<7;i++) {
    audioIds.push(document.querySelectorAll('audio')[i]);
    boxDivs.push(document.querySelectorAll('.box')[i]);
    labels.push(document.querySelectorAll('span')[i]);

    // Add event listeners for all 7 spans
    labels[i].addEventListener('mousedown',function(event) {
      // Find the index value of the target      
      index = labels.indexOf(event.target);
      //Add and remove pulse to the target Div
      boxDivs[index].classList.add('pulse');
      window.setTimeout(function() {
        boxDivs[index].classList.remove('pulse')
      }, 650);
      // Reset and play audio for the target note
      audioIds[index].currentTime = 0;
      audioIds[index].play();
    });
  }

  // Add event listener to the window with the condition to only play the corresponding note if S D F G H J K are pressed
  window.addEventListener('keypress', function(event) {
      if (keys.indexOf(event.keyCode)>=0) {
        index = keys.indexOf(event.keyCode);
        boxDivs[index].classList.add('pulse');
        window.setTimeout(function() {
          boxDivs[index].classList.remove('pulse')
        }, 650);
        audioIds[index].currentTime = 0;
        audioIds[index].play();
      }
    }
  )
  
});