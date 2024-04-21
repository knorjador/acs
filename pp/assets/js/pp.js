
const   sFirstname  = document.getElementById('s-firstname')
      , cFirstname  = document.getElementById('c-firstname')
      , sLastname   = document.getElementById('s-lastname')
      , cLastname   = document.getElementById('c-lastname')
      , sAddress    = document.getElementById('s-address')
      , cSkills     = document.getElementById('c-skills')
      , cBirthdate  = document.getElementById('c-birthdate')

sFirstname.addEventListener('click', event => {

  const state = sFirstname.dataset.state

  // array asc
  if(state !== 'asc') {

    const data = getDataStudents();

    data.contents.sort((a, b) => a.firstname.toLowerCase() < b.firstname.toLowerCase() ? -1 : 1)

    for(let i = 0; i < data.length; i++) {

      data.firstnames[i].innerHTML  = data.contents[i].firstname;
      data.lastnames[i].innerHTML   = data.contents[i].lastname;
      data.addresses[i].innerHTML   = data.contents[i].address;

    }

    if(document.querySelector('.icon-up-open-students'))
       document.querySelector('.icon-up-open-students').parentNode.removeChild(document.querySelector('.icon-up-open-students'));

    document.querySelector('#s-firstname').insertAdjacentHTML('beforeend', '<i class="icon-down-open-students"></i>');

    sFirstname.dataset.state = 'asc';

  // array desc
  } else {

    const data = getDataStudents();

    data.contents.sort((a, b) => a.firstname.toLowerCase() > b.firstname.toLowerCase() ? -1 : 1)

    for(let i = 0; i < data.length; i++) {

      data.firstnames[i].innerHTML  = data.contents[i].firstname;
      data.lastnames[i].innerHTML   = data.contents[i].lastname;
      data.addresses[i].innerHTML   = data.contents[i].address;

    }

    if(document.querySelector('.icon-down-open-students'))
      document.querySelector('.icon-down-open-students').parentNode.removeChild(document.querySelector('.icon-down-open-students'));

    document.querySelector('#s-firstname').insertAdjacentHTML('beforeend', '<i class="icon-up-open-students"></i>');

    sFirstname.dataset.state = 'desc';

  }

})

cFirstname.addEventListener('click', event => {

  const state = cFirstname.dataset.state

  // array asc
  if(state !== 'asc') {

    const data = getDataCoachs();

    data.contents.sort((a, b) => a.firstname.toLowerCase() < b.firstname.toLowerCase() ? -1 : 1)

    for(let i = 0; i < data.length; i++) {

      data.firstnames[i].innerHTML  = data.contents[i].firstname;
      data.lastnames[i].innerHTML   = data.contents[i].lastname;
      data.skills[i].innerHTML      = data.contents[i].skills;
      data.birthdates[i].innerHTML  = data.contents[i].birthdate;

    }

    if(document.querySelector('.icon-up-open-coachs'))
       document.querySelector('.icon-up-open-coachs').parentNode.removeChild(document.querySelector('.icon-up-open-coachs'));

    document.querySelector('#c-firstname').insertAdjacentHTML('beforeend', '<i class="icon-down-open-coachs"></i>');

    cFirstname.dataset.state = 'asc';

  // array desc
  } else {

    const data = getDataCoachs();

    data.contents.sort((a, b) => a.firstname.toLowerCase() > b.firstname.toLowerCase() ? -1 : 1)

    for(let i = 0; i < data.length; i++) {

      data.firstnames[i].innerHTML  = data.contents[i].firstname;
      data.lastnames[i].innerHTML   = data.contents[i].lastname;
      data.skills[i].innerHTML      = data.contents[i].skills;
      data.birthdates[i].innerHTML  = data.contents[i].birthdate;

    }

    if(document.querySelector('.icon-down-open-coachs'))
      document.querySelector('.icon-down-open-coachs').parentNode.removeChild(document.querySelector('.icon-down-open-coachs'));

    document.querySelector('#c-firstname').insertAdjacentHTML('beforeend', '<i class="icon-up-open-coachs"></i>');

    cFirstname.dataset.state = 'desc';

  }

})

sLastname.addEventListener('click', event => {

  const state = sLastname.dataset.state

  // array asc
  if(state !== 'asc') {

    const data = getDataStudents();

    data.contents.sort((a, b) => a.lastname.toLowerCase() < b.lastname.toLowerCase() ? -1 : 1)

    for(let i = 0; i < data.length; i++) {

      data.firstnames[i].innerHTML  = data.contents[i].firstname;
      data.lastnames[i].innerHTML   = data.contents[i].lastname;
      data.addresses[i].innerHTML   = data.contents[i].address;

    }

    sLastname.dataset.state = 'asc';

  // array desc
  } else {

    const data = getDataStudents();

    data.contents.sort((a, b) => a.lastname.toLowerCase() > b.lastname.toLowerCase() ? -1 : 1)

    for(let i = 0; i < data.length; i++) {

      data.firstnames[i].innerHTML  = data.contents[i].firstname;
      data.lastnames[i].innerHTML   = data.contents[i].lastname;
      data.addresses[i].innerHTML   = data.contents[i].address;

    }

    sLastname.dataset.state = 'desc';

  }

})

