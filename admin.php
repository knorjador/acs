
<?php

require 'php/pdo.php';

$pdo = new Database();

$statement = $pdo->getInstance()->prepare("SELECT * FROM messages");
$statement->execute();

$data = $statement->fetchAll();

// var_dump($data);
// die();

$table = '<table class="table table-striped">
            <thead class="thead-dark">
              <tr>
                <th>Genre</th>
                <th>Prénom</th>
                <th>Nom</th>
                <th>Email</th>
                <th>Nature</th>
                <th>Sujet</th>
                <th>Message</th>
                <th>Supprimer</th>
              </tr>
            </thead>
            <tbody>';

foreach ($data as $item) {

  $gender = $item['gender'] === 'woman' ? 'Madame' : 'Monsieur';
  $email  = $item['email'];

  $table .= '<tr>
              <td>'.$gender.'</td>
              <td>'.$item['firstname'].'</td>
              <td>'.$item['lastname'].'</td>
              <td>'.$email.'</td>
              <td>'.$item['nature'].'</td>
              <td>'.$item['subject'].'</td>
              <td>'.$item['message'].'</td>
              <td><input name="checkboxes[]" value="'.$email.'" type="checkbox"></td>
            </tr>';

}

$table .= '</tbody></table>';

if(!empty($_POST)) {

  // var_dump($_POST);
  // die();

  $checkboxes = $_POST['checkboxes'];

  foreach ($checkboxes as $checkbox) {

    $statement = $pdo->getInstance()->prepare("DELETE FROM messages WHERE email = ?");
    $statement->execute([$checkbox]);

  }

  header("Refresh:0");

  // echo "<meta http-equiv='refresh' content='0 ; URL=admin.php'>";

}

?><!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="bootstrap.min.css">
    <link rel="stylesheet" href="admin.css">
    <title>Admin</title>
  </head>
  <body>
    <div class="container col-xl-10">
      <form method="post">
        <div class="top">
          <h1>Admin Zone</h1>
          <button class="btn btn-danger" type="submit">Supprimer</button>
        </div>
        <?= $table ?>
      </form>
    </div>
  </body>
</html>
