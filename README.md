# IRLS-audio-aligner-interface
Node module interface for accessing the irls-audio-aligner service.  
**This is a module wrapper for a proprietary webservice. To use, you will need an API endpoint URL and an API Key.**

 

### Install the interface module into your node project with:
``` 
npm install --save irls-audio-aligner-interface
```

### Example implementation:
``` Javascript
//create the client object
var faClient = require('irls-audio-aligner-interface');

//configure the client 
faClient.userKey='91ea6751-8cb9-4078-afee-59cd90bdd206';
faClient.server='192.168.0.10';

// create an alignment task with client
var job = { // required
              job_title: "My Book of Foo-Bar",
              // required - path/url to text file
              text: "https://dl.dropboxusercontent.com/u/183568/gdm/gdm.html",
              // required - path/url to audio file
              audio: "https://dl.dropboxusercontent.com/u/183568/gdm/gdm.ogg", 
              // UUID for job, if blank one will be generated
              job_id: "1b99dbdb-c4f8-412c-8f11-87be7adaa5b8",
              // if blank defaults to "en"
              language: "en-gb",              
              // The class or id containing aligned text. Blank defaults to "body"
              parse_id: ".ocean" 
            }

faClient.load(job);   
``` 

### After a job is loaded a series of existing scripts can be run on the text:
``` Javascript
// Gutenburg cleanup
faClient.parse('gtb');
// or raw text markup adding <html><header><body><p> tags to unformated text
faClient.parse('raw');
// insert spans and IDs required aeneas for multipass alignment
faClient.parse('mp');

```

### Additional parcing scripts can be added. 
``` Javascript
var foo = { name: "isBahai",
            path: __dirname+"/scripts-folder/isbahai.js"
          }
// using the new script         
faClient.addScript(foo);

// now you can use it:
faClient.parse('isBahai');
```

### If you need access to text to manually edit
``` Javascript
// retrieve the current state of the text:
var newText = faClient.getText();

// and replace the text
faClient.setText(newText);
``` 


