
<?php

require_once __DIR__.'/vendor/autoload.php';
require_once __DIR__.'/php/functions.php';

// set constant main folder to explore
define('ROOT_FOLDER', 'root');

// create an instance of Twig
$twig = new Twig_Environment(new Twig_Loader_Filesystem('./templates'), [

  'cache' => false,
  'debug' => true

]);

if(empty($_GET)) {

  echo $twig->render('simple.html', getData(ROOT_FOLDER, 'false', 'simple'));

} else {

  $content = checkGet();

  echo $twig->render($content['template'].'.html', $content['data']);

}

?>
