
<?php

require 'models/CreateModel.php';

function ctrlCreate($twig, $pdo, $kind) {

  if($kind === 'image' || $kind === 'gif') {

    $data = $kind === 'image' ? getImages($pdo) : getGifs();

    echo $twig->render('create.html', ['template' => $kind, 'data' => $data]);

  } else {

    // deal with it
    // echo $twig->render();

  }

}

function getGifs() {

  return [];

}

?>
