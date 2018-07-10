

document.addEventListener('DOMContentLoaded', () => {

  post('home')

})

const tile = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {

  maxZoom: 18,
  id: 'mapbox.streets-basic',
  accessToken: 'pk.eyJ1IjoiY3J5cHRvbWFwIiwiYSI6ImNqaXd2Z3FtcDBkMXgzcnFvdXV0OTdjZWcifQ.qmb-m_7cNzmbYU9qhnmO7A'

})

const map = L.map('map')
              .setView([46.757903, 2.787052], 6)
              .addLayer(tile)

const eventBitcoin = function() {

  const bitcoins = document.querySelectorAll('.bitcoin')

  bitcoins.forEach(bitcoin => {

    bitcoin.addEventListener('click', e => {

      e.preventDefault()

      post(bitcoin.value)

    })

  })

}()

/**** **** **** **** **** **** **** ****
 > POST
**** **** **** **** **** **** **** ****/

const post = data => {

  const XHR = new XMLHttpRequest()

  XHR.open('POST', `${window.location.href}`)

  XHR.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')

  XHR.send(`request=${data}`)

  const loading = document.querySelector('#loading')

  loading.style.display = 'block'

  XHR.onreadystatechange = () => {
  
    if(XHR.readyState === 4 && XHR.status === 200) {

      removeAllMarkers()
            
      switch (JSON.parse(XHR.responseText).kind) {

        case "all":
          displayALL(JSON.parse(XHR.responseText))
          break;

        case "cash" :
          displayCASH(JSON.parse(XHR.responseText).data)
          break;

        case "atm" :
          displayATM(JSON.parse(XHR.responseText).data)
          break;

        case "venue" : 
          displayVENUES(JSON.parse(XHR.responseText).data)
          break;

        case "reset" :
          displayALL(JSON.parse(XHR.responseText))
          break;

        default: alert('Désolé, une erreur s\est produite.')

      }

      setTimeout(() => {

        loading.style.display = 'none'

      }, 500)

    }

  }

}

function removeAllMarkers() {

  const markers = document.querySelectorAll('.leaflet-marker-icon')

  markers.forEach(marker => {

    marker.parentNode.removeChild(marker)

  })

}

function displayALL(data) {

  displayCASH(data.cash)
  displayVENUES(data.venues)
  displayATM(data.atms)

}

function displayCASH(data) {

  data.forEach(element => {
    
    let lat = element.data.lat;

    let lon = element.data.lon;

    let username = element.data.profile.username;
      
    let price = element.data.temp_price;

    //if we need the min amount or max amount
    // let min = element.data.min_amount;
    // let max = element.data.max_amount;
      
    let url = element.actions.public_view; 
      
    let marker = addMarker(lat, lon, 'cash');

    marker.bindPopup(username + '<br>'+ price +'<br>' +'<a href='+url+' onclick="window.open(this.href); return false;">'+url +' </a>' );

  })

}

function displayATM(data) {

  data.forEach(element => {
         
    let lat = element.atm_lat;
    
    let lon = element.atm_lon;

    let atmName = element.atm_name;
      
    let atm_add = element.atm_adress;
      
    let acceptedCur = element.atm_currency;
  
    let marker = addMarker(lat, lon, 'atm');

    marker.bindPopup(atmName + '<br>'+ acceptedCur +'<br>' +atm_add);

  })

}

function displayVENUES(data) {

  data.forEach(element => {

    let lat = element.venue_lat;

    let lon = element.venue_lon;

    let venueName = element.venue_name;
    
    let venue_add = element.venue_adress;
    
    let venueCategory = element.venue_category;
    
    let marker = addMarker(lat, lon, 'venue');

    marker.bindPopup(venueName + '<br>'+ venueCategory +'<br>' +venue_add);

  })

}

function addMarker(lat, lon, type){

  let icon;

  if(type == 'cash'){
    icon = 'assets/img/icon-cash.png';
  }else if(type == 'atm'){
    icon = 'assets/img/icon-atm.png';
  }else{
    icon = 'assets/img/icon-venue.png';
  }

  let myIcon = L.icon({
    iconUrl: icon,
    iconSize: [30, 30],
    iconAnchor: [22, 50],
    popupAnchor: [-3, -76]
  })
 
  let marker = L.marker([lat, lon],{icon: myIcon}).addTo(map);

  return marker;

}
