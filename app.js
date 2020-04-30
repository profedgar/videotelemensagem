var express = require('express');
var app = express();

app.get('/', function (req, res) {
    const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);


var message="[in]drawtext=text='De Edgar' :fontfile='filxgirl.ttf':fontsize=60:r=60:x=(w-tw)/2: y=h-(6*lh):fontcolor=white:enable='between(t,7,20)',"
message+="drawtext=text='Para Seu amor Célia' :fontfile='filxgirl.ttf':fontsize=60:r=60:x=(w-tw)/2: y=h-(4*lh):fontcolor=white:enable='between(t,7,20)',"
message+="drawtext=text='dedico este vídeo para o maior amor da minha vida' :fontfile='filxgirl.ttf':fontsize=40:r=60:x=(w-tw)/2: y=h-(2*lh):fontcolor=white:enable='between(t,7,20)'[out]"

ffmpeg({ source: "homenagem2.mp4" })

     //.withSize('320x240')
     // Add custom video filters
     //.withVideoFilter('size=iw*1.5:ih/2')
     .withVideoFilter(message)
    .on('error', function(err) {
        console.log('An error occurred: ' + err.message);
    })
    .on('end', function() { 
        console.log(message);
    })
    .saveToFile("novovideo3.mp4");



  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
