
<?php

function ctrlMemememe($twig, $get_memememe) {

  $splitted = explode('_', $get_memememe)[0];

  echo $twig->render('memememe.html', ['splitted' => $splitted, 'memememe' => $get_memememe]);

}

?>
