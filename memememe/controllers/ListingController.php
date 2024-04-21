
<?php

require 'models/ListingModel.php';

/* LISTING HOME PAGE => ALL MEMES */
function ctrlListing($twig, $pdo) {

  echo $twig->render('listing.html', ['title' => 'Les dernières créations', 'data' => getAllMemes($pdo)]);

}

/* LISTING BY CODE */
function ctrlList($twig, $pdo, $list) {

  if($list === 'images' || $list === 'gifs') {

    if($list === 'images') {

      $code = 1;
      $title = 'Les dernières images';

    } else {

      $code = 2;
      $title = 'Les derniers gifs';

    }

    echo $twig->render('listing.html', ['title' => $title, 'data' => getListMemes($pdo, $code)]);

  } else {

    // deal with it
    // echo $twig->render();

  }


}

?>
