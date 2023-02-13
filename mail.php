<form method="post" action="">
<input type="text" name="to" placeholder="введите email">
<br><br>
<input type="text" name="subject" placeholder="введите заголовок письма">
<br><br>
<textarea type="text" name="message" placeholder="введите текст письма" rows="5"></textarea>
<br><br>
<input type="submit" value="Enter!"><br><br>
</form>
<br><br>
 
<?php
$headers =	'From: no-reply@example.com' . "\r\n" .
			'Reply-To: webmaster@example.com' . "\r\n" .
			'X-Mailer: PHP/' . phpversion();
if (isset($_POST['to']) && isset($_POST['subject']) && isset($_POST['message']))
	if (mail($_POST['to'], $_POST['subject'], $_POST['message'], $headers)) {
		echo '<font color=green><b>письмо было принято для передачи</b></font>';
    print_r($_POST['subject']);
	} else {
		echo '<font color=red><b>что-то пошло не так...</b></font>';
	}
?>
<?php
// $to      = 'max.zlatin@gmail.com';
// $subject = 'the subject';
// $message = 'helbdifbvdhfbvdfbvdufbvyudfbvuydybvuydbf7346t836487364875634875634lo';
// $headers = 'From: max.zlatin@gmail.com' . "\r\n" .
//     'Reply-To: webmaster@example.com' . "\r\n" .
//     'X-Mailer: PHP/' . phpversion();

// mail($to, $subject, $message, $headers);
?>