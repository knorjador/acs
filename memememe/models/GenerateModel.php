
<?php

function saveImageMeme($pdo, $image, $uniqId, $code) {

  try {

    $getImageId = $pdo->getInstance()->prepare("SELECT id FROM images WHERE path = ?");
    $getImageId->execute([$image]);
    $imageId = $getImageId->fetch();

    $saveMeme = $pdo->getInstance()->prepare("INSERT INTO memes(path, code, base_id) VALUES(?, ?, ?)");
    $saveMeme->execute([$uniqId, $code, intval($imageId['id'])]);

    return ['valid' => true, 'uniqId' => $uniqId];

  } catch (Exception $e) {

    // var_dump($e->getMessage());

    return ['valid' => false];

  }

}

function saveGifMeme($pdo, $tmpId, $code) {

  try {

    $saveMeme = $pdo->getInstance()->prepare("INSERT INTO memes(path, code, base_id) VALUES(?, ?, ?)");
    $saveMeme->execute([$tmpId, $code, 12]);

    return ['valid' => true, 'uniqId' => $tmpId];

  } catch (Exception $e) {

    // var_dump($e->getMessage());

    return ['valid' => false];

  }

}

?>
