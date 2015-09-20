/*jslint plusplus: true*/
/*jshint onedef: true*/
/*jshint onevar: true*/
/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    "use strict";
    
    if (parseInt(getKey("bool"), 10) === 1) {
        var numCoins = parseInt(Math.random * 10, 10), i = 0, img, img2, img3, randX, randY, coin = document.getElementById("coin"),
            car = document.getElementById("car");

        img = document.createElement("img");
        img.id = "coin";
        img.src = chrome.extension.getURL("Images/Coin.png");
        document.getElementById("p-logo").appendChild(img);

        img2 = document.createElement("img");
        img2.id = "coin2";
        img2.src = chrome.extension.getURL("Images/Coin.png");
        document.getElementById("p-logo").appendChild(img2);

        img3 = document.createElement("img");
        img3.id = "coin3";
        img3.src = chrome.extension.getURL("Images/Coin.png");
        document.getElementById("p-logo").appendChild(img3);

        function coinChange(id) {
            randX = Math.floor(Math.random() * screen.width) - 32;
            randY = Math.floor(Math.random() * screen.height) - 32;

            $(id).css({
                "margin-top": randY,
                "margin-left": randX
            });
        }

        coinChange(img);
        coinChange(img2);
        coinChange(img3);

        function detectCollision(id) {

            var carYPos, carXPos, coinYPos, coinXPos;

            var interval = window.setInterval(function () {
                carYPos = $("#car").offset().top;
                carXPos = $("#car").offset().left;
                coinYPos = $(id).offset().top;
                coinXPos = $(id).offset().left;

                if ((carXPos > coinXPos - 16 && carXPos < coinXPos + 16) && (carYPos > coinYPos - 16 && carYPos < coinYPos + 32)) {
                    $(id).remove();

                    KeyPlusPlus("coins");
                    var x = getKey("coins");
                }
            }, 1);
        }

        detectCollision(img);
        detectCollision(img2);
        detectCollision(img3);
    }
});
    
    