// Load Express and Request modules for use with Node.js
var express = require('express');
var app = express();
//var fetch = require('node-fetch');
var request = require('request');

// Set the port the local server will listen through for requests
app.set('port', 3000);

// Add headers to allow CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// =============================================================================================
// Steam retrieval

// Retrieve JSON file containing all {appid, name} key-value pairs for all public apps on Steam.
app.get('/getapplist', function(req, res) {
    var qParams = [];
    for (var p in req.query) {
        qParams.push({'name':p, 'value':req.query[p]});
    }

    var url = 'https://api.steampowered.com/ISteamApps/GetAppList/v2/';

    request(url, function(err, response, body) {
		if(!err && response.statusCode < 400) {
			//console.log(body);
			res.send(body);
		}
	});	
});

// Retrieve game info by app id:
app.get('/getgameinfo', function(req, res) {
    var qParams = [];
    for (var p in req.query) {
        qParams.push({'name':p, 'value':req.query[p]});
    }

    var url = 'https://store.steampowered.com/api/appdetails?appids=' + qParams[0].name;
    request(url, function(err, response, body) {
		if(!err && response.statusCode < 400) {
            var data = JSON.parse(body);
            console.log("\nName:\n%s" + 
                        "\n\nApp ID:\n%s" + 
                        "\n\nIs Free:\n%s" +
                        "\n\nRequired Age:\n%s" +
                        "\n\nDescription:\n%s", 
                        data[qParams[0].name].data.name,
                        data[qParams[0].name].data.steam_appid,
                        data[qParams[0].name].data.is_free,
                        data[qParams[0].name].data.required_age,
                        data[qParams[0].name].data.detailed_description);

			res.send(body);
		}
	});
});

// =============================================================================================
// 404/500 error handling

app.use(function(req,res) {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});
  
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});

// =============================================================================================
// Listener on localhost:3000

const hostname = '127.0.0.1';
app.listen(app.get('port'), hostname, function() {
    console.log('Express started on http://' + hostname + ':' + app.get('port') + '; press Ctrl-C to terminate.');
});