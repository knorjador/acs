
<?php

function performRequest(array $posted): array {

  // var_dump($posted);
  // die();

  $firstname  = trim(htmlspecialchars($posted['firstname']));
  $lastname   = trim(htmlspecialchars($posted['lastname']));
  $email      = trim(htmlspecialchars($posted['email']));
  $nature     = trim(htmlspecialchars($posted['nature']));
  $subject    = trim(htmlspecialchars($posted['subject']));
  $message    = trim(htmlspecialchars($posted['message']));

  $errors = $values = [];

  empty($firstname) ? $errors['firstname'] = 'Renseigner un prénom' : $values['firstname'] = $firstname;
  empty($lastname)  ? $errors['lastname']  = 'Renseigner un nom'    : $values['lastname']  = $lastname;
  empty($email)     ? $errors['email']     = 'Renseigner un email'  : $values['email']     = $email;
  empty($subject)   ? $errors['subject']   = 'Choisir un sujet'     : $values['subject']   = $subject;
  empty($message)   ? $errors['message']   = 'Écrire un message'    : $values['message']   = $message;

  if(!isset($posted['gender'])) {

    $errors['gender'] = 'Choisir un genre';

  } else {

    $gender = $posted['gender'];

    if($gender === 'woman' || $gender === 'man') {

      if($gender === 'woman') $values['woman'] = true;
      if($gender === 'man') $values['man'] = true;

    } else {

      $errors['gender'] = 'Choisir un genre';

    }

  }

  if($nature !== 'Professionnel' && $nature !== 'Personnel') {

    $errors['nature'] = 'Déterminer la nature du contact';

  } else {

    if($nature === 'Professionnel') $values['pro'] = true;
    if($nature === 'Personnel') $values['per'] = true;

  }

  if(!empty($errors))
    return ['errors' => $errors, 'values' => $values];

  return checkData([

    'gender'    => $gender,
    'firstname' => $firstname,
    'lastname'  => $lastname,
    'email'     => $email,
    'nature'    => $nature,
    'subject'   => $subject,
    'message'   => $message

  ]);

}

function checkData(array $posted): array {

  $gender    = $posted['gender'];
  $firstname = $posted['firstname'];
  $lastname  = $posted['lastname'];
  $email     = $posted['email'];
  $nature    = $posted['nature'];
  $subject   = $posted['subject'];
  $message   = $posted['message'];

  $max_identity = 8;
  $max_subject  = 10;
  $errors = [];

  strlen($firstname) > $max_identity ? $errors['firstname'] = 'Maximum '.$max_identity.' caractères' : $values['firstname'] = $firstname;
  strlen($lastname)  > $max_identity ? $errors['lastname']  = 'Maximum '.$max_identity.' caractères' : $values['lastname']  = $firstname;
  strlen($subject)   > $max_subject  ? $errors['subject']   = 'Maximum '.$max_subject.' caractères'  : $values['subject']   = $subject;

  !filter_var($email, FILTER_VALIDATE_EMAIL) ? $errors['email'] = 'Mail Invalide' : $values['email'] = $email;

  if(!empty($errors)) {

    if($gender === 'woman') $values['woman'] = true;
    if($gender === 'man') $values['man'] = true;

    if($nature === 'Professionnel') $values['pro'] = true;
    if($nature === 'Personnel') $values['per'] = true;

    $values['message'] = $message;

    return ['errors' => $errors, 'values' => $values];

  }

  return insertData($posted);

}

function insertData(array $posted): array {

  require 'pdo.php';

  $pdo = new Database();

  $gender    = $posted['gender'];
  $firstname = $posted['firstname'];
  $lastname  = $posted['lastname'];
  $email     = $posted['email'];
  $nature    = $posted['nature'];
  $subject   = $posted['subject'];
  $message   = $posted['message'];

  try {

    $statement = $pdo->getInstance()->prepare("INSERT INTO messages (gender, firstname, lastname, email, nature, subject, message, date)
                                               VALUES (:gender, :firstname, :lastname, :email, :nature, :subject, :message, :date)");

    $date = date('Y-m-d H:i:s');

    $statement->bindParam(':gender', $gender);
    $statement->bindParam(':firstname', $firstname);
    $statement->bindParam(':lastname', $lastname);
    $statement->bindParam(':email', $email);
    $statement->bindParam(':nature', $nature);
    $statement->bindParam(':subject', $subject);
    $statement->bindParam(':message', $message);
    $statement->bindParam(':date', $date);

    $statement->execute();

    // sendMail($firstname, $lastname, $subject, $message);

    return ['notif' => displayDone($firstname, $lastname, $subject)];

  } catch(PDOException $e) {

    // deal with it
    var_dump($e);
    die();

    return ['notif' => displayError($firstname, $lastname)];

  }

}

function displayDone(string $firstname, string $lastname, string $subject) {

  return '

    <div class="alert alert-success">
      <h4 class="alert-heading">Félicitations <span class="sbold">'.$firstname.' '.$lastname.'</span></h4>
      <h4 class="alert-heading">le message au sujet de : <span class="sbold">'.$subject.'</span></h4>
      <h4 class="alert-heading">a bien été envoyé.</h4>
    </div>

  ';

}

function displayError(string $firstname, string $lastname) {

  return '

    <div class="alert alert-danger">
      <h4 class="alert-heading">Désolé <span class="sbold">'.$firstname.' '.$lastname.'</span></h4>
      <h4 class="alert-heading">Une erreur est survenue.</h4>
    </div>

  ';

}

function sendMail(string $firstname, string $lastname, string $subject, string $message) {

  $to         = 'raphael.c@codeur.online';
  $identity   = $firstname.' '.$lastname;
  $headers    = 'From: '.$identity.' <someone@domain.tld>' . "\r\n";
  $headers    .= "X-Mailer: PHP ".phpversion()."\n";
  $headers    .= "X-Priority: 1 \n";
  $headers    .= "Mime-Version: 1.0\n";
  $headers    .= "Content-Transfer-Encoding: 8bit\n";
  $headers    .= "Content-type: text/html; charset= utf-8\n";
  $headers    .= "Date:" . date("D, d M Y h:s:i") . " +0200\n";

  $formatted  = '

    <html>
      <body>
        <p>'.$message.'</p>
      </body>
    </html>

  ';

  mail($to, $subject, $formatted, $headers);

}

?>
