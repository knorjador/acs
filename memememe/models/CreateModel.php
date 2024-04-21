
<?php

function getImages($pdo): array {

    $statement = $pdo->getInstance()->prepare("SELECT * FROM images");
    $statement->execute();

    $data = $statement->fetchAll();

    // echo '<pre>';
    // var_dump($data);
    // echo '</pre>';

    return $data;
}

?>
