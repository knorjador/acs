
<?php

/**
 * Check $_GET
 *
 * @return Array   array with data according to template
 */
function checkGet(): array {

  if (isset($_GET['path']) && isset($_GET['sound']) && isset($_GET['view'])) {

    $path   = $_GET['path'];

    // Check path start by root folder, no parent folder called and path exist
    if (substr($path, 0, 4) === ROOT_FOLDER && !strpos($path, '..') && file_exists($path)) {

      $views = ['simple', 'details'];
      $view  = $_GET['view'];

      if (in_array($view, $views)) {

        return [

          'template' => $view,
          'data'     => getData($path, $_GET['sound'], $view)

        ];

      // view does not exist
      } else {

        return getError('Désolé, une erreur s\'est produite.');

      }

    // Try to access to an inexistant or forbidden path
    } else {

      return getError('Désolé, ce chemin n\'est pas accessible.');

    }

  // $_GET does not contain path & sound & view
  } else {

    return getError('Désolé, une erreur s\'est produite.');

  }

}

/**
 * Return error template
 *
 * @param String   $error the error
 * @return Array   array data for error template
 */
function getError(string $error): array {

  return [

    'template'  => 'error',
    'data'      => ['error' => $error, 'path' => '.']

  ];

}

/**
 * Return all data
 *
 * @param String   $folder called path
 * @param String   $sound play sound or not
 * @param String   $view kinf of view
 * @return Array   array with all data
 */
function getData(string $folder, string $sound, string $view): array {

  return [

    'breadcrumb'    => getBreadcrumb($folder),
    'scaffolding'   => listFolder($folder, $sound, $view),
    'uri'           => '?path='.$folder.'&sound='.$sound.'&view=',
    'view'          => $view

  ];

}

/**
 * Return breadcrumb
 *
 * @param String   $path called path
 * @return Array   $breadcrumb array of pieces of path
 */
function getBreadcrumb(string $path): array {

  $exploded   = explode('/', $path);
  $breadcrumb = [];
  $step       = '';

  foreach ($exploded as $explode) {

    $step .= $explode.'/';

    array_push($breadcrumb, ['name' => $explode, 'path' => substr($step, 0, -1)]);

  }

  return $breadcrumb;

}

/**
 * Return content of a folder
 *
 * @param String   $folder called path
 * @param String   $sound play sound or not
 * @return Array   array of content of folder and details
 */
function listFolder(string $folder, string $sound, string $view): array {

  $scaffolding = array_diff(scandir($folder), ['.', '..']);

  $folders = $files = [];

  foreach ($scaffolding as $name) {

    $path = $folder.DIRECTORY_SEPARATOR.$name;

    is_dir($path) ? array_push($folders, getDetails($name, $path, $view)) : array_push($files, getDetails($name, $path, '', true));

  }

  return [

    'elements' => array_merge($folders, $files),
    'sound'    => $sound === 'true' ? 'click.mp3' : false

  ];

}

/**
 * Return details of a folder or file
 *
 * @param String   $name folder or file name
 * @param String   $path path of folder or file
 * @param Bool     $file file or not
 * @return Array   array of details of folder or file
 */
function getDetails(string $name, string $path, string $view = '', bool $file = false): array {

  return [

    'kind'    => $file ? 'file' : 'folder',
    'link'    => $file ? $path : '?path='.$path.'&sound=true&view='.$view,
    'icon'    => $file ? getIcon($name) : 'folder',
    'name'    => $name,
    // 'type'    => finfo_file(finfo_open(FILEINFO_MIME_TYPE), $path),
    'type'    => $file ? mime_content_type($path) : '',
    'size'    => $file ? filesize($path) : '',
    'owner'   => posix_getpwuid(fileowner($path))['name'],
    'chmod'   => decoct(fileperms($path) & 0777),
    'date'    => date('d F Y - H:i:s', filemtime($path))

  ];

}


/**
 * Return a kind of icon according to extension file
 *
 * @param String   $file file with extension
 * @return String  $icon kind of icon
 */
function getIcon(string $file): string {

  $extensions = [

    'image' => ['gif', 'jpg', 'jpeg', 'png'],
    'music' => ['mp3', 'wav'],
    'video' => ['mp4']

  ];

  $exploded   = explode('.', $file);
  $extension  = end($exploded);
  $finded     = false;

  foreach ($extensions as $key => $values) {

    foreach ($values as $value) {

      if ($value === $extension) {

        $icon   = $key;
        $finded = true;
        break;

      }

    }

  }

  return $finded ? $icon : $icon = 'file';

}

?>
