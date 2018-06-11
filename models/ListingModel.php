<?php

function getMemes($pdo) {
    $memes = $pdo->getInstance()->prepare("SELECT * FROM `memes` ORDER BY date DESC");
    $memes->execute();
    $data = $memes->fetchAll();
    return $data;
}
?>

