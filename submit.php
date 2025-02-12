<?php
$servername = "localhost"; // Ganti dengan nama server database Anda
$username = "root"; // Ganti dengan username database Anda
$password = ""; // Ganti dengan password database Anda
$dbname = "latihan_app"; // Ganti dengan nama database Anda

// Membuat koneksi
$conn = new mysqli($servername, $username, $password, $dbname);

// Periksa koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

// Insert data ke tabel
$sql = "INSERT INTO coba (jawaban) VALUES ('Yes')";


// Tutup koneksi
$conn->close();
?>
