<?php

namespace Core\Helpers;

class Notificator
{

  public static function notify($twig, $type, $msg)
  {

    echo $twig->render('partials/notification.html.twig', [

      'type' => $type,
      'msg'  => $msg

    ]);

  }

}
