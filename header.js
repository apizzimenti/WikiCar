/*jslint plusplus: true*/
/*jshint onedef: true*/
/*jshint onevar: true*/
/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    "use strict";
    
    if (parseInt(getKey("bool"), 10) === 1) {
        var div = document.createElement("div"), p1 = document.createElement("p"), p2 = document.createElement("p"),
            p3 = document.createElement("p");
        div.id = "notif";
        p1.id = "pts";
        p2.id = "time";
        p3.id = "location";
        
        p1.innerHTML = 0;
        p2.innerHTML = 0;

        document.getElementById("p-logo").appendChild(div);
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);

        window.setInterval(function () {
            p1.innerHTML = score();
            p2.innerHTML = Math.floor(TimerGet() / 1000);
        }, 1000);

        p3.innerHTML = getKey("endpt");
    }
});