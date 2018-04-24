
<?php

$rootFolder = 'root';

function listFolder(string $folder): string {

  $scaffolding = array_diff(scandir($folder), array('.', '..'));

  $folders = $files = [];

  $data = '<form method="get">
            <ul>';

  foreach($scaffolding as $element) {

    $path = $folder.DIRECTORY_SEPARATOR.$element;

    is_dir($path)
    ?
      array_push($folders, [$element, $path])
    :
      array_push($files, [$path, $element, filesize($folder.'/'.$element), date('d F Y - H:i:s', filemtime($folder.'/'.$element))]);

  }

  foreach($folders as $folder)
    $data .= '<li class="folder">
                <a href="explorer.php?path='.$folder[1].'">
                  <img class="i-folder" src="assets/icons/folder.png" alt="folder icon">'.$folder[0].
                '</a>
              </li>';

  foreach($files as $file) {

    $path = $file[0];
    $name = $file[1];
    $size = $file[2];
    $date = $file[3];

    $formatted = $size != 0 ? 'octets' : 'octet';

    $data .= '<li class="file">
                <img class="i-file" src="assets/icons/file.png" alt="file icon">
                <a href="'.$path.'" download>'.$name.'</a>
                <span class="details">'.$size.' '.$formatted.' / '.$date.
                '</span>
              </li>';

  }

  return $data .=     '</ul>
                   </form>';

}

function getBreadcrumb(string $path): string {

  $exploded       = explode('/', $path);
  $breadcrumb     = '';
  $step           = '';

  foreach($exploded as $explode) {

    $step .= $explode.'/';

    $breadcrumb .= '<li class="breadcrumb-item"><a href="explorer.php?path='.substr($step, 0, -1).'">'.$explode.'</a></li>';

  }

  return '

     <form method="get">
       <nav aria-label="breadcrumb">
         <ol class="breadcrumb">
           '.$breadcrumb.'
         </ol>
       </nav>
     </form>

   ';

}

?><DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href=".png"/>
    <link rel="stylesheet" href="assets/css/lib/bootstrap.min.css">
    <link rel="stylesheet" href="assets/css/explorer.css">
    <title></title>
  </head>
  <body>
    <div class="container">

      <h1>Explorator</h1>

      <?php echo empty($_GET) ? getBreadcrumb($rootFolder) : getBreadcrumb($_GET['path']); ?>

      <div class="content">
        <?php echo empty($_GET) ? listFolder($rootFolder) : listFolder($_GET['path']); ?>
      </div>

    </div>
    <script src="assets/js/explorer.js"></script>
  </body>
</html>