cLastname.addEventListener('click', event => {

  const state = cLastname.dataset.state

  // array asc
  if(state !== 'asc') {

    const data = getDataCoachs();

    data.contents.sort((a, b) => a.lastname.toLowerCase() < b.lastname.toLowerCase() ? -1 : 1)

    for(let i = 0; i < data.length; i++) {

      data.firstnames[i].innerHTML  = data.contents[i].firstname;
      data.lastnames[i].innerHTML   = data.contents[i].lastname;
      data.skills[i].innerHTML      = data.contents[i].skills;
      data.birthdates[i].innerHTML  = data.contents[i].birthdate;

    }

    cLastname.dataset.state = 'asc';

  // array desc
  } else {

    const data = getDataCoachs();

    data.contents.sort((a, b) => a.lastname.toLowerCase() > b.lastname.toLowerCase() ? -1 : 1)

    for(let i = 0; i < data.length; i++) {

      data.firstnames[i].innerHTML  = data.contents[i].firstname;
      data.lastnames[i].innerHTML   = data.contents[i].lastname;
      data.skills[i].innerHTML      = data.contents[i].skills;
      data.birthdates[i].innerHTML  = data.contents[i].birthdate;

    }

    cLastname.dataset.state = 'desc';

  }

})

sAddress.addEventListener('click', event => {

  const state = sAddress.dataset.state

  // array asc
  if(state !== 'asc') {

    const data = getDataStudents();

    data.contents.sort((a, b) => a.address.toLowerCase() < b.address.toLowerCase() ? -1 : 1)

    for(let i = 0; i < data.length; i++) {

      data.firstnames[i].innerHTML  = data.contents[i].firstname;
      data.lastnames[i].innerHTML   = data.contents[i].lastname;
      data.addresses[i].innerHTML   = data.contents[i].address;

    }

    sAddress.dataset.state = 'asc';

  // array desc
  } else {

    const data = getDataStudents();

    data.contents.sort((a, b) => a.address.toLowerCase() > b.address.toLowerCase() ? -1 : 1)

    for(let i = 0; i < data.length; i++) {

      data.firstnames[i].innerHTML  = data.contents[i].firstname;
      data.lastnames[i].innerHTML   = data.contents[i].lastname;
      data.addresses[i].innerHTML   = data.contents[i].address;

    }

    sAddress.dataset.state = 'desc';

  }

})

cSkills.addEventListener('click', event => {

  const state = cSkills.dataset.state

  // array asc
  if(state !== 'asc') {

    const data = getDataCoachs();

    data.contents.sort((a, b) => a.skills.toLowerCase() < b.skills.toLowerCase() ? -1 : 1)

    for(let i = 0; i < data.length; i++) {

      data.firstnames[i].innerHTML  = data.contents[i].firstname;
      data.lastnames[i].innerHTML   = data.contents[i].lastname;
      data.skills[i].innerHTML      = data.contents[i].skills;
      data.birthdates[i].innerHTML  = data.contents[i].birthdate;

    }

    cSkills.dataset.state = 'asc';

  // array desc
  } else {

    const data = getDataCoachs();

    data.contents.sort((a, b) => a.skills.toLowerCase() > b.skills.toLowerCase() ? -1 : 1)

    for(let i = 0; i < data.length; i++) {

      data.firstnames[i].innerHTML  = data.contents[i].firstname;
      data.lastnames[i].innerHTML   = data.contents[i].lastname;
      data.skills[i].innerHTML      = data.contents[i].skills;
      data.birthdates[i].innerHTML  = data.contents[i].birthdate;

    }

    cSkills.dataset.state = 'desc';

  }

})

cBirthdate.addEventListener('click', event => {

  const state = cBirthdate.dataset.state

  // array asc
  if(state !== 'asc') {

    const data = getDataCoachs();

    data.contents.sort((a, b) => a.birthdate.toLowerCase() < b.birthdate.toLowerCase() ? -1 : 1)

    for(let i = 0; i < data.length; i++) {

      data.firstnames[i].innerHTML  = data.contents[i].firstname;
      data.lastnames[i].innerHTML   = data.contents[i].lastname;
      data.skills[i].innerHTML      = data.contents[i].skills;
      data.birthdates[i].innerHTML  = data.contents[i].birthdate;

    }

    cBirthdate.dataset.state = 'asc';

  // array desc
  } else {

    const data = getDataCoachs();

    data.contents.sort((a, b) => a.birthdate.toLowerCase() > b.birthdate.toLowerCase() ? -1 : 1)

    for(let i = 0; i < data.length; i++) {

      data.firstnames[i].innerHTML  = data.contents[i].firstname;
      data.lastnames[i].innerHTML   = data.contents[i].lastname;
      data.skills[i].innerHTML      = data.contents[i].skills;
      data.birthdates[i].innerHTML  = data.contents[i].birthdate;

    }

    cBirthdate.dataset.state = 'desc';

  }

})

const getDataStudents = () => {

  const   firstnames  = document.querySelectorAll('.firstname')
        , lastnames   = document.querySelectorAll('.lastname')
        , addresses   = document.querySelectorAll('.address')
        , length      = firstnames.length
        , contents    = [];

  for(let i = 0; i < length; i++) {

    contents.push({

        firstname:  firstnames[i].innerHTML
      , lastname:   lastnames[i].innerHTML
      , address:    addresses[i].innerHTML

    });

  }

  const object = {

      firstnames
    , lastnames
    , addresses
    , contents
    , length

  }

  return object;

}

const getDataCoachs = () => {

  const   firstnames  = document.querySelectorAll('.c-firstname')
        , lastnames   = document.querySelectorAll('.c-lastname')
        , skills      = document.querySelectorAll('.c-skills')
        , birthdates  = document.querySelectorAll('.c-birthdate')
        , length      = firstnames.length
        , contents    = [];

  for(let i = 0; i < length; i++) {

    contents.push({

        firstname:    firstnames[i].innerHTML
      , lastname:     lastnames[i].innerHTML
      , skills:       skills[i].innerHTML
      , birthdate:    birthdates[i].innerHTML

    });

  }

  const object = {

      firstnames
    , lastnames
    , skills
    , birthdates
    , contents
    , length

  }

  return object;

}
