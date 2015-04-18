/**
 * Created by Paco on 17/4/15.
 */

function updateTemp( ) {
    $.get( "http://api.thingspeak.com/channels/34383/feeds.json?results=1", function( data ) {
        var temp = data.feeds[0].field1;
        $("#temperatura").html(temp + "°");
    });
}

$(document).ready(function() {
    updateTemp();
    setInterval('updateTemp()', 5000);
});
