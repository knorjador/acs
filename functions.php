
<?php

/**** **** **** **** **** **** **** ****
  > GLOBALS
**** **** **** **** **** **** **** ****/

define('MIN', 1);
define('MAX', 10);

/**** **** **** **** **** **** **** ****
  > COMMON
**** **** **** **** **** **** **** ****/

function multiply(int $multiplier): string {

  $table = '<h6>Table de '.$multiplier.'</h6>';

  for($i = MIN; $i <= MAX; $i++)
    $table .= '<p><b>'.$multiplier.' x '.$i.' = <span class="s-result">'.$i * $multiplier.'</span></b></p>';

  return $table;

}

/**** **** **** **** **** **** **** ****
  > RENDER
**** **** **** **** **** **** **** ****/

function render(string $exercise): string {

  switch($exercise) {

    case '1':
      return renderTable();
      break;

    case '2':
      return renderSelect();
      break;

    case '3':
      return renderCheckboxes();
      break;

    case '4':
     return renderSelect();
     break;

    default:
      return false;
      break;

  }

}

function renderTable(): string {

  return '

    <div class="col s10 offset-s1 l8 offset-l2 exercise">
      '.multiply(3).'
    </div>

  ';

}

function renderSelect(): string {

  return '

      <div class="col s10 offset-s1 l8 offset-l2 exercise">
        <div class="d-field">
          <div class="input-field col s6 m4 xl2">
            '.selectMultiplier().'
          </div>
          <button class="btn waves-effect waves-light" type="submit">Valider</button>
        </div>
      </div>

  ';

}

function renderCheckboxes(): string {

  return '

      <div class="col s10 offset-s1 l8 offset-l2 exercise">
        <p class="p-choices">Choisir Tables</p>
        <div class="input-field col s12">
          '.checkboxesMultiplier().'
        </div>
        <button class="btn waves-effect waves-light btn-top" type="submit">Valider</button>
      </div>

  ';

}

function selectMultiplier(): string {

  $select = '<select>
              <option value="" disabled selected>Choisir Table</option>';

  for($i = MIN; $i <= MAX; $i++)
    $select .= '<option value="'.$i.'">Table de '.$i.'</option>';

  return $select .= '</select>';

}

function checkboxesMultiplier(): string {

  $checkboxes = '';

  for($i = MIN; $i <= MAX; $i++) {

    $checkboxes .= '

      <label>
        <input name="checkbox" value="'.$i.'" type="checkbox">
        <span>'.$i.'</span>
      </label>

    ';

  }

  return $checkboxes;

}

/**** **** **** **** **** **** **** ****
  > DATA
**** **** **** **** **** **** **** ****/

function getData($exercise, $data) {

  switch($exercise) {

    case '2':
      return dataSelect($data);
      break;

    case '3':
      return dataCheckboxes($data);
      break;

    case '4':
     return dataGame($data);
     break;

    default:
      return false;
      break;

  }

}

function dataSelect(string $table) {

  if(intval($table)) {

    return '

      <div class="d-content">
        '.multiply($table).'
      </div>

    ';

  }

  return false;

}

function dataCheckboxes(array $tables): string {

  $data = '<div class="d-content">
            <div class="d-tables">';

  foreach($tables as $table)
    $data .= '<div>'.multiply($table).'</div>';

  return $data .= '</div></div>';

}

function dataGame($data) {

  if(gettype($data) == 'string')
    return displayGame($data);
  else
    return displayScore($data);

}

function displayGame(string $table) {

  if(intval($table)) {

    $numbers  = getNumbers();
    $survey   = getQuestions($table, $numbers);

    return $survey;

  }

  return false;

}

function getNumbers(): array {

  $numbers  = [];

   while(count($numbers) < 5 ) {

     $rand            = mt_rand(1, 10);
     $numbers[$rand]  = $rand;

   }

  sort($numbers);

  return $numbers;

}

function getQuestions(string $multiplier, array $numbers) {

  $survey = '<div class="d-content questions" data-table="'.$multiplier.'">';

  foreach($numbers as $key => $value) {

    $survey .= '<div class="col s6 m4 l2 d-question">
                  <div class="d-field input-field">
                    <span class="question">'.$value.' x '.$multiplier.' =</span>
                    <input class="response" type="text" data-number="'.$value.'">
                  </div>
                </div>';

  }

  return $survey .= '<button id="score" class="btn waves-effect waves-light" type="submit">Score</button></div>';

}

function displayScore($data) {

  $table    = $data->table;
  $values   = $data->values;
  $length   = count($values);
  $score    = 0;
  $errors   = [];

  for($i = 0; $i < $length; $i++) {

    if(($values[$i]->number * $table) == $values[$i]->response) {

      array_push($errors, false);

      $score++;

    } else {

      array_push($errors, true);

    }

  }

  $score === 5 ? $sound = 'win' : $sound = 'lose';

  return [

      'errors'  => $errors
    , 'score'   => '<p class="p-score">'.$score.' / '.$length.'</p>'
    , 'sound'   => $sound

  ];

}

?>
