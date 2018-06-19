<?php

namespace Controllers;

use Core\Controllers\Controller;
use Model\Category;

class FilesController extends Controller {

  /**
   * Render method
   *
   * @return void
   */
  public function render()
  {
    echo $this->twig->render('files.html.twig', [

    ]);
  }

}
