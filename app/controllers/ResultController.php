<?php

namespace Controllers;

use Core\Controllers\Controller;
use Model\Category;

class ResultController extends Controller {

  /**
   * Render method
   *
   * @return void
   */
  public function render($id)
  {
    echo $this->twig->render('result.html.twig', [
      'id' => $id
    ]);
  }

}
