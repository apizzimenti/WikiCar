/*jslint plusplus: true*/
/*jshint onedef: true*/
/*jshint onevar: true*/
/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    "use strict";
    if (parseInt(getKey("bool"), 10) === 1) {
        $(document).keypress(function (event) {
            if (event.keyCode === 67 || event.keyCode === 99) {
                $("#content").css("cursor", "default");
            }
        });
    } else {
        $("#content").css("cursor", "default");
    }
});