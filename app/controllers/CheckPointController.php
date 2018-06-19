<?php

namespace Controllers;

use Core\Controllers\Controller;
use Core\Helpers\Validator;
use Model\CheckPoint;

class CheckPointController extends Controller
{

  /**
   * Checkpoint method
   *
   * @return void
   */
  public function checkpoint()
  {

    $receiver = $_POST['receiver'];
    $sender   = $_POST['sender'];
    $copy     = $_POST['copy'];

    $checkPosted = Validator::checkPosted($_POST, ['receiver', 'sender', 'copy']);

    // var_dump($checkPosted); die();

    // $receiver = Validator::checkEmpty(Validator::sanitarize($_POST['receiver']));
    // $sender   = Validator::checkEmpty(Validator::sanitarize($_POST['sender']));

    $receiver   = Validator::sanitarize($_POST['receiver']);
    $sender     = Validator::sanitarize($_POST['sender']);

    $hasEmpty = Validator::checkEmpty([

      'receiver' => $receiver,
      'sender'   => $sender

    ]);

    if (!$hasEmpty) {

      $isEmail = Validator::checkEmail([

        'receiver' => $receiver,
        'sender'   => $sender

      ]);

    } else {



    }

    var_dump($hasEmpty); die();


    var_dump($receiver); die();

    // $validator = new Validator();
    //
    // $validator->checkEmpty($receiver);
    // $validator->checkEmpty($sender);
    // $validator->checkBoolean($copy);

    // var_dump(gettype($copy));

    if(empty($receiver)) {

      echo $this->twig->render('partials/flashbag.html.twig', [

        'type' => 'danger',
        'msg' => 'Please give an receiver email'

      ]);

    }

    if(empty($sender)) {

      echo $this->twig->render('partials/flashbag.html.twig', [

        'type' => 'danger',
        'msg' => 'Please give your email'

      ]);

    }

    if($copy !== 'true' || $copy === 'false') {


    }

    // if()

    // var_dump($_POST);
    // echo '<pre>';
    // var_dump($_FILES);
    // echo '</pre>';
    // die();

  }

}
