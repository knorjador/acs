<?php

namespace Controllers;

use Model\Atm;
use Model\Venues;
use Core\Controllers\Controller;

class HomeController extends Controller {

  /**
   * Render method
   *
   * @return void
   */
  public function render()
  {

    if ($_SERVER['REQUEST_METHOD'] === 'GET') {

      echo $this->twig->render('home.html.twig', [
        'expand' => true
      ]);

    } else {

      $posted = $_POST['request'];

      switch ($posted) {

        case 'home':
          $this->getAll();
          break;

        case 'cash' :
          $this->buyCash('click');
          break;

        case 'atm' :
          $this->locateAtm('click');
          break;

        case 'venue' :
         $this->locateVenues('click');
          break;

        case 'reset' :
          $this->getAll();
          break;

      }

    }

  }

  private function getAll()
  {

    $cash = $this->buyCash('global');
    $atms = $this->locateAtm('global');
    $venues = $this->locateVenues('global');

    echo json_encode([
      'cash' => $cash,
      'atms'=> $atms,
      'venues'=>$venues,
      'kind'=> 'all'
    ]);

  }

  public function buyCash($kind)
  {

    $lat = 46.2276;
    $lon = 2.2137;
    $url = $this->localBitcoinUrl($lat, $lon);
    $data = $this->LocateBitcoins($url);
    if($kind == 'click') {
      echo json_encode(['data' => $data,'kind'=> 'cash']);
    } else {
      return $data;
    }

  }

  public function LocateBitcoins($url)
  {

    $datas = json_decode(file_get_contents($url));
    $datas = $datas->data;
    return $datas->ad_list;

  }

  public function localBitcoinUrl ($lat, $lon)
  {

    $api_endpoint = '/places/?lat='.$lat.'&lon='.$lon;
    $url = 'https://localbitcoins.com/api'.$api_endpoint;
    $datas = json_decode(file_get_contents($url));
    $datas = $datas->data;
    $datas = $datas->places;
    return $datas[0]->buy_local_url;

  }

  public function locateAtm($kind)
  {

    $atm = new Atm();
    $atms = Atm::find();

    $atmLocation = [];
    $data = [];

    foreach ($atms as $atm) {
      $atmLocation['atm_name'] =  $atm->atm_name;
      $atmLocation['atm_lat'] = $atm->atm_lattitude;
      $atmLocation['atm_lon'] = $atm->atm_longitude;
      $atmLocation['atm_adress'] = $atm->atm_adress;
      $atmLocation['atm_currency'] = $atm->atm_currency;
      array_push($data, $atmLocation);
    }

    if($kind == 'click') {
      echo json_encode(['data' => $data,'kind'=> 'atm']);
    } else {
      return $data;
    }

  }

  public function locateVenues($kind)
  {

    $venue = new Venues();
    $venues = Venues::find();

    $venuesLocation = [];
    $data = [];

    foreach ($venues as $venue) {
      $venuesLocation['venue_name'] =  $venue->venue_name;
      $venuesLocation['venue_lat'] = $venue->venue_lattitude;
      $venuesLocation['venue_lon'] = $venue->venue_longitude;
      $venuesLocation['venue_adress'] = $venue->venue_adress;
      $venuesLocation['venue_category'] = $venue->venue_category;
      array_push($data, $venuesLocation);
    }

    if($kind == 'click') {
      echo json_encode(['data' => $data,'kind'=> 'venue']);
    } else {
      return $data;
    }

  }

}
