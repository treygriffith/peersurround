var express = require('express');
var Filequeue = require('filequeue');

var fq = new Filequeue();
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {

	fq.readFile(__dirname + '/views/index.html', {encoding: 'utf8'}, function(err, str) {

		if(err) {
			res.send(err);
			return;
		}

		res.send(str);
	});
});

app.listen(process.env.PORT || 3000);

console.log("listening on "+(process.env.PORT || 3000))