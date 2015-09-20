/*jslint plusplus: true*/
/*jshint onedef: true*/
/*jshint onevar: true*/
/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    "use strict";
    
    if (parseInt(getKey("bool"), 10) === 1) {
        var pages = ["Herbert_Hoover", "Wu-Tang_Clan", "Instruction_set", "Auto_racing", "Vancouver_Canucks", "Heavy_water_reactor", "Ivory", "Doublemint", "Michel_Foucault", "Halloween", "Aircraft_carrier", "Holland_Lop", "Canard_(aeronautics)", "Rebar"],
            currentPage = window.location;

        if (parseInt(getKey('univar'), 10) === 2) {
            var endpoint = "https://en.wikipedia.org/wiki/" + pages[Math.floor(Math.random() * pages.length)];
            window.alert("Your end page is: " + endpoint);
            UpdateKey('endpt', endpoint);
            KeyPlusPlus('univar');
        }
    }
});