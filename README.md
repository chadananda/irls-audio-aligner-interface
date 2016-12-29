# irls-audio-aligner-interface
Node module interface for accessing the irls-audio-aligner service

### To use, you will need an API endpoint URL and an API Key

### Simply install the interface module with:
``` 
npm install --save irls-audio-aligner-interface
```

### Example implementation of IRLS Aligner Service:
``` Javascript
// location of Aligner Service and API key
var API_URL = '';
var API_KEY = '';

// sample book and audio playlist
var bookURL = 'https://dl.dropboxusercontent.com/u/382588/ocean2.0/Library/books-work/4.%20proofed-done/abd-tn-en.html';
var audioURL = 'https://ocean-books-audio.s3.amazonaws.com/abd-tn-en-bahiyyih-nakhjavani.m3u';

var fs = require('fs');
var path = require('path');

var aligner = require('irls-audio-aligner-interface').connect(API_URL, API_KEY); 
var parser = require('book-parser'); 
var terms = require('bahai-terms');

var outputFile = path.basename(sourceBookURL);
outputFile = outputFile.substr(0, outputFile.lastIndexOf(".")) + ".json";
// parse HTML file from URL with a function to modify content (replacing each term with IPN equivilant) 
parser.parseOcn(bookURL, terms.replaceWithIPN) 
  .then(aligner.align(this.blocks, audioURL))
  .then(
    fs.writeFile(outputFile, JSON.stringify({
      source: bookURL, audioSource: audioURL, 
      alignData: this.alignData
    }))); 
  );
```
