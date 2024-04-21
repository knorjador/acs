<?php

namespace Model;

class Files extends \PicORM\Model
{
    protected static $_tableName = 'file';
    protected static $_primaryKey = 'id';
    protected static $_relations = array();

    protected static $_tableFields = array(
        'filename',
        'transfer_id',
    );

    public $id;
    public $filename;
    public $transfer_id;

    protected static function defineRelations()
	{
		self::addRelationOneToMany('transfer_id', CheckPoint::class,'id' );
	}

}
