
const   items   = document.querySelectorAll('[data-content]')
      , length  = items.length

for(let i = 0; i < length;  i++) {

  const item = items[i]

  item.addEventListener('keydown', e => {

    const error = item.nextElementSibling

    if(error.innerHTML.length > 0)
      error.parentNode.removeChild(error)

  })

}
