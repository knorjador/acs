
const hamburger = document.querySelector('#iHamburger')

hamburger.addEventListener('click', e => {

  const   mobile  = document.querySelector('#mobile')
        , display = window.getComputedStyle(mobile).getPropertyValue('display')

  display === 'block' ? mobile.style.display = 'none' : mobile.style.display = 'block'

})

let full = document.getElementById('full');
full.addEventListener('click', e => {

  e.preventDefault()

  let btn = document.getElementById('btn-action');
  let display = window.getComputedStyle(btn).getPropertyValue('display');
  let explain = document.getElementById('explain');
  let display_explain = window.getComputedStyle(explain).getPropertyValue('display');

  display === 'flex' ? btn.style.display = 'none' : btn.style.display = 'flex';
  display_explain === 'block' ? explain.style.display = 'none' : explain.style.display = 'block';

  if (full.src === `${window.location.href}assets/img/full-screen.png`) {

    full.src = `${window.location.href}assets/img/minimize.png`

  }else{

   full.src = `${window.location.href}assets/img/full-screen.png`

 }
})
