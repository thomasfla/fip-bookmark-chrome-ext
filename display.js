var p = document.createElement("p");
var buttonHtml = "<a href=\"deleteSong.html?testmessage\"><img src = \"dust.png\" style = \"width : 20px; height : 20px;\"></a>"


function deleteL()
{
	alert("arg.type");
}

chrome.storage.sync.get('pl', function(result) 
{
	var rawFav = ""
	rawFav = '<table border="1"><tr><th>Titre</th><th>Artiste</th><th>Album</th><th>Annee</th></tr>'+result.pl+"</table>"
	rawFav = rawFav.split("__").join("</td><td>");
	rawFav = rawFav.split(";new;").join("<tr><td>");
	rawFav = rawFav.split(";end;").join('</td><td>'+buttonHtml+'</td></tr>');
	document.getElementById('idData').innerHTML = rawFav
});

document.addEventListener('DOMContentLoaded', function () {
      document.getElementById('deleteLine').addEventListener('click', deleteL); 
}); 



