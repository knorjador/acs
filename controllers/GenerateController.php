
<?php

use Intervention\Image\ImageManagerStatic as Image;

use GifFrameExtractor\GifFrameExtractor;
use PHPImageWorkshop\ImageWorkshop;
use GifCreator\GifCreator;

require 'models/GenerateModel.php';

function ctrlGenerate($twig, $pdo, $posted) {

  $data = (array) json_decode($posted['data']);
  $max  = 20;

  if(empty($data['upText']) && empty($data['downText'])) {

    echo $twig->render('partials/message.html', ['message' => 'Il n\'y a pas de texte', 'emoji' => 'sad']);

  } else if(strlen($data['upText']) > $max || strlen($data['downText']) > $max) {

    $side = strlen($data['upText']) > $max ? 'haut' : 'bas';

    echo $twig->render('partials/message.html', ['message' => 'Texte du '.$side.' trop long', 'emoji' => 'confused']);

  } else {

    if(strpos($data['image'], 'giphy.com') !== false) {

      $tmpId = uniqId();

      copy($data['image'], 'tmp/'.$tmpId.'.gif');

      $src = 'tmp/'.$tmpId.'.gif';

      if (GifFrameExtractor::isAnimatedGif($src)) {

        $gfe             = new GifFrameExtractor();
        $frames          = $gfe->extract($src);
        $retouchedFrames = [];
        $args            = getArgs($data);

        foreach ($frames as $frame) {

          $frameLayer = ImageWorkshop::initFromResourceVar($frame['image']);

          $frameLayer->resizeInPixel(350, null, true);
          if(isset($args['upText'])) {
            $color = $str = substr($args['upColor'], 1);
            $text = ImageWorkshop::initTextLayer($args['upText'], 'assets/fonts/impact.ttf', $args['upSize'], $color, 0);
            $frameLayer->addLayerOnTop($text, 0, 20, 'MT');
          }
          if(isset($args['downText'])) {
            $color = $str = substr($args['downColor'], 1);
            $text = ImageWorkshop::initTextLayer($args['downText'], 'assets/fonts/impact.ttf', $args['downSize'], $color, 0);
            $frameLayer->addLayerOnTop($text, 0, 20, 'MB');
          }

          $retouchedFrames[] = $frameLayer->getResult();

        }

        $gc = new GifCreator();
        $gc->create($retouchedFrames, $gfe->getFrameDurations(), 0);

        file_put_contents('uploads/'.$tmpId.'.gif', $gc->getGif());

        unlink($src);

        $code = 2;

        $step = $tmpId.'.gif';

        $saveMeme = saveGifMeme($pdo, $step, $code);

        if(!$saveMeme['valid']) {

          echo $twig->render('partials/message.html', ['message' => 'Désolé,<br> une erreur est survenue', 'emoji' => 'thinking']);

        } else {

          echo $twig->render('partials/modal.html', ['memememe' => $saveMeme['uniqId'], 'extension' => 'gif']);

        }

      } else {

        echo $twig->render('partials/message.html', ['message' => 'Désolé,<br> une erreur est survenue', 'emoji' => 'thinking']);

      }

    } else {

      $data['image'] = getImageName($data['image']);

      if($data['image'] === 'create') {

        echo $twig->render('partials/message.html', ['message' => 'Hep là,<br> il faut choisir une image', 'emoji' => 'tongue']);

      } else {

        $memememe = makeImageMeme(getArgs($data));

        if(!$memememe['valid']) {

          echo $twig->render('partials/message.html', ['message' => 'Désolé,<br> une erreur est survenue', 'emoji' => 'thinking']);

        } else {

          $code = 1;

          $step = $memememe['uniqId'].'.jpg';

          $saveMeme = saveImageMeme($pdo, $data['image'], $step, $code);

          if(!$saveMeme['valid']) {

            echo $twig->render('partials/message.html', ['message' => 'Désolé,<br> une erreur est survenue', 'emoji' => 'thinking']);

          } else {

            echo $twig->render('partials/modal.html', ['memememe' => $saveMeme['uniqId'], 'extension' => 'jpg']);

          }

        }

      }

    }

  }

}

function getImageName(string $image): string {

  $slashExplode     = explode('/', $image);
  $end              = end($slashExplode);
  $extensionExplode = explode('.', $end);

  return $extensionExplode[0];

}

function getArgs(array $data): array {

  $image     = $data['image'];
  $upText    = $data['upText'];
  $upColor   = $data['upColor'];
  $upSize    = $data['upSize'];
  $downText  = $data['downText'];
  $downColor = $data['downColor'];
  $downSize  = $data['downSize'];

  if(empty($upText)) {

    $args = ['image' => $image, 'downText' => $downText, 'downColor' => $downColor, 'downSize' => $downSize];

  } else if(empty($downText)) {

    $args = ['image' => $image, 'upText' => $upText, 'upColor' => $upColor, 'upSize' => $upSize];

  } else {

    $args = [

      'image'     => $image,
      'upText'    => $upText,
      'upColor'   => $upColor,
      'upSize'    =>$upSize,
      'downText'  => $downText,
      'downColor' => $downColor,
      'downSize'  => $downSize

    ];

  }

  return $args;

}

function makeImageMeme(array $args): array {

  $image    = $args['image'];
  $memememe = Image::make('assets/images/'.$image.'.jpg');
  $font     = 'assets/fonts/impact.ttf';

  if(isset($args['upText'])) {

    $upColor = $args['upColor'];
    $upSize  = $args['upSize'];

    $memememe->text($args['upText'], 512, 60, function($details) use($font, $upColor, $upSize) {

      $details->file($font);
      $details->size($upSize * 2);
      $details->color($upColor);
      $details->align('center');
      $details->valign('top');

    });

  }

  if(isset($args['downText'])) {

    $downColor = $args['downColor'];
    $downSize  = $args['downSize'];

    $memememe->text($args['downText'], 512, 650, function($details) use($font, $downColor, $downSize) {

      $details->file($font);
      $details->size($downSize * 2);
      $details->color($downColor);
      $details->align('center');
      $details->valign('top');

    });

  }

  $step     = $image.'_';
  $uniqId = uniqid($step);

  try {

    $saved = $memememe->save('uploads/'.$uniqId.'.jpg');

    return ['valid' => true, 'uniqId' => $uniqId];

  } catch (Exception $e) {

    // var_dump($e->getMessage());

    return ['valid' => false];

  }

}

?>
