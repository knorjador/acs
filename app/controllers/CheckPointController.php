<?php

namespace Controllers;

use Core\Controllers\Controller;
use Model\Category;

class CheckPointController extends Controller {

  /**
   * Checkpoint method
   *
   * @return void
   */
  public function checkpoint()
  {
    var_dump($_POST);
    echo '<pre>';
    var_dump($_FILES);
    echo '</pre>';
    die();
  }

}
