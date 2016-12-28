# irls-audio-aligner-interface
Node module interface for accessing the irls-audio-aligner service

### To use, you will need an API endpoint URL and an API Key

### Simply install the interface module with:
``` 
npm install --save irls-audio-aligner-interface
```

### Example implementation of IRLS Aligner Service:
``` Javascript
var alignerAPIURL = '';
var alignerAPIKEY = '';

var sourceBookURL = 'https://dl.dropboxusercontent.com/u/382588/ocean2.0/Library/books-work/4.%20proofed-done/abd-tn-en.html';
var sourceAudioURL = 'https://ocean-books-audio.s3.amazonaws.com/abd-tn-en-bahiyyih-nakhjavani.m3u';

var consoleLogResults = TRUE;
var fs = require('fs');
var path = require('path');

var aligner = require('irls-audio-aligner-interface').connect(alignerAPIURL, alignerAPIKEY); 
var parser = require('book-parser'); 
var terms = require('bahai-terms');

var outputFile = path.basename(sourceBookURL);
outputFile = outputFile.substr(0, outputFile.lastIndexOf(".")) + ".json";
// parse HTML file from URL with a function to modify content (replacing each term with IPN equivilant) 
// pass result to aligner with console logging of any progress
parser.parseOcn(sourceBookURL, terms.replaceWithIPN) 
  .then(aligner.align(this.blocks, sourceAudioURL, consoleLogResults))
  .then(
    fs.writeFile(outputFile,JSON.stringify({
      source: sourceBookURL, audioSource: sourceAudioURL, 
      alignData: this.alignData
    }))); 
  );
```
