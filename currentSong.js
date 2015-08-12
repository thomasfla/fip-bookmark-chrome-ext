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
var visuel = json.current.song.visuel.small

var p = document.createElement("p");
document.getElementById('idCurrentSong').innerHTML = "<img src="+visuel+"/>"+artiste

