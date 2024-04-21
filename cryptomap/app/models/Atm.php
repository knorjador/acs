<?php
namespace Model;

class Atm extends \PicORM\Model
{
    protected static $_tableName = 'atms';
    protected static $_primaryKey = 'id';
    protected static $_relations = array();
    protected static $_tableFields = array(
        'atm_name',
        'atm_longitude',
        'atm_lattitude',
        'atm_adress',
        'atm_currency',
        'verified'
    );
    public $id;
    public $atm_name;
    public $atm_longitude;
    public $atm_lattitude;
    public $atm_adress;
    public $atm_currency;
    public $verified;
   
   
}