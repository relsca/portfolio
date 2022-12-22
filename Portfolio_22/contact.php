<?php

$user = 'root';
$pass = 'root';
$Pdo_Object = new PDO("mysql:host=127.0.0.1;dbname=portolio",$user, $pass, array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION )); 

try {
   if(!isset($_POST['email'])) throw new Exception("Le paramètre email est absent");
   if(!isset($_POST['content'])) throw new Exception("Le paramètre content est absent");
   

   $Format_Email = '#[a-z0-9]{1,}[\-\_\.a-z0-9]{0,}@[a-z]{2,}[\-\_\.a-z0-9]{0,}\.[a-z]{2,6}$#';
   $Format_Content = '#^[a-zA-Z0-9áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ\.\_\-\s]{5,500}$#';
   if
   (!preg_match($Format_Email, $_POST['email']))  throw new Exception("Le paramètre email ne correspond pas au format attendu");
   if(!preg_match($Format_Content , $_POST['content']))  throw new Exception("Le paramètre content ne correspond pas au format attendu - limite de 500 caractères");
 
 
  $Arr_Key_Value = array(
                         'email' => $_POST['email'],
                         'content' => $_POST['content']);
  
  $Sql_Query = "INSERT INTO contact(email,content) VALUES (:email,:content)";
  
  
  $Request= $Pdo_Object->prepare($Sql_Query);
  
 
  $Request->execute($Arr_Key_Value);
} catch (Exception $e) {
   echo $e->getMessage(); 
}
finally{

 $Pdo_Object = null;
}
?>