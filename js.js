function selectAboutMe() {
    document.getElementById("tileBoardWrapper").style.display= "none";
    document.getElementById("displayUI_AboutMe").style.display= "flex";
    document.getElementById("returnToTileBoard_BTN").style.display= "flex";
}

function returnToTileBoard() {

    document.getElementById("tileBoardWrapper").style.display= "flex";
    document.getElementById("displayUI_AboutMe").style.display= "none";
    document.getElementById("returnToTileBoard_BTN").style.display= "none";
}

function changeProfileImage() {
    document.getElementById("profileImage").style.display= "none";
    document.getElementById("profileImage2").style.display= "flex";
}

function changeProfileImage_revert() {
    document.getElementById("profileImage2").style.display= "none";
    document.getElementById("profileImage").style.display= "flex";
}