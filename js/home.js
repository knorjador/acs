
// console.log(M)

const   tabs            = document.querySelector('.tabs')
      , instanceTabs    = M.Tabs.init(tabs)
      , content         = document.querySelector('#content')

/**** **** **** **** **** **** **** ****
  > EVENTS
**** **** **** **** **** **** **** ****/

const eventTabs = () => {

  const   elTabs  = document.querySelectorAll('[data-exercise]')
        , length  = elTabs.length

  for(let i = 0; i < length; i++)
    elTabs[i].addEventListener('click', () => post({ display: 'render', exercise:  elTabs[i].dataset.exercise }, render))

}

const eventSelect = (exercise, select) => {

  const button = document.querySelector('button')

  button.addEventListener('click', e => {

    e.preventDefault()

    post({ display: 'data', exercise, data: select.value }, displayData)

  })

}

const eventCheckboxes = () => {

  const button = document.querySelector('button')

  button.addEventListener('click', e => {

    e.preventDefault()

    const   checkedBoxes  = document.querySelectorAll('input[name=checkbox]:checked')
          , length        = checkedBoxes.length
          , tables        = []

    for(let i = 0; i < length; i++)
      tables.push(checkedBoxes[i].value)

    post({ display: 'data', exercise: '3', data: tables }, displayData)

  })

}

const eventScore = () => {

  const score = document.querySelector('#score')

  score.addEventListener('click', e => {

    e.preventDefault()

    const   table       = document.querySelector('.questions').dataset.table
          , responses   = document.querySelectorAll('.response')
          , length      = responses.length
          , values      = []

    for(let i = 0; i < length; i++) {

      const response = responses[i]

      values.push({ number: response.dataset.number, response: response.value })

    }

    post({ display: 'data', exercise: '4', data: { table, values } }, displayScore)

  })

}

const eventRetry = () => {

  const   responses   = document.querySelectorAll('.response')
        , length      = responses.length

  for(let i = 0; i < length; i++) {

    const response = responses[i]

    response.addEventListener('focusin', e => {

      if(response.classList.contains('error'))
        response.classList.remove('error')

      if(response.classList.contains('success'))
        response.classList.remove('success')

      response.value = ''

    })

    response.addEventListener('focusout', e => {

      const value = response.value

      value.length === 0 ? response.classList.add('error') : false

    })

  }

}

/**** **** **** **** **** **** **** ****
  > POST
**** **** **** **** **** **** **** ****/

const post = (data, cb) => { //console.log(data)

  const xhr = new XMLHttpRequest()

  xhr.open('post', 'php/ajax.php')

  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')

  xhr.send(`data=${JSON.stringify(data)}`)

  xhr.onreadystatechange = () => { //console.log(xhr)

    if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200)
      cb(data.exercise, xhr.responseText)

  }

}

/**** **** **** **** **** **** **** ****
  > CALLBACKS
**** **** **** **** **** **** **** ****/

const render = (exercise, data) => { //console.log(data)

  content.innerHTML = ''

  switch (exercise) {

    case '1':
      renderTable(data)
      break

    case '2':
      renderSelect(exercise, data)
      break

    case '3':
      renderCheckboxes(data)
      break

    case '4':
      renderSelect(exercise, data)
      break

    default: return false

  }

}

const renderTable = data => content.insertAdjacentHTML('afterbegin', data)

const renderSelect = (exercise, data) => {

  content.insertAdjacentHTML('afterbegin', data)

  const   select          = document.querySelector('select')
        , instanceSelect  = M.FormSelect.init(select)

  eventSelect(exercise, select)

}

const renderCheckboxes = data => {

  content.insertAdjacentHTML('afterbegin', data)

  eventCheckboxes()

}

const displayData = (exercise, data) => { //console.log(data)

  switch (exercise) {

    case '2':
      displaySelect(data)
      break

    case '3':
      displayCheckboxes(data)
      break

    case '4':
      displayGame(data)
      break

    default: return false

  }

}

const displaySelect = data => { //console.log(data)

  const exercise = document.querySelector('.exercise')

  if(document.querySelector('.d-content'))
    document.querySelector('.d-content').parentNode.removeChild(document.querySelector('.d-content'))

  exercise.insertAdjacentHTML('beforeend', data)

}

const displayCheckboxes = data => { //console.log(data)

  const exercise = document.querySelector('.exercise')

  if(document.querySelector('.d-content'))
    document.querySelector('.d-content').parentNode.removeChild(document.querySelector('.d-content'))

  exercise.insertAdjacentHTML('beforeend', data)

}

const displayGame = data => { //console.log(data)

  const exercise = document.querySelector('.exercise')

  if(document.querySelector('.d-content'))
    document.querySelector('.d-content').parentNode.removeChild(document.querySelector('.d-content'))

  exercise.insertAdjacentHTML('beforeend', data)

  if(document.querySelector('#score'))
    eventScore()

}

const displayScore = (exercise, data) => { //console.log(data)

  const   back        = JSON.parse(data)
        , errors      = back.errors
        , score       = back.score
        , sound       = back.sound
        , elScore     = document.querySelector('#score')
        , pScore      = document.querySelector('.p-score')
        , elAudio     = document.querySelector('#audio')
        , responses   = document.querySelectorAll('.response')
        , length      = responses.length

  pScore !== null ? pScore.parentNode.removeChild(pScore) : false

  elScore.insertAdjacentHTML('afterend', score)

  if(elAudio) elAudio.parentNode.removeChild(elAudio)

  const audio = `<audio id="audio" src="assets/sounds/${sound}.wav" autoplay></audio>`

  document.body.insertAdjacentHTML('afterbegin', audio)

  if(document.querySelector('#audio')) {

    const currentAudio = document.querySelector('#audio')

    currentAudio.onended = () => currentAudio.parentNode.removeChild(currentAudio)

  }

  for(let i = 0; i < length; i++) {

    if(errors[i] === true) {

      responses[i].classList.add('error')

    } else {

      responses[i].classList.remove('error')
      responses[i].classList.add('success')

    }

  }

  eventRetry()

}

/**** **** **** **** **** **** **** ****
  > INIT
**** **** **** **** **** **** **** ****/

const init = function() {

  post({ display: 'render', exercise: '1' }, render)
  eventTabs()

}()
