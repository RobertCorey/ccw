<?php

// this is the php script to send the message

$name = (!isset($_REQUEST['name']))  ? '' : $_REQUEST['name'];
$phone = (!isset($_REQUEST['phone']))  ? '' : $_REQUEST['phone'];
$email = (!isset($_REQUEST['email']))  ? '' : $_REQUEST['email'];
$comments = (!isset($_REQUEST['comments']))  ? '' : $_REQUEST['comments'];

$pass = true;

if (strlen($name) <= 2) {
	$pass = false;
}

if (strlen($phone) < 10) {
	$pass = false;
}

if (strlen($email) < 3) {
	$pass = false;
}

if (strlen($comments) < 5) {
	$pass = false;
}

if (!$pass){
	header('location:http://www.fails.com');
} else {
	$to = 'adam.m.grossi@gmail.com';
	$from = 'noreply@cicconelaw.com';
	$subject = 'Ciccone, Couglin & Waldman Representation Inquiry';

	$message = 'Name: '.$name.PHP_EOL;
	$message .= 'Phone: '.$phone.PHP_EOL;
	$message .= 'Email: '.$email.PHP_EOL;
	$message .= 'Comments: '.$comments.PHP_EOL;

	@mail($to, $subject, $message, 'From:'.$from.'\n\n');
	header('location:http://www.success.com');
}

?>