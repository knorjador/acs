
const   items   = document.querySelectorAll('[data-content]')
      , select  = document.querySelector('select')
      , radios  = document.querySelectorAll('input[type="radio"]')
      , length  = items.length

for(let i = 0; i < length;  i++) {

  const item = items[i]

  item.addEventListener('keydown', e => {

    const error = item.nextElementSibling

    if(error !== null && error.innerHTML.length > 0)
      error.parentNode.removeChild(error)

  })

}

select.addEventListener('click', () => {

  const error = select.nextElementSibling

  if(error !== null && error.innerHTML.length > 0)
    error.parentNode.removeChild(error)

})

radios.forEach(radio  => {

  radio.addEventListener('click', () => {

    if(document.querySelector('#sradio'))
      document.querySelector('#sradio').parentNode.removeChild(document.querySelector('#sradio'))

  })

})
