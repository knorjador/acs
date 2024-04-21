<?php

namespace Controllers;

use Core\Controllers\Controller;
use Model\Files;

class FilesController extends Controller {

  /**
   * Render method
   *
   * @return void
   */
  public function render($id)
  {

    $files = Files::find([
      'transfer_id' => $id
    ]);

    echo $this->twig->render('files.html.twig', [
      'id'    => $id,
      'files' => $files
    ]);
  }

}
