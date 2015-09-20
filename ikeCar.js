/*jslint plusplus: true*/
/*jshint onedef: true*/
/*jshint onevar: true*/
/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    "use strict";
    
    
    if (parseInt(getKey("bool"), 10) === 1) {
        var img = document.createElement("img"), randX, randY;
        img.src = chrome.extension.getURL("Images/Car N.png");
        img.id = "car";
        document.getElementById("p-logo").appendChild(img);

        var $car = $("#car"),
            carspeed = 0,
            speed = 5,
            cardirect = 1,
            margintop = 0,
            marginleft = 0,
            carryS = 0,
            carryD = [0, 0, 0, 0, 0, 0, 0, 0],
            greaterD = 0,
            drift = 2,
            x = 0,
            car = document.getElementById("car"),
            width = window.innerWidth,
            height = document.innerHeight;

        $car.css({ "margin-top": "-15px",
                    "margin-left": "30px"
                 });

        $(document).keypress(function (event) {
            carspeed = 0;
            switch (event.keyCode) {
            case 115:
            case 87://S
                carspeed = -speed;
                break;
            case 119:
            case 83://W
                carspeed = speed;
                break;
            case 100:
            case 65://A
                if (cardirect <= 7) {
                    cardirect += 1;
                    break;
                } else {
                    cardirect = 1;
                    break;
                }
            case 97:
            case 68://D
                if (cardirect >= 2) {
                    cardirect -= 1;
                    break;
                } else {
                    cardirect = 8;
                    break;
                }
            case 101:
            case 69://E
                speed += 10;
                break;
            case 113://Q
                speed -= 10;
                break;
            default:
                break;
            }
            switch (cardirect) {
            case 1:
                margintop -= carspeed;
                carryD[0] += 2;
                car.src = chrome.extension.getURL("Images/Car N.png");
                break;
            case 2:
                margintop -= 0.7 * carspeed;
                marginleft += 0.7 * carspeed;
                carryD[1] += 2;
                car.src = chrome.extension.getURL("Images/Car NE.png");
                break;
            case 3:
                marginleft += carspeed;
                carryD[2] += 2;
                car.src = chrome.extension.getURL("Images/Car E.png");
                break;
            case 4:
                margintop += 0.7 * carspeed;
                marginleft += 0.7 * carspeed;
                carryD[3] += 2;
                car.src =  chrome.extension.getURL("Images/Car SE.png");
                break;
            case 5:
                margintop += carspeed;
                carryD[4] += 2;
                car.src = chrome.extension.getURL("Images/Car S.png");
                break;
            case 6:
                margintop += 0.7 * carspeed;
                marginleft -= 0.7 * carspeed;
                carryD[5] += 2;
                car.src = chrome.extension.getURL("Images/Car SW.png");
                break;
            case 7:
                marginleft -= carspeed;
                carryD[6] += 2;
                car.src = chrome.extension.getURL("Images/Car W.png");
                break;
            case 8:
                margintop -= 0.7 * carspeed;
                marginleft -= 0.7 * carspeed;
                carryD[7] += 2;
                car.src = chrome.extension.getURL("Images/Car NW.png");
                break;
            }

            greaterD = 1;
            for (x = 0; x < 8; x++) {
                if (carryD[x] < 0) {
                    carryD[x] = 0;
                } else if (carryD[x] > 12) {
                    carryD[x] = 12;
                }
                if (carryD[x] > greaterD) {
                    greaterD = carryD[x];
                }
            }

            for (x = 0; x < 8; x++) {
                if (carryD[x] === greaterD) {
                    greaterD = x + 1;
                    break;
                }
            }
            switch (greaterD) {
            case 1:
                margintop -= carryS / drift;
                break;
            case 2:
                margintop -= 0.7 * carryS / drift;
                marginleft += 0.7 * carryS / drift;
                break;
            case 3:
                marginleft += carryS / drift;
                break;
            case 4:
                margintop += 0.7 * carryS / drift;
                marginleft += 0.7 * carryS / drift;
                break;
            case 5:
                margintop += carryS / drift;
                break;
            case 6:
                margintop += 0.7 * carryS / drift;
                marginleft -= 0.7 * carryS / drift;
                break;
            case 7:
                marginleft -= carryS / drift;
                break;
            case 8:
                margintop -= 0.7 * carryS / drift;
                marginleft -= 0.7 * carryS / drift;
                break;
            }

            $car.css("margin-top", margintop);
            $car.css("margin-left", marginleft);

            if ($car.offset().top <= 0) {
                $car.offset({top: 0, left: $car.offset().left});
                margintop = -5;
            } else if ($car.offset().left >= width - 32) {
                $car.css("margin-left", width - 32);
            } else if ($car.offset().bottom + 32 >= height) {
                $car.offset({top: height - 32, left: $car.offset().left});
            } else if ($car.offset().left <= 0) {
                $car.offset({top: $car.offset().top, left: -5});
                marginleft = -5;
            }
            carryS = carspeed + carryS / 2;
            for (x = 0; x < 8; x++) {
                carryD[x]--;
            }
        });
    }
});