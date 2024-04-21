<?php

namespace Core\Helpers;

// use Core\Helpers\Twig;

class Notificator
{

  public static function notify($twig, $type, $msg)
  {

    echo $twig->render('partials/flashbag.html.twig', [

      'type' => $type,
      'msg'  => $msg

    ]);

    // $twig = new Twig();

    // var_dump($twig); die();
    //
    // echo $twig->render('partials/flashbag.html.twig', [
    //
    //   'type' => $type,
    //   'msg'  => $msg
    //
    // ]);

  }

}
