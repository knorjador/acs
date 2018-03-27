
let square = document.querySelector('#square')

const trigger = function() {

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
