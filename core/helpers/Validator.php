<?php

namespace Core\Helpers;

class Validator
{

  public static function checkPosted($posted, $expected)
  {

    foreach ($posted as $key => $value) {

      var_dump($key);

    }

    die();

  }

  public static function sanitarize($data)
  {

    return trim(htmlspecialchars($data));

  }

  public static function checkEmpty($data)
  {

    $empty = [];

    foreach ($data as $key => $value) {

      if(empty($value))
        array_push($empty, $key);

    }

    return empty($empty) ? true : $empty;

  }

  public static function checkBoolean($data) {

    return ($data === 'true' || $data === 'false') ? true : false;

  }

}
