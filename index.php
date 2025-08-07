<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "info@solutionsregmed.com"; // client's email
    $subject = "New Consultation Request";

    $message = "Name: " . $_POST['first_name'] . " " . $_POST['last_name'] . "\n";
    $message .= "Email: " . $_POST['email'] . "\n";
    $message .= "Phone: " . $_POST['phone'] . "\n";
    $message .= "Service: " . $_POST['service'] . "\n";
    $message .= "Message:\n" . $_POST['message'];

    $headers = "From: contact@yourdomain.com";

    if (mail($to, $subject, $message, $headers)) {
        echo "<script>alert('Message sent successfully!'); window.location.href='index.html';</script>";
    } else {
        echo "<script>alert('Failed to send message. Try again.'); window.history.back();</script>";
    }
}
?>
