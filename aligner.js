
var path = require('path');
var fs = require('fs');
var cheerio = require('cheerio');
var request = require('request');

var aligner = function(){ 
	var userKey, 
			server,
			apiVersion,
			scripts={	"raw": "./scripts/raw.js",
								"mp": "./scripts/mp.js",
								"isBahai": "./scripts/isBahai.js"
							 },
			job={};
};

/* create an alignment task with client
var job = {	// required
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
*/  
aligner.prototype.load = function (j) {
	if(j.job_title && j.text && j.audio){
		// set defaults
		if(!j.job_id){ j.job_id = UUIDv4;}
	 	if(!j.language){j.language = "en";}
	 	if(!j.parse_id){j.parse_id = "body";}
	 	// update the aligner 
	 	this.job = j;
		return this.job.job_id;
	} else {
		return 0;
	}
	var UUIDv4 = function b(a){return a?(a^Math.random()*16>>a/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,b)}
};

// provides previously loaded text
aligner.prototype.getText = function () {};

// replaces previously loaded text 
aligner.prototype.setText = function (t) {};

// sends a job to the aeneas server for forced alignment
aligner.prototype.process = function () {};

// retrieves aligment map from aeneas server
aligner.prototype.getMap = function () {};

// runs one of the parcing scripts on text
aligner.prototype.parce = function (s) {};

// register additional scripts
// requires object {name: "foo", path: "./bar-script.js"}
aligner.prototype.addScript = function (s) {};

// runs scripts on audio file
//aligner.prototype.normalize = function () {};

aligner = new aligner;



