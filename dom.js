
/*================================
  > EXERCISE 1
================================*/

// get text element
let text = document.querySelector('.text')

/****************
 = METHOD 1
****************/

// attach click event, toggle class
text.addEventListener('click', () => text.classList.toggle('grow'))

/****************
 = METHOD 2
****************/

// text.addEventListener('click', () => {
//
//   let   currentSize = window.getComputedStyle(text, null).getPropertyValue('font-size')
//       , newSize     = ''
//
//   currentSize === '16px' ? newSize = '32px' : newSize = '16px'
//
//   text.style.fontSize = newSize
//
// })


/*================================
  > EXERCISE 2
================================*/

// get square element
let square = document.querySelectorAll('.square')[0]

const triggers = function() {

  let   buttons = document.getElementsByTagName('button')
      , length  = buttons.length

  for(let i = 0; i < length; i++) {

    let button = buttons[i]

    button.addEventListener('click', e => {

      e.preventDefault()

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

  let currentHeight = square.offsetHeight

  if(currentHeight > 300)
    return square.style.height = '100px'

  square.style.height = `${currentHeight + 10}px`

}

const color = () => square.style.background = 'green'

const reset = () => square.style.background = 'blue'

const hide = () => square.style.visibility = 'hidden'

const show = () => square.style.visibility = 'visible'

/*================================
  > EXERCISE 3
================================*/

/****************
 = METHOD 1
****************/

const upArrow = function() {

  let square = document.querySelectorAll('.square')[1]

  document.body.addEventListener('keydown', event => {

    event.preventDefault()

    if(event.keyCode === 38)
      square.style.marginBottom = '200px'

  })

  document.body.addEventListener('keyup', event => {

    event.preventDefault()

    if(event.keyCode === 38)
      square.style.marginBottom = '0px'

  })

}()

/****************
 = METHOD 2
****************/

// document.body.addEventListener('keydown', event => {
//
//   event.preventDefault()
//
//   if(event.keyCode === 38) {
//
//     let square = document.querySelectorAll('.square')[1]
//
//     square.classList.toggle('upAndDown')
//
//   }
//
// })
