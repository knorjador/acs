
const   title   = document.getElementsByTagName('h1')[0]
      , input   = document.getElementsByTagName('input')[0]
      , button  = document.getElementsByTagName('button')[0]
      , result  = document.getElementById('result')
      , min     = 0
      , max     = 100

let count = 0

const setOrder = () => title.insertAdjacentHTML('afterend', `<h3>Deviner le nombre mystère entre ${min} & ${max}</h3>`)

const getRandom = () =>  {

  const random = Math.floor(Math.random() * (max - min + 1)) + min

  console.log(random)

  return random

}

const play = random => {

  button.addEventListener('click', event => {

    event.preventDefault()

    let   value   = input.value
        , message = ''

    count++

    if(value === '')
      return displayMessage('Entrer un nombre', 'error')

    if(!parseInt(value))
      return displayMessage('Nombre incorrect', 'error')

    if(value < 0 || value > max)
      return displayMessage(`Le nombre doit être compris entre ${min} & ${max}`, 'error')

    if(value < random)
      return displayMessage(`Plus grand que ${value}`, 'info')

    if(value > random)
      return displayMessage(`Plus petit que ${value}`, 'info')

    return win(count)

  })

}

const displayMessage = (message, kind) => {

  input.value = ''
  result.innerHTML = ''
  result.insertAdjacentHTML('afterbegin', `<p class=" p-message ${kind}">${message}</p>`)

}

const win = count => {

  button.style.display = 'none'
  result.innerHTML = ''

  let formatted = count != '1' ? 'coups' : 'coup'

  let html = `

    <p class="p-message success">Gagné en ${count} ${formatted}</p>
    <img src="https://media.giphy.com/media/${getGif()}/giphy.gif">
    <button class="replay">Rejouer</button>

  `

  result.insertAdjacentHTML('afterbegin', html)

  document.getElementsByTagName('button')[1].addEventListener('click', () => document.location.reload(true))

}

const getGif = () => {

  const ids = [

      '26gsspfbt1HfVQ9va'
    , 'l3q2XhfQ8oCkm1Ts4'
    , 'l2SpSCUoMUGd7VgSA'
    , 'c4rB7DMXKgktG'
    , 'YFis3URdQJ6qA'
    , '12P29BwtrvsbbW'
    , '65fiHpjKxyBgc'
    , 'xTiTnC5cMmUx9bfWYU'

  ]

  return ids[Math.floor(Math.random() * ids.length)]

}

const init = function() {

  setOrder()
  play(getRandom())

}()









// const numberRandom = Math.floor(Math.random() * 101)
//
// console.log(numberRandom)
//
// let number

// do {
//
//   number = prompt('Entrer un nombre entre 0 et 100')
//
//   if(number < numberRandom)
//     // alert(`Nombre a trouvé plus grand que ${number}`)
//     alert(`C'est plus`)
//
//   if(number > numberRandom)
//     // alert(`Nombre a trouvé plus petit que ${number}`)
//     alert(`C'est moins`)
//
// } while(numberRandom != number)
//
// alert(`Gagné :=) le nombre était ${number}`)
