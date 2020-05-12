function changeColor() {
    document.getElementById("changeBg").style.background = getRandomColor();
}
function changeSalam() {
    var tanggalRN = new Date();
    var stringSalam = "good ";
    if (tanggalRN.getHours() < 11) {
        stringSalam = stringSalam + "morning";
    } else if (tanggalRN.getHours() < 18) {
        stringSalam = stringSalam + "afternoon";
    } else {
        stringSalam = stringSalam + "evening";
    }
    document.getElementById("pesanSalam").innerHTML = stringSalam
}