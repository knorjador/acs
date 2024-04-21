
<?php

$datas = [

  "students" => [
    [
      "firstname" => "DURON",
      "lastname" => "Stacy",
      "address" => [
        "street" => "rue de l'ACS",
        "numero" => "12",
        "zipcode" => 39000,
        "city" => "Lons-le-Saunier",
        "country" => "France"
      ]
  ],
    [
      "firstname" => "SAULEY",
      "lastname" => "Pierre",
      "address" => [
        "street" => "rue de fedora",
        "zipcode" => 39100,
        "city" => "Dole",
        "country" => "France"
      ]
  ],
    [
      "firstname" => "CARREY",
      "lastname" => "Raphaël",
      "address" => [
        "street" => "boulevard de l'ES6",
        "numero" => "42",
        "zipcode" => 39100,
        "city" => "Dole",
        "country" => "France"
      ]
  ]

  ],"coachs" => [

    [
      "firstname" => "LOUIS",
      "lastname" => "Morgane",
      "skills" => [
          "design", "wireframing", "frontend", "photoshop"
      ],
      "birthdate" => new DateTime('1990-10-10')
    ],
    [
      "firstname" => "TOURNIER",
      "lastname" => "Anthony",
      "skills" => [
          "pas design", "php", "backend", "linux"
      ],
      "birthdate" => new DateTime('1990-10-20')
    ]

    ]

];


$students   = $datas['students'];
$nbStudents = count($students);
$coachs     = $datas['coachs'];
$nbCoachs   = count($coachs);

/**** **** **** **** **** **** **** ****
 > FOR
**** **** **** **** **** **** **** ****/

$displayStudentsFor = '';

for($i = 0; $i < $nbStudents; $i++) {

  $address  = $students[$i]['address'];
  $numero   = isset($address['numero']) ? $address['numero'] : '';
  $street   = isset($address['street']) ? $address['street'] : '';
  $zipcode  = isset($address['zipcode']) ? $address['zipcode'] : '';
  $city     = isset($address['city']) ? $address['city'] : '';
  $country  = isset($address['country']) ? $address['country'] : '';

  $formattedAddress = $numero.' '.$street.' '.$zipcode.' '.$city.' '.$country;

  $displayStudentsFor .= '<tr>
                            <td>'.$students[$i]['firstname'].'</td>
                            <td>'.$students[$i]['lastname'].'</td>
                            <td>'.$formattedAddress.'</td>
                          </tr>';

}




$displayCoachsFor = '';

for($i = 0; $i < $nbCoachs; $i++) {

  $displayCoachsFor .= '<tr>
                          <td>'.$coachs[$i]['firstname'].'</td>
                          <td>'.$coachs[$i]['lastname'].'</td>
                          <td>'.implode(' ', $coachs[$i]['skills']).'</td>
                          <td>'.$coachs[$i]['birthdate']->format('d/m/Y').'</td>
                        </tr>';

}

/**** **** **** **** **** **** **** ****
 > FOREACH
**** **** **** **** **** **** **** ****/

$displayStudentsForeach  = '';

foreach($students as $student) {

  $displayStudentsForeach .= '<tr>';

  foreach($student as $key => $value) {

    if($key !== 'address') {

      $displayStudentsForeach .= '<td>'.$value.'</td>';

    } else {

      $address  = $value;
      $numero   = isset($value['numero']) ? $value['numero'] : '';
      $street   = isset($value['street']) ? $value['street'] : '';
      $zipcode  = isset($value['zipcode']) ? $value['zipcode'] : '';
      $city     = isset($value['city']) ? $value['city'] : '';
      $country  = isset($value['country']) ? $value['country'] : '';

      $formattedAddress = $numero.' '.$street.' '.$zipcode.' '.$city.' '.$country;

      $displayStudentsForeach .= '<td>'.$formattedAddress.'</td>';

    }

  }

  $displayStudentsForeach .= '</tr>';

}

$displayCoachsForeach  = '';

