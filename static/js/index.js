var audioIds = [];
var boxDivs = [];
var labels = [];
// These are the keycodes for S D F G H J K
var keys = [115,100,102,103,104,106,107];

$(document).ready(function() {

  var findIndex = function(event) {
    // Change array and target based on type of event
    if (event.type === "keypress"){
      arr = keys;
      target = event.keyCode;
    } else if (event.type === "mousedown") {
      arr = labels;
      target = event.target
    }

    // Find the index value of the target
    index = arr.indexOf(target);
    return index;
  }

  var addAudioToIndex = function(event) {

    findIndex(event)

    // Add and remove pulse to the target Div
    boxDivs[index].classList.add('pulse');
    window.setTimeout(function() {
      boxDivs[index].classList.remove('pulse')
    }, 500);
    // Reset and play audio for the target note
    audioIds[index].currentTime = 0;
    audioIds[index].play();

  }

  for (var i=0;i<7;i++) {
    audioIds.push(document.querySelectorAll('audio')[i]);
    boxDivs.push(document.querySelectorAll('.box')[i]);
    labels.push(document.querySelectorAll('span')[i]);

    // Add event listeners for all 7 spans
    labels[i].addEventListener('mousedown',addAudioToIndex);
  }

  // Add event listener to the window with the condition to only play the corresponding note if S D F G H J K are pressed
  window.addEventListener('keypress', function(event) {
      if (keys.indexOf(event.keyCode)>=0) {
        addAudioToIndex(event);
      }
    }
  )
  
  var button = document.querySelector('button')
  button.addEventListener('click', function() {
    for (i=0;i<Math.floor(15+200*Math.random());i++) {
      window.setTimeout(function(){
        z = Math.floor(7*Math.random())
        console.log(z)
        boxDivs[z].classList.add('pulse');
        window.setTimeout(function() {
          boxDivs[z].classList.remove('pulse')
        }, 500);
        audioIds[z].currentTime = 0;
        audioIds[z].play();
      }, (i*600))
    }
  })

});