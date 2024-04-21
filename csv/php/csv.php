
<?php

$handle = @fopen('../assets/data.csv', 'r');

if ($handle) {

  while (($buffer = fgets($handle, 4096)) !== false)
    echo $buffer.'<br>';

  fclose($handle);

}

?>
