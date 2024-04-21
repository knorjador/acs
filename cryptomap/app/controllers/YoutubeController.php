<?php

namespace Controllers;

use Core\Controllers\Controller;
use Core\Helpers\Validator;
use Core\Helpers\Notificator;
use Controllers\MarqueeController as Marquee;

class YoutubeController extends Controller {

  /**
   * Render method
   *
   * @return void
   */
  public function render()
  {

    if ($_SERVER['REQUEST_METHOD'] === 'GET') {

      echo $this->twig->render('news/youtube.html.twig', [
        'videos' => $this->getVideos('bitcoin%20fr')
      ]);

    } else {

      if (!Validator::checkPosted($_POST, ['hashtag']))
        Notificator::notify($this->twig, 'danger', 'Désolé, une erreur est survenue');

      $hashtag = Validator::sanitarize($_POST['hashtag']);

      if (!$this->checkHashtag($hashtag))
        Notificator::notify($this->twig, 'danger', 'Désolé, l\'hashtag '.$hashtag.' n\'est pas disponible.');

      echo $this->twig->render('partials/videos.html.twig', [
        'videos' => $this->getVideos($hashtag.'%20fr')
      ]);

    }

  }

  /**
   * CheckHashtag method
   *
   * @return boolean in_array
   */
  private function checkHashtag($hashtag) {

    $allowed = [

      'bitcoin',
      'blockchain',
      'crypto',
      'ico'

    ];

    return in_array($hashtag, $allowed);

  }

  /**
   * GetVideos method
   *
   * @return array $videos
   */
  private function getVideos($query)
  {

    $config = require('./config.php');

    $base_url   = 'https://www.googleapis.com/youtube/v3/search?part=snippet';
    $maxResults =  15;
    $order      = 'date';
    $langage    = 'fr';
    $key        = $config['youtube'];

    $url = $base_url.'&q='.$query.'&maxResults='.$maxResults.'&regionCode=FR&relevanceLanguage='.$langage.'&order='.$order.'&safeSearch=none&key='.$key;

    $data   = json_decode(file_get_contents($url), true)['items'];
    $videos = [];

    foreach ($data as $video) {

      $step = [];

      $step['id']          = $video['id']['videoId'];
      $step['date']        = $video['snippet']['publishedAt'];
      $step['channel']     = $video['snippet']['channelId'];
      $step['title']       = $video['snippet']['title'];
      $step['description'] = $video['snippet']['description'];
      $step['thumbnail']   = $video['snippet']['thumbnails']['medium']['url'];

      array_push($videos, $step);

    }

    // echo '<pre>';
    // var_dump($videos);
    // echo '</pre>';
    // die();

    return $videos;

  }

}
