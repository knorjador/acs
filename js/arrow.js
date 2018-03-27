
document.body.addEventListener('keydown', event => {

  event.preventDefault()

  let   square    = document.querySelector('#square')
      , keyCode   = event.keyCode ? event.keyCode : event.which

  if(keyCode === 38) {

    square.style.marginTop = '-100px'

    window.setTimeout(() => square.style.marginTop = '0px', 1000)

  }

})
