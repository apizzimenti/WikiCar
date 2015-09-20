/*jslint plusplus: true*/
/*jshint onedef: true*/
/*jshint onevar: true*/
/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    "use strict";
    
    var button = document.createElement("button");
    button.id = "1";
    
    if (parseInt(getKey("bool"), 10) === 1) {
        button.innerHTML = "quit";
        document.getElementById("p-logo").appendChild(button);
        button.id = "quit";
    } else {
        button.innerHTML = "play";
        document.getElementById("p-logo").appendChild(button);
        button.id = "1";
    }
    
    $("#1").click(function () {
        UpdateKey("bool", 1);
        location.reload();
        TimerStore();
    });
    
    $("#quit").click(function () {
        UpdateKey("bool", 0);
        location.reload();
        window.alert("You played for: " + Math.floor(TimerGet()/1000) + " seconds.\nYou earned : " + score() + " points.");
        UpdateKey("time", null);
        UpdateKey("univar", null);
    });
});