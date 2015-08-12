var p = document.createElement("p");
chrome.storage.sync.get('pl', function(result) 
    {
	var rawFav = ""
	rawFav = '<table border="1"><tr><th>Titre</th><th>Artiste</th><th>Album</th><th>Annee</th></tr>'+result.pl+"</table>"
	rawFav = rawFav.split("__").join("</td><td>");
	rawFav = rawFav.split(";new;").join("<tr><td>");
	rawFav = rawFav.split(";end;").join("</td></tr>");
	document.getElementById('idData').innerHTML = rawFav
    });

