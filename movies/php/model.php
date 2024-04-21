
<?php

function getMovies($pdo): array {

  $statement = $pdo->getInstance()->prepare("SELECT * FROM movies");
  $statement->execute();

  $data = $statement->fetchAll();

  // echo '<pre>';
  // var_dump($data);
  // echo '</pre>';

  return $data;

}

function getDetails($pdo, $id) {

  $data = [];

  // movie
  $request = "SELECT *
              FROM movies
              WHERE id = ?";

  $statement = $pdo->getInstance()->prepare($request);
  $statement->execute([$id]);
  $step = $statement->fetch();

  if(is_array($step)) {

    array_push($data, ['movie' => $step]);

    // directors
    $request = "SELECT firstname, lastname, d.id
                FROM directors d
                INNER JOIN movies_directors m_d   ON d.id = m_d.directors_id
                INNER JOIN movies m               ON m_d.movies_id = m.id
                WHERE m.id = ?";

    $statement = $pdo->getInstance()->prepare($request);
    $statement->execute([$id]);
    $step = $statement->fetchAll();
    array_push($data, ['directors' => $step]);

    // actors
    $request = "SELECT firstname, lastname, a.id
                FROM actors a
                INNER JOIN actors_movies a_m   ON a.id = a_m.actors_id
                INNER JOIN movies m            ON a_m.movies_id = m.id
                WHERE m.id = ?";

    $statement = $pdo->getInstance()->prepare($request);
    $statement->execute([$id]);
    $step = $statement->fetchAll();
    array_push($data, ['actors' => $step]);

    // genres
    $request = "SELECT name, g.id
                FROM genres g
                INNER JOIN movies_genres m_g   ON g.id = m_g.genres_id
                INNER JOIN movies m            ON m_g.movies_id = m.id
                WHERE m.id = ?";

    $statement = $pdo->getInstance()->prepare($request);
    $statement->execute([$id]);
    $step = $statement->fetchAll();
    array_push($data, ['genres' => $step]);

    // echo '<pre>';
    // var_dump($data);
    // echo '</pre>';

    return $data;

  } else {

    return false;

  }

}

function getYear($pdo, $year) {

  $data = [];

  $statement = $pdo->getInstance()->prepare("SELECT * FROM movies WHERE year = ?");
  $statement->execute([$year]);
  $data = $statement->fetchAll();

  // echo '<pre>';
  // var_dump($data);
  // echo '</pre>';

  if(count($data) > 0)
    return $data;

  return false;

}

function getGenre($pdo, $genre) {

  $data = [];

  $request = "SELECT *
              FROM genres g
              INNER JOIN movies_genres m_g   ON g.id = m_g.genres_id
              INNER JOIN movies m            ON m_g.movies_id = m.id
              WHERE g.id = ?";

  $statement = $pdo->getInstance()->prepare($request);
  $statement->execute([$genre]);
  $data = $statement->fetchAll();

  // echo '<pre>';
  // var_dump($data);
  // echo '</pre>';

  if(count($data) > 0)
    return $data;

  return false;

}

function getDirector($pdo, $director) {

  $data = [];

  $request = "SELECT *
              FROM directors d
              INNER JOIN movies_directors m_d   ON d.id = m_d.directors_id
              INNER JOIN movies m               ON m_d.movies_id = m.id
              WHERE d.id = ?";

  $statement = $pdo->getInstance()->prepare($request);
  $statement->execute([$director]);
  $data = $statement->fetchAll();

  // echo '<pre>';
  // var_dump($data);
  // echo '</pre>';

  if(count($data) > 0)
    return $data;

  return false;

}


function getActor($pdo, $actor) {

  $data = [];

  $request = "SELECT *
              FROM actors a
              INNER JOIN actors_movies a_m   ON a.id = a_m.actors_id
              INNER JOIN movies m            ON a_m.movies_id = m.id
              WHERE a.id = ?";

  $statement = $pdo->getInstance()->prepare($request);
  $statement->execute([$actor]);
  $data = $statement->fetchAll();

  // echo '<pre>';
  // var_dump($data);
  // echo '</pre>';

  if(count($data) > 0)
    return $data;

  return false;

}



?>
