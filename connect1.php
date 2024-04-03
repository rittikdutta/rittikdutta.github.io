<?php
// Establish connection to database
    $host = "localhost";
    $dbusername = "root";
    $dbpassword = "";
    $dbname = "mddb";

$conn = new mysqli($host, $dbusername, $dbpassword, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve username and password from login form
$username = filter_input(INPUT_POST, 'username1');
$password = filter_input(INPUT_POST, 'password1');

// Query to check if username exists
$sql = "SELECT * FROM user WHERE username = '$username'";
$result = $conn->query($sql);

if ($result->num_rows == 1) {
    // Username exists, fetch the corresponding password
    $row = $result->fetch_assoc();
    $stored_password = $row['password'];

    // Verify entered password against stored password
    if ($password== $stored_password) {
        // Passwords match, user successfully signed in
        header("Location: https://github.com/rittikdutta"); // Redirect to welcome page or any other page
        exit();
    } else {
        // Passwords do not match
        /*echo '<script>alert("Your message here.");</script>';
        header("Location: log.html?error=Incorrect password"); 
        exit();*/

        echo '<script>alert("Incorrect password. Please try again.");';
        // Redirect to log.html after the alert is dismissed
        echo 'window.location.href = "log.html?error=Incorrect password";</script>';
        exit(); // Make sure to stop further execution after redirection

    }
} else {
    // Username does not exist
    /*header("Location: log.html?error=Username not found"); // Redirect back to login page with error message
    exit();*/
        echo '<script>alert("Incorrect username. Please try again.");';
        // Redirect to log.html after the alert is dismissed
        echo 'window.location.href = "log.html?error=Username not found";</script>';
        exit(); // Make sure to stop further execution after redirection
}

$conn->close();
?>
