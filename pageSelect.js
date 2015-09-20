/*jslint plusplus: true*/
/*jshint onedef: true*/
/*jshint onevar: true*/
/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    "use strict";
    
    if (parseInt(getKey("bool"), 10) === 1) {
        var pages = ["Porta_Alpina", "Hegemony", "Leonardo_da_Vinci", "Lesotho", "Cascading_Style_Sheets", "Meme", "Trilobite", "Gallium", "Anthony", "Lil_B", "Glockenspiel", "Invisible_hand", "Seven_Years%27_War", "Imaginary_number", "Graham%27s_number", "Adventures_of_Huckleberry_Finn", "Vaio", "Essay", "Cactus", "Omega_Point", "William_Shakespeare", "Iris_(anatomy)", "Arctic_Ocean", "Quark", "Quasar", "Spanish_language", "Triple_point", "Larch"],
            endPage = document.getElementById("endPage"),
            swag = "I'm a string",
            sweg = "Same";

        function getPage() {
            return ("https://en.wikipedia.org/wiki/" + pages[Math.floor(Math.random() * pages.length)]);
        }

        if (window.location.href === getKey("endpt")) {
            UpdateKey("bool", 0);
            location.reload();
            window.alert("Congratulations! You won.\nYou played for: " + Math.floor(TimerGet()/1000) + " seconds.\nYou earned : " + score() + " points.");
            UpdateKey("time", null);
        }

        swag = getPage();
        sweg = getPage();
        while (swag === sweg) {
            sweg = getPage();
        }
        KeyPlusPlus("univar");

        if (parseInt(getKey("univar"), 10) === 1) {
            window.location.href = swag;
            KeyPlusPlus("univar");
        }
        //endPage.console.log(sweg);
        //document.alert("hhhh");
    }
});