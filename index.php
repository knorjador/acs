

<?php

require_once './vendor/autoload.php';

// LOAD TWIG
$loader = new Twig_Loader_Filesystem('./templates');
$twig   = new Twig_Environment($loader, array(

  'cache' => false,
  'debug' => true

));

// DATA
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

/**** **** **** ****
 > STUDENTS
**** **** **** ****/

$stepStudents = [];

for($i = 0; $i < $nbStudents; $i++) {

  $stepStudents[$i]['firstname'] = $students[$i]['firstname'];
  $stepStudents[$i]['lastname']  = $students[$i]['lastname'];

  $address  = $students[$i]['address'];
  $numero   = isset($address['numero']) ? $address['numero'] : '';
  $street   = isset($address['street']) ? $address['street'] : '';
  $zipcode  = isset($address['zipcode']) ? $address['zipcode'] : '';
  $city     = isset($address['city']) ? $address['city'] : '';
  $country  = isset($address['country']) ? $address['country'] : '';

  $formattedAddress = $numero.' '.$street.' '.$zipcode.' '.$city.' '.$country;

  $stepStudents[$i]['address'] = $formattedAddress;

}

/**** **** **** ****
 > COACHS
**** **** **** ****/

// just send $coachs to Twig

echo $twig->render('pp.html', [

    'students' => $stepStudents
  , 'coachs'   => $datas['coachs']

]);

?>
