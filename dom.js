
// get text element
const text = document.querySelector('.text')

// get square element
const square = document.querySelector('#square')

// set quote to text element
const setQuote = function() {

  const quotes = [

    {
        quote:    'Dans le doute reboot, si tu te tâtes, formate'
      , author:   'Auteur inconnu'
    },
    {
        quote:    'Un ordinateur a beaucoup de memoire mais pas de souvenirs'
      , author:   'Auteur inconnu'
    },
    {
        quote:    'Plus un ordinateur possède de RAM, plus vite il peut générer un message d\'erreur'
      , author:   'Auteur inconnu'
    },
    {
        quote:    'Un programmeur est une machine qui transforme du café en code'
      , author:   'Auteur inconnu'
    },
    {
        quote:    'Programmeur: Personne qui résoud de manière incompréhensible un problème que tu ignorais avoir'
      , author:   'Auteur inconnu'
    },
    {
        quote:    'Un programmeur ne copie pas, il s\'inspire'
      , author:   'Auteur inconnu'
    },
    {
        quote:    'Parfois l\'informatique ça tombe en marche'
      , author:   'Auteur inconnu'
    },
    {
        quote:    'Le \'lol\' est au boulet ce que le \';\' est au programmeur'
      , author:   'Auteur inconnu'
    }

  ]

  const   length  = quotes.length
        , random  = quotes[Math.floor(Math.random() * length)]
        , quote   = random.quote
        , author  = random.author

  text.innerHTML = `&#34; ${quote} &#34; <br><br> - ${author} -`

}()

/*================================
  > EXERCISE 1
================================*/

/****************
 = METHOD 1
****************/

// listen click event, toggle class
text.addEventListener('click', () => text.classList.toggle('grow'))

/****************
 = METHOD 2
****************/

// listen click event
// text.addEventListener('click', () => {
//
//   // @currentSize => get font-size property value
//   let   currentSize = window.getComputedStyle(text, null).getPropertyValue('font-size')
//       , newSize     = ''
//
//   // set @newSize
//   currentSize === '16px' ? newSize = '32px' : newSize = '16px'
//
//   // set style to text element
//   text.style.fontSize = newSize
//
// })


/*================================
  > EXERCISE 2
================================*/

const triggers = function() {

  // get buttons [array]
  let   buttons = document.getElementsByTagName('button')
      , length  = buttons.length

  // loop on buttons
  for(let i = 0; i < length; i++) {

    let button = buttons[i]

    // listen click event
    button.addEventListener('click', event => {

      // disable default action
      event.preventDefault()

      // get button data-action value
      let action = button.dataset.action

      switch(action) {

        case 'grow':
          return grow()
          break

        case 'color':
          return color()
          break

        case 'reset':
          return reset()
          break

        case 'hide':
          return hide()
          break

        case 'show':
          return show()
          break

      }

    })

  }

}()

const grow = () => {

  // get current height square element
  let currentHeight = square.offsetHeight

  // check if height > 300px
  if(currentHeight > 300)
    return square.style.height = '100px'

  // set style to square element
  square.style.height = `${currentHeight + 10}px`

}

// change color to square element
const color = () => square.style.background = '#00bd71'

// reset css properties values to loading values
const reset = () => {

  square.style.height = '100px'
  square.style.background = '#00aabd'

}

// hide square element
const hide = () => square.style.visibility = 'hidden'

// show square element
const show = () => square.style.visibility = 'visible'


/*================================
  > EXERCISE 3
================================*/

/****************
 = METHOD 1
****************/

const upAndDown = function() {

  // listen press keyboard
  document.body.addEventListener('keydown', event => {

    // check if key is up arrow
    if(event.keyCode === 38) {

      // set style square element
      square.style.height = '100px'
      square.style.marginBottom = '200px'

    }

  })

  // listen unpress keyboard
  document.body.addEventListener('keyup', event => {

    // check if key is up arrow
    if(event.keyCode === 38)
      // set style square element
      square.style.marginBottom = '0px'

  })

}()

/****************
 = METHOD 2
****************/

// listen press keyboard
// document.body.addEventListener('keydown', event => {
//
//   // check if key is up arrow
//   if(event.keyCode === 38) {
//
//     // add class with animation to square element
//     square.classList.add('upAndDown')
//     // remove class to square element after 4s
//     setTimeout(() => square.classList.remove('upAndDown'), 4000)
//
//   }
//
// })
