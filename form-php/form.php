
<?php

if(!empty($_POST)) {

  require 'php/functions.php';

  $done = performRequest($_POST);

  // var_dump($done);
  // die();

}

?><!DOCTYPE html>
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
      <?php if(isset($done['notif'])) echo $done['notif']; ?>
      <h1>Contact</h1>
      <form method="post" action="form.php">
        <!--********************************
          > GENDER
        ********************************-->
        <div class="form-group">
          <div class="custom-control custom-radio custom-control-inline">
            <input class="custom-control-input" type="radio" id="man" name="gender" value="man" <?php if(isset($done['values']['man'])) echo 'checked' ?>>
            <label class="custom-control-label" for="man">Monsieur</label>
          </div>
          <div class="custom-control custom-radio custom-control-inline">
            <input class="custom-control-input" type="radio" id="woman" name="gender" value="woman" <?php if(isset($done['values']['woman'])) echo 'checked' ?>>
            <label class="custom-control-label" for="woman">Madame</label>
          </div>
          <span id="sradio" style="display:block"><?php if(isset($done['errors']['gender'])) echo $done['errors']['gender']; ?></span>
        </div>
        <!--********************************
          > FIRSTNAME & LASTNAME
        ********************************-->
        <div class="form-group">
          <div class="form-row">
            <div class="col">
              <input data-content type="text" name="firstname" class="form-control" value="<?php if(isset($done['values']['firstname'])) echo $done['values']['firstname']; ?>" placeholder="Prénom">
              <span><?php if(isset($done['errors']['firstname'])) echo $done['errors']['firstname']; ?></span>
            </div>
            <div class="col">
              <input data-content type="text" name="lastname" class="form-control" value="<?php if(isset($done['values']['lastname'])) echo $done['values']['lastname']; ?>" placeholder="Nom">
              <span><?php if(isset($done['errors']['lastname'])) echo $done['errors']['lastname']; ?></span>
            </div>
          </div>
        </div>
        <!--********************************
          > EMAIL
        ********************************-->
        <div class="form-group">
          <div class="form-row">
            <div class="col">
              <input type="text" data-content name="email" class="form-control" value="<?php if(isset($done['values']['email'])) echo $done['values']['email']; ?>" placeholder="Email">
              <span><?php if(isset($done['errors']['email'])) echo $done['errors']['email']; ?></span>
            </div>
          </div>
        </div>
        <!--********************************
          > NATURE
        ********************************-->
        <div class="form-group">
          <select name="nature" class="custom-select">
            <option <?php if(!isset($_POST['nature'])) echo 'selected'; ?>>Nature du contact</option>
            <option <?php if(isset($done['values']['pro'])) echo 'selected'; ?>>Professionnel</option>
            <option <?php if(isset($done['values']['per'])) echo 'selected'; ?>>Personnel</option>
          </select>
          <span><?php if(isset($done['errors']['nature'])) echo $done['errors']['nature']; ?></span>
        </div>
        <!--********************************
          > SUBJECT
        ********************************-->
        <div class="form-group">
          <div class="form-row">
            <div class="col">
              <input data-content type="text" name="subject" class="form-control" value="<?php if(isset($done['values']['subject'])) echo $done['values']['subject']; ?>" placeholder="Sujet">
              <span><?php if(isset($done['errors']['subject'])) echo $done['errors']['subject']; ?></span>
            </div>
          </div>
        </div>
        <!--********************************
          > MESSAGE
        ********************************-->
        <div class="form-group">
          <label for="message">Message</label>
          <textarea data-content name="message" class="form-control" id="message" rows="4"><?php if(isset($done['values']['message'])) echo $done['values']['message']; ?></textarea>
          <span><?php if(isset($done['errors']['message'])) echo $done['errors']['message']; ?></span>
        </div>
        <!--********************************
          > SUBMIT
        ********************************-->
        <div class="form-group">
           <button type="submit" class="btn btn-primary">Envoyer</button>
         </div>
      </form>
    </div>
    <script src="form.js"></script>
  </body>
</html>
