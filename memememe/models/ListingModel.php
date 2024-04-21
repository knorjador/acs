<?php

function getAllMemes($pdo) {

  $memes = $pdo->getInstance()->prepare("SELECT * FROM `memes` ORDER BY date DESC");
  $memes->execute();
  $data = $memes->fetchAll();

  return $data;

}

function getListMemes($pdo, $code) {

  $memes = $pdo->getInstance()->prepare("SELECT * FROM `memes` WHERE code = ? ORDER BY date DESC");
  $memes->execute([$code]);
  $data = $memes->fetchAll();

  return $data;

}

?>
