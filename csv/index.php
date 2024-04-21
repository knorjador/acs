
<?php

require_once __DIR__.'/vendor/autoload.php';

$twig = new Twig_Environment(new Twig_Loader_Filesystem('./templates'), [

  'cache' => false

]);

if(!empty($_GET)) {

  require __DIR__.'/php/statements.php';

  $data = getData($_GET['request']);

  echo $twig->render($data['template'].'.html', ['data' => $data['data']]);

} else {

  echo $twig->render('base.html');

}

?>
