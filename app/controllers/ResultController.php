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
  public function render()
  {
    echo $this->twig->render('result.html.twig', [
      
    ]);
  }

}
