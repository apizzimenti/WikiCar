/*jslint plusplus: true*/
/*jshint onedef: true*/
/*jshint onevar: true*/
/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    "use strict";
    
    $(document).keypress(function (event) {
        if (event.keyCode === 67 || event.keyCode === 99) {
            $("body").css("cursor", "default");
        }
    });

});