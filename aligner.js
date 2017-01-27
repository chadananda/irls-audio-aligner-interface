
var path = require('path');
var fs = require('fs');
var cheerio = require('cheerio');
var request = require('request');



var aligner = function(){ 
	var userKey, 
			server,
			scripts={	"raw": "./scripts/raw.js",
								"mp": "./scripts/mp.js",
								"isBahai": "./scripts/isBahai.js"
							 },
			job={};
};

aligner.prototype.load = function (j) {};

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


exports.aligner = new aligner;