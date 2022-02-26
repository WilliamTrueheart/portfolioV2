function selectAboutMe() {
    document.getElementById("tileBoardWrapper").style.display= "none";
    document.getElementById("display_AboutMe").style.display= "flex";
    document.getElementById("returnToTileBoard_BTN").style.display= "flex";
}

function selectExperience() {
    document.getElementById("tileBoardWrapper").style.display= "none";
    document.getElementById("display_Experience").style.display= "flex";
    document.getElementById("returnToTileBoard_BTN_2").style.display= "flex";
}
function selectPortfolio() {
    document.getElementById("tileBoardWrapper").style.display= "none";
    document.getElementById("display_Portfolio").style.display= "flex";
    document.getElementById("returnToTileBoard_BTN_3").style.display= "flex";
}
function selectSkills() {
    document.getElementById("tileBoardWrapper").style.display= "none";
    document.getElementById("display_Skills").style.display= "flex";
    document.getElementById("returnToTileBoard_BTN_4").style.display= "flex";
}
function selectInterests() {
    document.getElementById("tileBoardWrapper").style.display= "none";
    document.getElementById("display_Interests").style.display= "flex";
    document.getElementById("returnToTileBoard_BTN_5").style.display= "flex";
}
function selectEducation() {
    document.getElementById("tileBoardWrapper").style.display= "none";
    document.getElementById("display_Education").style.display= "flex";
    document.getElementById("returnToTileBoard_BTN_6").style.display= "flex";
}
function selectContact() {
    document.getElementById("tileBoardWrapper").style.display= "none";
    document.getElementById("display_Contact").style.display= "flex";
    document.getElementById("returnToTileBoard_BTN_7").style.display= "flex";
}

function returnToTileBoard() {
    document.getElementById("tileBoardWrapper").style.display= "flex";
    document.getElementById("display_AboutMe").style.display= "none";
    document.getElementById("display_Experience").style.display= "none";
    document.getElementById("display_Portfolio").style.display= "none";
    document.getElementById("display_Skills").style.display= "none";
    document.getElementById("display_Interests").style.display= "none";
    document.getElementById("display_Education").style.display= "none";
    document.getElementById("display_Contact").style.display= "none";
}


function changeProfileImage() {
    document.getElementById("profileImage").style.display= "none";
    document.getElementById("profileImage2").style.display= "flex";
}

function changeProfileImage_revert() {
    document.getElementById("profileImage2").style.display= "none";
    document.getElementById("profileImage").style.display= "flex";
}