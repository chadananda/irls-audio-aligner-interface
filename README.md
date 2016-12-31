# IRLS-audio-aligner-interface
Node module interface for accessing the irls-audio-aligner service.  
**This is a module wrapper for a proprietary webservice. To use, you will need an API endpoint URL and an API Key.**

 

### Install the interface module into your node project with:
``` 
npm install --save irls-audio-aligner-interface
```

### Example implementation:
``` Javascript
// location of Aligner Service and API key
var API_URL = '';
var API_KEY = '';

// sample book and audio playlist
var bookURL = 'https://dl.dropboxusercontent.com/u/382588/ocean2.0/Library/books-work/4.%20proofed-done/abd-tn-en.html';
var audioURL = 'https://ocean-books-audio.s3.amazonaws.com/abd-tn-en-bahiyyih-nakhjavani.m3u';

var fs = require('fs');
var path = require('path');
var request = require('pro-request'); // request module with promises

var aligner = require('irls-audio-aligner-interface').connect(API_URL, API_KEY); 
var parser = require('ocnparse'); 
var terms = require('bahai-terms');

// parse HTML file from URL with a function to modify content (replacing each term with IPN equivilant) 
request.get(bookURL)
  .then( 
    // parse book and replace Baha'i terms with IPN Tokens
    var data = parser.tokenize(this.data).map(terms.replaceWithIPN)
    data = parser.blockLevelRebuild(source); 
    
    // put everything together into a task object 
    var task = {
      lang: 'en-un', 
      voice: 'mail',
      source: data,
      audioSource: audioURL,
      mapPoints: {}
    };
    // send task to alignment service
    return aligner.alignRequest(task);
  )
  .then(
    // save the alignment JSON file with the source file name
    var outputFile = path.basename(bookURL).replace(/(.*?)\.[a-z]{3,4}$/, '$1.json');
    return fs.writeFile(outputFile, JSON.stringify({
      source: bookURL, audioSource: audioURL, 
      alignData: this.alignData
    }))
  )
  .then(
    console.log('Alignment file complete. Written out as "'+outputFile+'"');
  ); 
);
```

### Todo:

* Select module for managing API request promises
   * Fetch looks good     
* Select module for managing passwords from config or env
* Create Parser and Terms modules
* Publish test iteration of service for testing