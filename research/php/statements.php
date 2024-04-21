
<?php

function getData(string $sort, string $research): array {

  $error = false;

  switch ($sort) {

    case 'Sons':
      $request = "SELECT * FROM songs s INNER JOIN albums a ON s.album_id = a.id INNER JOIN musicians m ON a.artist_id = m.id WHERE s.song LIKE ?";
      break;

    case 'Albums':
      $request = "SELECT * FROM albums a INNER JOIN songs s ON a.id = s.album_id INNER JOIN musicians m ON a.artist_id = m.id WHERE a.album LIKE ?";
      break;

    case 'Artistes':
      $request = "SELECT * FROM musicians m INNER JOIN albums a ON m.id = a.artist_id INNER JOIN songs s ON a.id = s.album_id WHERE m.musician LIKE ?";
      break;

    default:
      $error = true;
      break;

  }

  if(!$error) {

    require 'pdo.php';

    $pdo = new Database();

    // $request   = "SELECT * FROM songs AS s INNER JOIN albums AS a ON s.album_id = a.id INNER JOIN musicians AS m ON a.artist_id = m.id WHERE song LIKE ? OR album LIKE ? OR musician LIKE ?";
    // $statement->execute(["%$research%", "%$research%", "%$research%"]);

    $statement = $pdo->getInstance()->prepare($request);
    $statement->execute(["%$research%"]);

    $data = $statement->fetchAll();

    // var_dump($data);
    // die();

    return ['research' => $research, 'data' => utf8ize($data)];

  }

  return [];

}

function utf8ize($data) {

  if (is_array($data) || is_object($data))
    foreach ($data as &$i) $i = utf8ize($i);
  else
    return utf8_encode($data);

  return $data;

}

?>
