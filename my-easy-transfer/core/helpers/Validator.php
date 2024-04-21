<?php

namespace Core\Helpers;

class Validator
{

  public static function checkPosted($posted, $expected)
  {

    $step = [];

    foreach ($posted as $key => $value)
      array_push($step, $key);

    return count(array_diff($expected, $step)) === 0 ? true : false;

  }

  public static function sanitarize($data)
  {

    return trim(htmlspecialchars($data));

  }

  public static function checkEmpty($data)
  {

    return !empty($data) ? true : false;

  }

  public static function checkEmail($data)
  {

    return filter_var($data, FILTER_VALIDATE_EMAIL) ? true : false;

  }


  public static function checkBoolean($data) {

    return ($data === 'true' || $data === 'false') ? true : false;

  }

}
