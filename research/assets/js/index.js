
/**** **** **** **** **** **** **** ****
 > EVENTS
**** **** **** **** **** **** **** ****/

const eventResearch = () => {

  const   select   = document.querySelector('select')
        , research = document.querySelector('input');

  research.addEventListener('keyup', () => doRequest(research.value));

  select.addEventListener('change', () => doRequest(research.value));

  const doRequest = value => value.length > 0 ? POST({ sort: select.value, research: value }, DONE) : document.querySelector('#render').innerHTML = ``;

}

/**** **** **** **** **** **** **** ****
 > POST
**** **** **** **** **** **** **** ****/

const POST = (data, cb) => {

  const XHR = new XMLHttpRequest();

  XHR.open('POST', 'php/research.php');

  XHR.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  XHR.send(`request=${JSON.stringify(data)}`);

  XHR.onreadystatechange = () => {

    if(XHR.readyState === 4 && XHR.status === 200) {

      cb(JSON.parse(XHR.responseText));

    }

  }

}

/**** **** **** **** **** **** **** ****
 > CALLBACK
**** **** **** **** **** **** **** ****/

const DONE = back => { //console.log(back)

  const   data     = back.data
        , research = back.research
        , length   = data.length
        , render   = document.querySelector('#render');

  render.innerHTML = ``;

  if(length === 0)
    return render.innerHTML = `<p class="sorry">Désolé, pas de résultat pour "${research}".</p>`;

  let results = [];

  for (let i = 0; i < length; i++)
    results.push({

        artist:    highlight(research, decodeURIComponent(escape(data[i].musician)))
      , song:      highlight(research, decodeURIComponent(escape(data[i].song)))
      , thumbnail: data[i].thumbnail
      , album:     highlight(research, decodeURIComponent(escape(data[i].album)))

    });

  const   template = document.querySelector('#template').innerHTML
        , content  = Mustache.render(template, { count: length, research, results });

  render.innerHTML = content;

}

/**** **** **** **** **** **** **** ****
 > UTILS
**** **** **** **** **** **** **** ****/

const highlight = (research, string) => {

  const regex = new RegExp(research, 'i');

  return string.replace(regex, `<span class="highlight">${research}</span>`);

}

/**** **** **** **** **** **** **** ****
 > INIT
**** **** **** **** **** **** **** ****/

const INIT = function() {

  eventResearch();

}()
