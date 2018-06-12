
document.addEventListener('DOMContentLoaded', () => {
  
  const   modal        = document.querySelectorAll('.modal')
        , initModal    = M.Modal.init(modal)
        , dropdown     = document.querySelectorAll('.dropdown-trigger')
        , initDropdown = M.Dropdown.init(dropdown)
        , sidenav      = document.querySelectorAll('.sidenav')
        , initSidenav  = M.Sidenav.init(sidenav)
        , select       = document.querySelectorAll('select')
        , instances    = M.FormSelect.init(select)
})

const   form   = document.querySelector('form')
, search = document.querySelector('.search')

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  showLoading()
  
  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=d993305328e94f4f94381c6aec18d036&s=${search.value}`)
  .then(response => response.json())
  .then(data => {
    
    const loading = document.querySelector('.show-loading')
    
    loading.parentNode.removeChild(loading)
    
    document.querySelector('#user-choice').setAttribute('src', data.data.images.original.url)
    
  })
  
  /*  const XHR = new XMLHttpRequest()
  
  XHR.open('GET', `https://api.giphy.com/v1/gifs/translate?api_key=dc6zaTOxFJmzC&s=${search.value}`)
  
  XHR.send(null)
  
  XHR.onreadystatechange = () => {
    
    if(XHR.readyState === 4 && XHR.status === 200) {
      
      const data = JSON.parse(XHR.responseText)
      
      console.log(data)
      
      document.querySelector('#user-choice').setAttribute('src', data.data.images.original.url)
      
    }
    
  } */
  
})

const showLoading = () => {
  
  const html = `
  
  <div class="show-loading">
  
  <p>Recherche de Gif</p>
  
  <div class="preloader-wrapper big active">
  <div class="spinner-layer spinner-blue">
  <div class="circle-clipper left">
  <div class="circle"></div>
  </div><div class="gap-patch">
  <div class="circle"></div>
  </div><div class="circle-clipper right">
  <div class="circle"></div>
  </div>
  </div>
  
  <div class="spinner-layer spinner-red">
  <div class="circle-clipper left">
  <div class="circle"></div>
  </div><div class="gap-patch">
  <div class="circle"></div>
  </div><div class="circle-clipper right">
  <div class="circle"></div>
  </div>
  </div>
  
  <div class="spinner-layer spinner-yellow">
  <div class="circle-clipper left">
  <div class="circle"></div>
  </div><div class="gap-patch">
  <div class="circle"></div>
  </div><div class="circle-clipper right">
  <div class="circle"></div>
  </div>
  </div>
  
  <div class="spinner-layer spinner-green">
  <div class="circle-clipper left">
  <div class="circle"></div>
  </div><div class="gap-patch">
  <div class="circle"></div>
  </div><div class="circle-clipper right">
  <div class="circle"></div>
  </div>
  </div>
  </div>
  
  </div>
  
  `
  
  document.querySelector('.user-choice').insertAdjacentHTML('afterbegin', html)
  
}