foreach($coachs as $coach) {

  $displayCoachsForeach .= '<tr>';

  foreach($coach as $key => $value) {

    if($key === 'skills') {

      $displayCoachsForeach .= '<td>'.implode(' ', $value).'</td>';

    } else if($key === 'birthdate') {

      $displayCoachsForeach .=  '<td>'.$value->format('d/m/Y').'</td>';

    } else {

      $displayCoachsForeach .= '<td>'.$value.'</td>';

    }

  }

  $displayCoachsForeach .= '</tr>';

}


/**** **** **** **** **** **** **** ****
 > WHILE
**** **** **** **** **** **** **** ****/

$i = 0;
$displayStudentsWhile = '';

while($i < $nbStudents) {

  $address  = $students[$i]['address'];
  $numero   = isset($address['numero']) ? $address['numero'] : '';
  $street   = isset($address['street']) ? $address['street'] : '';
  $zipcode  = isset($address['zipcode']) ? $address['zipcode'] : '';
  $city     = isset($address['city']) ? $address['city'] : '';
  $country  = isset($address['country']) ? $address['country'] : '';

  $formattedAddress = $numero.' '.$street.' '.$zipcode.' '.$city.' '.$country;

  $displayStudentsWhile .= '<tr>
                            <td>'.$students[$i]['firstname'].'</td>
                            <td>'.$students[$i]['lastname'].'</td>
                            <td>'.$formattedAddress.'</td>
                          </tr>';

  $i++;

}


$j = 0;
$displayCoachsWhile = '';

while($j < $nbCoachs) {

  $displayCoachsWhile .= '<tr>
                          <td>'.$coachs[$j]['firstname'].'</td>
                          <td>'.$coachs[$j]['lastname'].'</td>
                          <td>'.implode(' ', $coachs[$j]['skills']).'</td>
                          <td>'.$coachs[$j]['birthdate']->format('d/m/Y').'</td>
                        </tr>';

  $j++;

}


?><!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href=".png"/>
    <link rel="stylesheet" href=".css">
    <title>PP</title>
    <style>
     hr {
       margin: 32px 0
     }
    </style>
  </head>
  <body>
    <div class="container">

      <h2>FOR</h2>

      <h3>Étudiants</h3>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Nom</th>
            <th scope="col">Prénom</th>
            <th scope="col">Adresse</th>
          </tr>
        </thead>
        <tbody>

          <?php echo $displayStudentsFor; ?>

        </tbody>
      </table>

      <h3>Formateurs</h3>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Nom</th>
            <th scope="col">Prénom</th>
            <th scope="col">Compétences</th>
            <th scope="col">Date de naissance</th>
          </tr>
        </thead>
        <tbody>

          <?php echo $displayCoachsFor; ?>

        </tbody>
      </table>

      <hr>

      <h2>FOREACH</h2>

      <h3>Étudiants</h3>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Nom</th>
            <th scope="col">Prénom</th>
            <th scope="col">Adresse</th>
          </tr>
        </thead>
        <tbody>

          <?php echo $displayStudentsForeach; ?>

        </tbody>
      </table>

      <h3>Formateurs</h3>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Nom</th>
            <th scope="col">Prénom</th>
            <th scope="col">Compétences</th>
            <th scope="col">Date de naissance</th>
          </tr>
        </thead>
        <tbody>

          <?php echo $displayCoachsForeach; ?>

        </tbody>
      </table>

      <hr>

      <h2>WHILE</h2>

      <h3>Étudiants</h3>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Nom</th>
            <th scope="col">Prénom</th>
            <th scope="col">Adresse</th>
          </tr>
        </thead>
        <tbody>

          <?php echo $displayStudentsWhile; ?>

        </tbody>
      </table>

      <h3>Formateurs</h3>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Nom</th>
            <th scope="col">Prénom</th>
            <th scope="col">Compétences</th>
            <th scope="col">Date de naissance</th>
          </tr>
        </thead>
        <tbody>

          <?php echo $displayCoachsWhile; ?>

        </tbody>
      </table>

    </div>
    <script src=".js"></script>
  </body>
</html>
