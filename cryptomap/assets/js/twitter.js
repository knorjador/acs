const eventHashtags = () => {

  const hashtags = document.querySelectorAll('.hashtag')

  hashtags.forEach(hashtag => {

    hashtag.addEventListener('click', e => {

      e.preventDefault()

      post(hashtag.value)

    })

  })

}

const post = data => {

  const XHR = new XMLHttpRequest()

  XHR.open('POST', `${window.location.href}`)

  XHR.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')

  XHR.send(`hashtag=${data}`)

  const loading = document.querySelector('#loading')

  loading.style.display = 'block'

  XHR.onreadystatechange = () => {

    if(XHR.readyState === 4 && XHR.status === 200) {

      setTimeout(() => {

        loading.style.display = 'none'

        const container = document.querySelector('.row-tweets')
        container.innerHTML = ''
        container.innerHTML = XHR.responseText

      }, 1000)
      
    }

  }

}

const init = function() {

  eventHashtags()

}()
