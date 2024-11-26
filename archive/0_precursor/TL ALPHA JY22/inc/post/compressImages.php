<?php

require '../../vendor/autoload.php';

/*
try {
    optimizeImage('1');
} catch (ImagickException $e) {
    echo 'caught error: ' . $e;
}
*/

try {
    optimizeAudio('1');
} catch (Exception $e) {
    echo 'caught error: ' . $e;
}

function optimizeAudio(int $projectId)
{
    $ffmpeg = FFMpeg\FFMpeg::create();

    // $audio = $ffmpeg->open('input.mp3');

    // $format = new FFMpeg\Format\Audio\Mp3();
    // $format->on('progress', function ($audio, $format, $percentage) {echo "$percentage % transcoded";});

    // $format->setAudioChannels(2)->setAudioKiloBitrate(128);

    // $audio->save($format, 'output.flac');
}

/**
 * @throws ImagickException
 */
function optimizeImage(int $projectId)
{
    $filepathProject = $_SERVER['DOCUMENT_ROOT'] . '/data/' . $projectId . '/';
    $filepathOriginal = getFilenameWithExtension($filepathProject . 'art');;
    $filepath100 = $filepathProject . 'art100.jpg';
    $filepath1000 = $filepathProject . 'art1000.jpg';

    $image = new Imagick($filepathOriginal);
    $image->resizeImage(100, 100, imagick::FILTER_UNDEFINED, 0.1, false, false);
    $image->setImageFormat("jpeg");
    file_put_contents($filepath100, $image);

    $image = new Imagick($filepathOriginal);
    $image->resizeImage(1000, 1000, imagick::FILTER_UNDEFINED, 0.1, false, false);
    $image->setImageFormat("jpeg");
    file_put_contents($filepath1000, $image);
}

/**
 * This function requires an argument containing a path with no extension.
 * It will return the path (with its extension) of the first file it finds that matches the given path
 */
function getFilenameWithExtension(string $path): bool|string
{
    $files = glob($path . '.*');
    if (count($files) > 0) {
        foreach ($files as $file) {
            return $path . '.' . pathinfo($file)["extension"];
        }
    }
    return false;
}