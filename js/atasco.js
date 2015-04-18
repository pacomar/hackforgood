/**
 * Created by Paco on 17/4/15.
 */

function color(intColor){
    var color = "red";
    switch (intColor) {
        case "0":
            color = "red";
            break;
        case "1":
            color = "yellow";
            break;
        case "2":
            color = "green";
            break;
    }
    return color;
}

function updateAtasco( ) {
    $.get( "http://api.thingspeak.com/channels/34383/feeds.json?results=1", function( data ) {
        var colorI = color(data.feeds[0].field2);
        var colorR = color(data.feeds[0].field3);
        var colorD = color(data.feeds[0].field4);
        $("#flechaIzquierda").css("color",colorI);
        $("#flechaRecta").css("color",colorR);
        $("#flechaDerecha").css("color",colorD);
    });
}

$(document).ready(function() {
    updateAtasco();
    setInterval('updateAtasco()', 5000);
});
