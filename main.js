// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const errorModal = document.querySelector('#modal')
errorModal.className = 'hidden'

document.addEventListener('DOMContentLoaded', 
  likesButtonListener())

  function likesButtonListener(){
    const likeButtons = document.querySelectorAll(".like-glyph")
    likeButtons.forEach(button => {
      
      button.addEventListener('click', event => increaseLikes(event))
    })
  }

  function increaseLikes(event){
    
    mimicServerCall()
    .then(() => {
      let heartButton = event.target

      heartButton.innerHTML == EMPTY_HEART ?
      heartButton.innerHTML = FULL_HEART :
      heartButton.innerHTML = EMPTY_HEART

      heartButton.innerHTML == FULL_HEART ?
      heartButton.className = 'activated-heart' :
      heartButton.classList.remove('activated-heart')
    })
    .catch((error) => {
      errorModal.classList.remove('hidden')
      errorModal.innerHTML = error
      setTimeout(() => {
        errorModal.className = 'hidden'
      }, 5000)
    })
  }


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
