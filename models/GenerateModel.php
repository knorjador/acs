
<?php

function saveMeme($pdo, $image, $uniqId) {

  try {

    $getImageId = $pdo->getInstance()->prepare("SELECT id FROM images WHERE path = ?");
    $getImageId->execute([$image]);
    $imageId = $getImageId->fetch();

    $saveMeme = $pdo->getInstance()->prepare("INSERT INTO memes(path,code, base_id) VALUES(?, ?, ? )");
    $saveMeme->execute([$uniqId, 1,intval($imageId['id'])]);

    return ['valid' => true, 'uniqId' => $uniqId];

  } catch (Exception $e) {

    // var_dump($e->getMessage());

    return ['valid' => false];

  }
  
}

?>
