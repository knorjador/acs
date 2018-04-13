
<?php

extract($_POST);

$back = null;

if(isset($_POST['data'])) {

  require('functions.php');

  $data       = json_decode($_POST['data']);
  $display    = $data->display;
  $exercise   = $data->exercise;

  switch($display) {

    case 'render':
      $back = render($exercise);
      break;

    case 'data':
      $back = getData($exercise, $data->data);
      break;

    default:
      return false;
      break;

  }

}

echo is_array($back) ? json_encode($back) : $back;

?>
