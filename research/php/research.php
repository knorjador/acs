
<?php

if(!empty($_POST['request'])) {

  $posted   = (array)json_decode($_POST['request']);
  $sort     = $posted['sort'];
  $research = $posted['research'];

  require 'statements.php';

  echo json_encode(getData($sort, $research));

}

?>
