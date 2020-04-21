// =============================================================================================
// Add event listeners

document.addEventListener('DOMContentLoaded', populatePairsOnLoad);
document.addEventListener('DOMContentLoaded', bindSubmissionButton);

// =============================================================================================
// Global

var steamApps = []; // {name: appid, ... }

// =============================================================================================
// Steam retrieval

function populatePairsOnLoad() {
    var homeURL = "http://localhost:3000/getapplist";
    var req = new XMLHttpRequest();

    req.open("GET", homeURL, true);
    req.addEventListener('load', function() {
        if(req.status>= 200 && req.status<400) {
            var response = JSON.parse(req.responseText);
            //console.log("Responded with: \n" + response.applist.apps[0].name + "json length: " + response.applist.apps.length);
            
            for (i = 0; i < response.applist.apps.length; ++i)
            {
                steamApps[response.applist.apps[i].name] = response.applist.apps[i].appid;
            }
            console.log(steamApps["NPC Creatures for 3D Visual Novel Maker"]);
        } else {
            console.log("Error in network request: " + req.statusText);
        }
    });
    req.send();
}

function bindSubmissionButton() {
    document.getElementById('search-button').addEventListener('click', function(event) {
        var homeURL = "http://localhost:3000/getgameinfo/?"
        var userInput = steamApps[document.getElementById('search-input').value];
        console.log("userInput = " + userInput);
        var newURL = homeURL+userInput;
        var req = new XMLHttpRequest();

        req.open("GET", newURL, true);
        req.addEventListener('load', function() {
            if(req.status>= 200 && req.status<400) {
                console.log("Success; look at Node.js terminal");
            } else {
				console.log("Error in network request: " + req.statusText);
			}
        });
        req.send(null);
	    event.preventDefault();
    });
}