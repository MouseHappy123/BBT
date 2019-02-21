<?php
header('Content-Type: text/html; charset=utf-8');
$host = 'localhost';
$user = 'root';
$pass = '123Linux';
$link = mysqli_connect($host, $user, $pass);
mysqli_select_db($link,"123");
mysqli_query($link,"SET names UTF8");
$timezone="Asia/Shanghai";
date_default_timezone_set($timezone); 