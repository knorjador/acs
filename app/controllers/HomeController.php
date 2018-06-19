<?php

namespace Controllers;

use Core\Controllers\Controller;

class HomeController extends Controller {

  /**
   * Render method
   *
   * @return void
   */
  public function render()
  {
    echo $this->twig->render('home.html.twig', [
      
    ]);
  }

}
