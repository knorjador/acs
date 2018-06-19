<?php

namespace Model;

use DateTime;

class CheckPoint extends \PicORM\Model {

  protected static $_tableName = 'transfer';
  protected static $_primaryKey = 'id';
  protected static $_relations = array();

  protected static $_tableFields = array(
    'sender_email',
    'sender_ip',
    'receiver_email',
    'date'
  );

  public $id;
  public $sender_email;
  public $sender_ip;
  public $receiver_email;
  public $date;

  function __construct()
  {
    $now = new DateTime;
    $this->date = $now->format('Y-m-d H:i:s');
  }

  protected static function defineRelations()
  {
    self::addRelationOneToOne('id', Files::class, 'transfer_id');
  }

}
