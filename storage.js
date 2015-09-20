/*jslint plusplus: true*/
/*jshint onedef: true*/
/*jshint onevar: true*/
/*jslint browser: true*/
/*global $, jQuery, alert*/

function UpdateKey(keyword, val) {
    sessionStorage.setItem(keyword, val);
}

function getKey(keyword) {
    var callback = sessionStorage.getItem(keyword);
    return callback;
}

function KeyPlusPlus(keyword) {
    if (sessionStorage.getItem(keyword) === null) {
        sessionStorage.setItem(keyword, 0);
    }
    sessionStorage.setItem(keyword, parseInt(sessionStorage.getItem(keyword), 10) + 1);
}

function TimerStore() {
    sessionStorage.setItem("time", new Date().getTime());
}

function TimerGet() {
    var time = (new Date().getTime()) - sessionStorage.getItem("time");
    return time;
}

function score() {
    var scor = Math.round((parseInt(sessionStorage.getItem("coins"), 10) * 100000) / TimerGet());
    return scor;
}