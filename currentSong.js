function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}


var httpRaw=httpGet("http://www.fipradio.fr/sites/default/files/import_si/si_titre_antenne/FIP_player_current.json")
var json = JSON.parse(httpRaw);
var album= json.current.song.titreAlbum
var titre = json.current.song.titre
var artiste = json.current.song.interpreteMorceau
var annee = json.current.song.anneeEditionMusique
var visuel = "http://is4.mzstatic.com/image/thumb/Music6/v4/cd/97/0a/cd970adf-ed41-8993-1a4f-8ac894d14683/source/100x100bb.jpg"

var p = document.createElement("p");
document.getElementById('idCurrentSong').innerHTML = 
"<table><tr><td>"+"<img src="+visuel+"/>"+
"</td><td><table><tr><td><b><font size = '3'>"+titre+"</font></b></td></tr><tr><td><font size = '2'>"+
artiste+"</font></td></tr><tr><td><font size = '2'>"+album+"</font></td></tr><tr><td><font size = '1'>"+annee+"</font></td></tr></table></td></tr></table>"

