
<?php

function saveMeme($pdo, $image, $uniqId) {

  try {

    $getImageId = $pdo->getInstance()->prepare("SELECT id FROM bases WHERE path = ?");
    $getImageId->execute([$image]);
    $imageId = $getImageId->fetch();

    $saveMeme = $pdo->getInstance()->prepare("INSERT INTO memes(path, base_id) VALUES(?, ? )");
    $saveMeme->execute([$uniqId, intval($imageId['id'])]);

    return ['valid' => true, 'uniqId' => $uniqId];

  } catch (Exception $e) {

    // var_dump($e->getMessage());

    return ['valid' => false];

  }
  
}

?>
