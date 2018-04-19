
const   menu        = document.getElementById('menu')
      , navMenu     = document.getElementById('menu-mobile')
      , searches    = document.querySelectorAll('.i-search')
      , breakpoint  = 996

menu.addEventListener('click', () => navMenu.style.display == 'block' ? navMenu.style.display = 'none' : navMenu.style.display = 'block')

const search = function() {

  const length = searches.length

  for(let i = 0; i < length; i++) {

    searches[i].addEventListener('click', () => {

      if(!document.querySelector('.f-search')) {

        const form = `

          <form class="f-search">
        
              <input placeholder="Rechercher">

            <button type="submit" class="btn btn-primary">Valider</button>
          </form>

        `

        document.body.insertAdjacentHTML('afterbegin', form)

      } else {

        const formSearch = document.querySelector('.f-search')

        formSearch.parentNode.removeChild(formSearch)

      }

    })

  }

}()


let SCROLL_TOP = 0

const scroll = () => {

  const   Y_OFFSET       = window.pageYOffset || document.documentElement.scrollTop
        , IMG_RED        = document.getElementById('i-red')
        , IMG_BLUE       = document.getElementById('i-blue')
        , IMG_GREEN      = document.getElementById('i-green')
        , TEXT_RED       = document.getElementById('d-red')
        , TEXT_BLUE      = document.getElementById('d-blue')
        , TEXT_GREEN     = document.getElementById('d-green')
        , headerHeight   = document.querySelector('header').offsetHeight
        , imgHeiht       = document.querySelectorAll('.i-product')[0].offsetHeight
        , imgRed         = IMG_RED.getBoundingClientRect().top
        , imgBlue        = IMG_BLUE.getBoundingClientRect().top
        , imgGreen       = IMG_GREEN.getBoundingClientRect().top
        , textRed        = TEXT_RED.getBoundingClientRect().top
        , textBlue       = TEXT_BLUE.getBoundingClientRect().top
        , textGreen      = TEXT_GREEN.getBoundingClientRect().top

  document.getElementById('se-form').style.top   = `${imgHeiht * 3}px`
  document.getElementById('footer').style.top    = `${imgHeiht * 3}px`

  if(Y_OFFSET > SCROLL_TOP) {

    if(imgRed < headerHeight) {

      IMG_RED.style.position    = 'fixed'
      IMG_RED.style.top         = headerHeight
      TEXT_RED.style.top        = `${imgHeiht}px`

      IMG_BLUE.style.top        = `${imgHeiht}px`
      TEXT_BLUE.style.top       = `${imgHeiht}px`

      IMG_GREEN.style.top       = `${imgHeiht}px`
      TEXT_GREEN.style.top      = `${imgHeiht}px`

    }

    if(imgBlue < headerHeight) {

      IMG_BLUE.style.position   = 'fixed'
      IMG_BLUE.style.top        = headerHeight
      TEXT_BLUE.style.top       = `${imgHeiht * 2}px`

      IMG_GREEN.style.top       = `${imgHeiht * 2}px`
      TEXT_GREEN.style.top      = `${imgHeiht * 2}px`

    }

    if(imgGreen < headerHeight) {

      IMG_GREEN.style.position  = 'fixed'
      IMG_GREEN.style.top       = headerHeight
      TEXT_GREEN.style.top      = `${imgHeiht * 3}px`

    }

  } else {

    if(textRed > IMG_RED.getBoundingClientRect().bottom){

      IMG_RED.style.position   = 'relative'
      IMG_RED.style.top        =  '0px'
      TEXT_RED.style.top       =  '0px'

    }

    if(textBlue > IMG_BLUE.getBoundingClientRect().bottom){

      IMG_BLUE.style.position  = 'relative'
      IMG_BLUE.style.top       = `${imgHeiht}px`
      TEXT_BLUE.style.top      = `${imgHeiht}px`

    }

    if(textGreen > IMG_GREEN.getBoundingClientRect().bottom){

      IMG_GREEN.style.position  = 'relative'
      IMG_GREEN.style.top       = `${imgHeiht * 2}px`
      TEXT_GREEN.style.top      = `${imgHeiht * 2}px`

    }

  }

  SCROLL_TOP = Y_OFFSET

}

window.addEventListener('scroll', () => scroll(), true)

window.addEventListener('resize', () => {

  if(document.documentElement.clientWidth > breakpoint)
    navMenu.style.display = 'none'

}, false)
