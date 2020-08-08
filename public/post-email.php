<?php
/**
 * Created by PhpStorm.
 * User: kofi
 * Date: 08/08/2020
 * Time: 22:00
 */

require_once('config.php');

$con = mysqli_connect(DB_SERVER, DB_USER, DB_PASS, DB_NAME);
if (mysqli_connect_errno()) {
    echo "<script>window.location.href='errorPage.php';</script>";
}

$query = "CREATE TABLE IF NOT EXISTS submissions ( id INT NOT NULL AUTO_INCREMENT PRIMARY KEY , email VARCHAR(50) NOT NULL , created_at TIMESTAMP)";
$result = $con->query($query);
if (!$result) {
    echo "<script>window.location.href='errorPage.php';</script>";
}
$email = $_POST['email'];
$query = "INSERT INTO submissions(id,email,created_at) VALUES(NULL, '$email', now())";
$result = $con->query($query);
if ($result) {
    echo "<script> window.location.href='successPage.php'; </script>";
} else {
    echo "<script>window.location.href='errorPage.php';</script>";
}