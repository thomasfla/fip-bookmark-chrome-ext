var p = document.createElement("p");
chrome.storage.sync.get('pl', function(result) 
    {
	var textFav ="<table> <tr><td>a</td><td>b</td></tr>  <tr><td>a</td><td>b</td></tr></table>"
        var rawFav = result.pl
	document.getElementById('idData').innerHTML = textFav
    });

