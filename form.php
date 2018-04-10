
<?php

if(!empty($_POST)) {

  $firstname  = $_POST['firstname'];
  $lastname   = $_POST['lastname'];
  $subject    = $_POST['subject'];
  $message    = $_POST['message'];
  $errors     = [];

  if(empty($firstname))
    $errors['firstname'] = 'Renseigner un prénom';

  if(empty($lastname))
    $errors['lastname'] = 'Renseigner un nom';

  if(empty($subject))
    $errors['subject'] = 'Choisir un sujet';

  if(empty($message))
    $errors['message'] = 'Écrire un message';

  if(empty($errors)) {

    $done = true;

    sendMail($firstname, $lastname, $subject, $message);

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

  // var_dump(mail($to, $subject, $formatted, $headers));
  mail($to, $subject, $formatted, $headers);

}

?><DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="bootstrap.min.css">
    <link rel="stylesheet" href="form.css">
    <title>Form PHP</title>
  </head>
  <body>
    <div class="container col-sm-10 col-md-8 col-lg-6 col-xl-4">
      <?php if(isset($done)) echo displayDone($firstname, $lastname, $subject); ?>
      <h1>Contact</h1>
      <form method="post" action="form.php">
        <div class="form-group">
          <div class="form-row">
            <div class="col">
              <input data-content type="text" name="firstname" class="form-control" value="<?php if(isset($firstname)) echo $firstname; ?>" placeholder="Prénom">
              <span><?php if(isset($errors['firstname'])) echo $errors['firstname']; ?></span>
            </div>
            <div class="col">
              <input data-content type="text" name="lastname" class="form-control" value="<?php if(isset($lastname)) echo $lastname; ?>" placeholder="Nom">
              <span><?php if(isset($errors['lastname'])) echo $errors['lastname']; ?></span>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="form-row">
            <div class="col">
              <input data-content type="text" name="subject" class="form-control" value="<?php if(isset($subject)) echo $subject; ?>" placeholder="Sujet">
              <span><?php if(isset($errors['subject'])) echo $errors['subject']; ?></span>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea data-content name="message" class="form-control" id="message" rows="4"><?php if(isset($message)) echo $message; ?></textarea>
          <span><?php if(isset($errors['message'])) echo $errors['message']; ?></span>
        </div>
        <div class="form-group">
           <button type="submit" class="btn btn-primary">Envoyer</button>
         </div>
      </form>
    </div>
    <script src="form.js"></script>
  </body>
</html>
