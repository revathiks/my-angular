<?php
header("Access-Control-Allow-Origin: *");
//header("Access-Control-Allow-Methods:DELETE");
header("Access-Control-Allow-Methods:GET, PUT, POST, DELETE, OPTIONS");
include_once '../class/user.php';
$userDelete=new User;
if(isset($_GET))
{	(isset($_GET['uid'])) ? $uid=$_GET['uid']:$uid=0;

    if( $uid > 0)
	{
	 $response=$userDelete->deleteUser($uid);		
	}
	else
	{
		$response=array('msg'=>'nouser found to delete');
	}
	echo json_encode($response,true);
}
?>