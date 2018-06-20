
document.addEventListener('DOMContentLoaded', () => {

  const   modal        = document.querySelectorAll('.modal')
        , initModal    = M.Modal.init(modal, { dismissible: false })

})

const iFiles = document.querySelector('#ifiles')

let formData = new FormData();

iFiles.addEventListener('change', e => {

    const   files  = iFiles.files
    , length = files.length

    let html = ``

    for (let i = 0; i < length; i++) {

        formData.append('files[]', files[i])

        html += `<p>${files[i].name} <span class="delete-file" id="${files[i].name}">X</span></p>`

    }

    document.querySelector('.dfiles').insertAdjacentHTML('beforeend', html)

    eventDelete()

})

const eventDelete = () => {

    const deleteFiles = document.querySelectorAll('.delete-file')

    deleteFiles.forEach(deleteFile => {

        deleteFile.addEventListener('click', () => {

            const parent = deleteFile.parentNode

            if(parent) {

                parent.parentNode.removeChild(parent);

                removeFile(deleteFile.getAttribute('id'))

            }

        })

    })

}

const removeFile = element => {

    const files = formData.getAll('files[]')

    formData.delete('files[]')

    files
        .filter(file => file.name !== element)
        .forEach(file => formData.append('files[]', file))

    // console.log(`***********************************`)
    //
    // for (let file of formData.values()) {
    //
    //   console.log(file.name)
    //
    // }

}

const eventSubmit = function() {

    const submit = document.querySelector('#submit')

    submit.addEventListener('click', e => {

      e.preventDefault()

      formData.append('receiver', document.querySelector('#receiver').value)
      formData.append('sender', document.querySelector('#sender').value)
      formData.append('copy', document.querySelector('input[type="checkbox"]').checked)

      // console.log(formData);

      post(formData, done)

    })

}()

/**** **** **** **** **** **** **** ****
 > POST
**** **** **** **** **** **** **** ****/

const post = (data, cb) => {

  const XHR = new XMLHttpRequest()

  XHR.open('POST', `${window.location.href}/checkpoint`)

  XHR.send(formData)

  processing()

  XHR.onreadystatechange = () => {

    if(XHR.readyState === 4 && XHR.status === 200) {

      if(XHR.responseText.includes('redirection')) {

        const parsed = JSON.parse(XHR.responseText)

        document.location.href = `${window.location.href}result/${parsed.id}`

      } else {

        setTimeout(() => {

        document.querySelector('.overlay').style.display = 'none'

        cb(XHR.responseText)

        }, 1000)

      }

    }

  }

}

const processing = () => {

  document.querySelector('.overlay').style.display = 'block'

  const modalContent = document.querySelector('.modal-content')
  const html = `

    <p class="processing">Processing</p>

    <div class="progress">
      <div class="indeterminate"></div>
    </div>

  `

  modalContent.innerHTML = ''
  modalContent.insertAdjacentHTML('afterbegin', html)

}

/**** **** **** **** **** **** **** ****
 > CALLBACK
**** **** **** **** **** **** **** ****/

const done = back => { console.log(back)

  if(!document.querySelector('.toast'))
    setTimeout(() => M.toast({html: back, displayLength: 1000}), 500)

}
