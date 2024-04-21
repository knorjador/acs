
<?php

function getData(string $request): array {

  require 'pdo.php';

  $pdo = new Database();

  switch ($request) {

    case 'palmer':
      return ['template' => $request, 'data' => getPalmer($pdo)];
      break;

    case 'women':
      return ['template' => $request, 'data' => getWomen($pdo)];
      break;

    case 'states':
      return ['template' => $request, 'data' => getStates($pdo)];
      break;

    case 'emails':
      return ['template' => $request, 'data' => getEmails($pdo)];
      break;

    case 'repartition':
      return ['template' => $request, 'data' => getRepartition($pdo)];
      break;

    case 'gender':
      return ['template' => $request, 'data' => getGender($pdo)];
      break;

    case 'average':
      return ['template' => $request, 'data' => getAverage($pdo)];
      break;

    case 'students':
      return ['template' => $request, 'data' => getStudents($pdo)];
      break;

    default:
      return ['template' => 'base', 'data' => ''];
      break;

  }

}

function getPalmer($pdo): array {

  $statement = $pdo->getInstance()->prepare("SELECT * FROM users WHERE last_name = ?");
  $statement->execute(['Palmer']);

  $data  = $statement->fetchAll();
  $count = count($data);

  return ['count' => $count, 'data' => $data];

}

function getWomen($pdo): array {

  $statement = $pdo->getInstance()->prepare("SELECT * FROM users WHERE gender = ?");
  $statement->execute(['female']);

  $data  = $statement->fetchAll();
  $count = count($data);

  return ['count' => $count, 'data' => $data];

}

function getStates($pdo): array {

  $statement = $pdo->getInstance()->prepare("SELECT  DISTINCT country_code FROM users WHERE country_code LIKE ?");
  $statement->execute(['N%']);

  $data  = $statement->fetchAll();
  $count = count($data);

  return ['count' => $count, 'data' => $data];

}

function getEmails($pdo): array {

  $statement = $pdo->getInstance()->prepare("SELECT email FROM users WHERE email LIKE ?");
  $statement->execute(['%google%']);

  $data  = $statement->fetchAll();
  $count = count($data);

  return ['count' => $count, 'data' => $data];

}

function getRepartition($pdo): array {

  $statement = $pdo->getInstance()->prepare("SELECT country_code,COUNT(*) as nb FROM users GROUP BY country_code ORDER BY nb ASC");
  $statement->execute();

  $data  = $statement->fetchAll();
  $count = count($data);

  return ['count' => $count, 'data' => $data];

}

function getGender($pdo): array {

  $statement = $pdo->getInstance()->prepare("SELECT gender,COUNT(*) AS nb FROM users GROUP BY gender");
  $statement->execute();

  $data   = $statement->fetchAll();
  $women  = $data[0]['nb'];
  $men    = $data[1]['nb'];

  return ['women' => $women, 'men' => $men];

}

function getAverage($pdo): array {

  $statement = $pdo->getInstance()->prepare('SELECT first_name,last_name, TIMESTAMPDIFF(YEAR,birth_date,CURDATE()) AS age FROM users');
  $statement->execute();
  $data = $statement->fetchAll();

  $statement = $pdo->getInstance()->prepare("SELECT gender, YEAR(NOW()) - AVG(YEAR(birth_date)) AS average FROM users WHERE birth_date NOT IN ('0000-00-00') GROUP BY gender");
  $statement->execute();
  $averages = $statement->fetchAll();

  return ['data' => $data, 'women_average' => $averages[0]['average'], 'men_average' => $averages[1]['average']];

/*
  // AVERAGES WITH PHP

  $statement = $pdo->getInstance()->prepare("SELECT first_name,last_name,birth_date,gender FROM users");
  $statement->execute();

  $users = $statement->fetchAll();
  $data  = [];

  $women_average = $men_average = 0;
  $today = date_create('today');

  foreach ($users as $user) {

    $gender = $user['gender'];
    $age    = date_diff(date_create($user['birth_date']), $today)->y;

    array_push($data, [

      'first_name' => $user['first_name'],
      'last_name'  => $user['last_name'],
      'age'        => $age

    ]);

    $gender === 'Female' ? $women_average += $age : $men_average += $age;

  }

  $nb_by_gender = getGender($pdo);

  return [

    'data'          => $data,
    'women_average' => $women_average / $nb_by_gender['women'],
    'men_average'   => $men_average / $nb_by_gender['men']

  ];
*/

}

function getStudents($pdo): array {

  $statement = $pdo->getInstance()->prepare("SELECT * FROM students INNER JOIN departments ON students.department = departments.number");
  $statement->execute();
  $data = $statement->fetchAll();

  return ['data' => $data];

}


?>
