<?php

$username = filter_input(INPUT_POST, 'username');
$email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
$password = filter_input(INPUT_POST, 'password');
$cpassword = filter_input(INPUT_POST, 'cpassword');

if (!empty($username) && !empty($password) && !empty($cpassword) && $password == $cpassword && $email !== false) {
    $host = "localhost";
    $dbusername = "root";
    $dbpassword = "";
    $dbname = "mddb";

    // Create connection to db
    $conn = new mysqli($host, $dbusername, $dbpassword, $dbname);

    if (mysqli_connect_error()) {
        die('Connect Error (' . mysqli_connect_errno() . ')' . mysqli_connect_error());
    } else {
        // Hash the password
        //$hashed_password = password_hash($password, PASSWORD_DEFAULT);
        // $hashed_cpassword = password_hash($cpassword, PASSWORD_DEFAULT);

        // Prepare and bind the statement
        $stmt = $conn->prepare("INSERT INTO user (username, email, password ) VALUES (?, ?, ? )");
        $stmt->bind_param("sss", $username, $email, $password );

        // Execute the statement
        if ($stmt->execute()) {
           //echo "";
           //include ('swat.php');
           header("Location: successreg.html");
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }

        $stmt->close();
        $conn->close();
    }
} else {
    echo "Invalid input data";
}
?>
