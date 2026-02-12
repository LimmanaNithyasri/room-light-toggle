function lightOn() {
    document.getElementById("bulb").src =
        "https://www.w3schools.com/js/pic_bulbon.gif";
    document.getElementById("body").style.backgroundColor = "#fff8b3";
}

function lightOff() {
    document.getElementById("bulb").src =
        "https://www.w3schools.com/js/pic_bulboff.gif";
    document.getElementById("body").style.backgroundColor = "black";
}
