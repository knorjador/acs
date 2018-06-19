
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
    // formData.append('copy', document.querySelector('input[type="checkbox"]').checked)

    // console.log(formData);

    post(formData)

  })

}()

/**** **** **** **** **** **** **** ****
 > POST
**** **** **** **** **** **** **** ****/

const post = (data, cb) => {

  const XHR = new XMLHttpRequest()

  XHR.open('POST', `${window.location.href}/checkpoint`)

  XHR.send(formData)

  XHR.onreadystatechange = () => {

    if(XHR.readyState === 4 && XHR.status === 200) {

      // console.log(XHR.responseText)

      // cb(JSON.parse(XHR.responseText))

    }

  }

}

/**** **** **** **** **** **** **** ****
 > CALLBACK
**** **** **** **** **** **** **** ****/

const done = data => {

  console.log(data)

}
