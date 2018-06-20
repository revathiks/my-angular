<?php
//header("Access-Control-Allow-Origin: *");
include_once 'conn.php';
class User extends Dbconfig
{
	public function __construct()
	{
		parent::__construct();
	}
	public function login($data)
	{  
	    $response=array();
		
		isset($data['email']) ? $email=$data['email'] :$email="";
		isset($data['password']) ? $password=$data['password'] :$password="";
				
		$query = "select name,email,id from users WHERE email = '".$email."' and password='".$password."'";		
		$result = mysqli_query($this->connection,$query);
		if(mysqli_num_rows($result)>0)
		{
			$row=mysqli_fetch_assoc($result);
			$response=$row;
			$response['status']="success";
			
		}
		else
		{
			$response['status']="failure";
		}
       return $response;		
		
	}
	public function register($data)
	{   $response=array();
	    $response['actionState']=0;
		$email=$data['email'];		
		$password=$data['password'];	
        $name=$data['name'];	
        isset($data['name']) ? $name=$data['name'] :$name="";	
		isset($data['password']) ? $password=$data['password'] :$password="";	
		isset($data['email']) ? $email=$data['email'] :$email="";	
         isset($data['city']) ? $city=$data['city'] :$city="";
		isset($data['country']) ? $country=$data['country'] :$country="";
		isset($data['state']) ? $state=$data['state'] :$state="";
		$query = "select * from users WHERE email = '".$email."'";		
		if($result = mysqli_query($this->connection,$query))
		{
			$rowcount=mysqli_num_rows($result);
			if($rowcount >0)
			{
				$response['registerstatus']="failed";
				$response['Msg']="Email ID already used";
				
			}
			else
			{   
		       $insertQry="INSERT INTO users (name, email, password,country,state,city)
                VALUES ('$name', '$email', '$password','$country','$state','$city')";
				if(mysqli_query($this->connection,$insertQry))
				{
		
		        $response['registerstatus']="success";
				$response['Msg']="User Registered successfully";
				$response['actionState']=1;
				}
				else{
			     $response['registerstatus']="failed";
		       }
				
		     }
		}
		else{
			$response['registerstatus']="failed";
		}
		return $response;
		
		
	}
	
	public function listUsers()
	{   $response=array();	    
		$response['noRecords']="";			
				
		$query = "select * from users order by id desc";		
		if($result = mysqli_query($this->connection,$query))
		{
			$rowcount=mysqli_num_rows($result);
			if($rowcount >0)
			{   while ($row=mysqli_fetch_array($result,MYSQLI_ASSOC))
				{
					$userlist[]=$row;
				}
		        $response['users']=$userlist;
		        $response['noRecords']=$rowcount;
			}else{
            $response['noRecords']=0;}			
		}
		else{
			$response['noRecords']=0;
		}
		return $response;
		
		
	}
	
	public function deleteUser($uid)
	{   $response=array();	
				
		$query = "delete from users where id=".$uid;		
		if($result = mysqli_query($this->connection,$query))
		{
			
		        $response['msg']="user deleted successfully";
		        $response['status']='success';
						
		}
		else{
			$response['status']='failed';
		}
		return $response;
		
		
	}
	
	public function userdetail($uid)
	{   $response=array();	    
		$response['noRecords']="";			
				
		$query = "select * from users where id=".$uid;		
		if($result = mysqli_query($this->connection,$query))
		{
			$rowcount=mysqli_num_rows($result);
			if($rowcount >0)
			{   $row=mysqli_fetch_array($result,MYSQLI_ASSOC);
				
		        $response['noRecords']=$rowcount;
				$response['user']=$row;
			}else{
            $response['noRecords']=0;}			
		}
		else{
			$response['noRecords']=0;
		}
		return $response;
		
		
	}
	
	public function userUpdate($data)
	{   $response=array();
	    $response['actionState']=0;
		$email=$data['email'];		
		$password=$data['password'];	
        $name=$data['name'];  
        isset($data['city']) ? $city=$data['city'] :$city="";
		isset($data['country']) ? $country=$data['country'] :$country="";
		isset($data['state']) ? $state=$data['state'] :$state="";		
        $id=$data['id'];		
		$query = "select * from users WHERE email = '".$email."'";		
		if($result = mysqli_query($this->connection,$query))
		{
			$rowcount=mysqli_num_rows($result);
			if($rowcount >0)
			{
				 $updateQry="update users set name='$name',email='$email',password='$password',country='$country',state='$state',city='$city' where id=".$id;
				if(mysqli_query($this->connection,$updateQry))
				{		
		        $response['updatestatus']="success";
				$response['Msg']="User updated successfully";
				$response['actionState']=1;
				}
				else{
			     $response['updatestatus']="failed";
		       };
				
			}
			else
			{   
		         $response['updatestatus']="failed";
				
		     }
		}
		else{
			$response['updatestatus']="failed";
		}
		return $response;
		
		
	}
}
?>