
const checkSubmit = () => {

  document.querySelector('.btn').addEventListener('click', e => {

    e.preventDefault()

    checkRadio()
    checkItems()
    checkEmail()
    checkSelect()

    if(checkRadio() && checkItems() && checkEmail() && checkSelect())
      displayData()

  })

}

const checkRadio = () => {

  if(!document.querySelector('input[name="radio"]:checked')) {

    if(!document.querySelector('.p-error-radio')) {

      let   radios  = document.querySelectorAll('.custom-radio')
          , length  = radios.length
          , message = `<p class="p-error p-error-radio">Choisir une civilité</p>`

      document.querySelector('.d-radio').insertAdjacentHTML('beforeend', message)

      for(let i = 0; i < length; i++) {

        radios[i].addEventListener('click', () => {

          let error = document.querySelector('.p-error-radio')

          if(error)
            error.parentNode.removeChild(error)

        })

      }

    }

    return false

  }

  return true

}

const checkItems = () => {

  let   items   = document.querySelectorAll('.item')
      , length  = items.length
      , valid   = true

  for(let i = 0; i < length; i++) {

    let   item  = items[i]
        , value = item.value

    if(value.length === 0) {

      if(!item.nextElementSibling) {

        showMessage(item)
        eventFocus(item)
        eventBlur(item)

      }

      valid = false

    }

  }

  return valid

}

const eventFocus = item => {

  item.addEventListener('focus', e => {

    let next = item.nextElementSibling

    if(next)
      next.parentNode.removeChild(next)

  })

}

const eventBlur = item => {

  item.addEventListener('blur', e => {

    if(item.value.length === 0)
      showMessage(item)

  })

}

const showMessage = item => item.insertAdjacentHTML('afterend', `<p class="p-error">Le champ <strong>${item.dataset.value}</strong> est requis</p>`)

const checkEmail = () => {

  let   email   = document.querySelector("[data-value='Email']")
      , value   = email.value

  if(value.length === 0) {

    manageEmail(email, `Le champ <strong>Email</strong> est requis`)

    return false

  }

  if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {

    manageEmail(email, `L'email est invalide`)

    return false

  }

  return true

}

const manageEmail = (email, message) => {

  if(!email.nextElementSibling) {

    email.insertAdjacentHTML('afterend', `<p class="p-error">${message}</p>`)

    eventFocus(email)

    email.addEventListener('blur', e => {

      if(email.value.length === 0)
        return email.insertAdjacentHTML('afterend', `<p class="p-error">Le champ <strong>Email</strong> est requis</p>`)

      if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
        return email.insertAdjacentHTML('afterend', `<p class="p-error">L'email est invalide.</p>`)

    })

    return false

  }

}

const checkSelect = () => {

  let   select  = document.querySelector('.custom-select')
      , value   = select.value

  if(value === 'Nature du contact') {

    if(!select.nextElementSibling) {

      select.insertAdjacentHTML('afterend', `<p class="p-error">Choisir une nature de contact</p>`)

      eventFocus(select)

      select.addEventListener('blur', () => checkSelect())

    }

    return false

  }

  return true

}

const displayData = () => {

  let   fields    = Array.from(document.querySelectorAll("[data-value]"))
      , display   = `FORM IS OK.\n\n`

  display += `Civilité : ${document.querySelector('input[name="radio"]:checked').dataset.radio}\n`
  display += fields.reduce((string, field) =>  string += `${field.dataset.value} : ${field.value}\n`, '')

  alert(display)

}

const init = function() { checkSubmit() }()
