<?php
namespace Model;

class Venues extends \PicORM\Model
{
    protected static $_tableName = 'venues';
    protected static $_primaryKey = 'id';
    protected static $_relations = array();
    protected static $_tableFields = array(
        'venue_name',
        'venue_longitude',
        'venue_lattitude',
        'venue_adress',
        'venue_category',
        'verified'
    );
    public $id;
    public $venue_name;
    public $venue_longitude;
    public $venue_lattitude;
    public $venue_adress;
    public $venue_category;
    public $verified;
   
  
}