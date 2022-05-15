const selectAboutMe = () => {
    document.getElementById("tileBoardWrapper").style.display= "none";
    document.getElementById("display_AboutMe").style.display= "flex";
    document.getElementById("returnToTileBoard_BTN").style.display= "flex";
}

const selectExperience = () => {
    document.getElementById("tileBoardWrapper").style.display= "none";
    document.getElementById("display_Experience").style.display= "flex";
    document.getElementById("returnToTileBoard_BTN").style.display= "flex";
}
const selectPortfolio = () => {
    document.getElementById("tileBoardWrapper").style.display= "none";
    document.getElementById("display_Portfolio").style.display= "flex";
    document.getElementById("returnToTileBoard_BTN").style.display= "flex";
}
const selectSkills = () => {
    document.getElementById("tileBoardWrapper").style.display= "none";
    document.getElementById("mainWrapper").style.display= "none";
    document.getElementById("display_Skills").style.display= "flex";
    document.getElementById("returnToTileBoard_BTN").style.display= "flex";
}
function selectInterests() {
    document.getElementById("tileBoardWrapper").style.display= "none";
    document.getElementById("display_Interests").style.display= "flex";
    document.getElementById("returnToTileBoard_BTN").style.display= "flex";
    document.getElementById("mainWrapper").style.display= "none";
}
function selectEducation() {
    document.getElementById("tileBoardWrapper").style.display= "none";
    document.getElementById("display_Education").style.display= "flex";
    document.getElementById("returnToTileBoard_BTN").style.display= "flex";
    document.getElementById("mainWrapper").style.display= "none";
}
function selectContact() {
    document.getElementById("tileBoardWrapper").style.display= "none";
    document.getElementById("display_Contact").style.display= "flex";
    document.getElementById("returnToTileBoard_BTN").style.display= "flex";
    document.getElementById("mainWrapper").style.display= "none";
}

function returnToTileBoard() {
    const certContainer = document.getElementById('certContainer');

    document.getElementById("returnToTileBoard_BTN").style.display= "none";
    document.getElementById("tileBoardWrapper").style.display= "flex";
    document.getElementById("display_AboutMe").style.display= "none";
    document.getElementById("display_Experience").style.display= "none";
    document.getElementById("display_Portfolio").style.display= "none";
    document.getElementById("display_Skills").style.display= "none";
    document.getElementById("display_Interests").style.display= "none";
    document.getElementById("display_Education").style.display= "none";
    document.getElementById("display_Contact").style.display= "none";
    document.getElementById("mainWrapper").style.display= "flex";
    document.getElementById("portfolio_display_1").style.display= "none";
    document.getElementById("lC_Link").style.display= "none";
    document.getElementById("foxmithLink").style.display= "none";
    document.getElementById("homebase_Link").style.display= "none";   
    document.getElementById("invite_Link").style.display= "none";   
    document.getElementById("portfolio_Link").style.display= "none";     
    document.getElementById("rwb_Link").style.display= "none";      
}


const portfolio_Selection = (num) => {
    document.getElementById("portfolio_display_1").style.display= "flex";

    switch (num) {
    case 1:
    document.getElementById("portfolio_Display_Title1").innerHTML= "'Hosted on AWS Amplify";
    document.getElementById("portfolio_Desc1").style.top = "50px";
    document.getElementById("portfolio_Desc1").style.display= "none";
    document.getElementById("portfolio_Link").style.display= "none";   
    document.getElementById("rwb_Link").style.display= "flex";   
    document.getElementById("foxmithLink").style.display= "none";
    document.getElementById("homebase_Link").style.display= "none";     
    document.getElementById("invite_Link").style.display= "none";    
    document.getElementById("lC_Link").style.display= "none";
        break;
    case 2:
    document.getElementById("portfolio_Display_Title1").innerHTML= "Below is the link to my <br> latest front end project <br> on AWS Amplify";
    document.getElementById("portfolio_Desc1").style.display= "none";
    document.getElementById("portfolio_Desc1").style.top = "100px";
    document.getElementById("foxmithLink").style.display= "flex";
    document.getElementById("homebase_Link").style.display= "none";     
    document.getElementById("invite_Link").style.display= "none";    
    document.getElementById("lC_Link").style.display= "none";
    document.getElementById("portfolio_Link").style.display= "none";  
    document.getElementById("rwb_Link").style.display= "none";     
        break;
    case 3:
    document.getElementById("portfolio_Display_Title1").innerHTML= "Hosted on AWS Amplify";
    document.getElementById("portfolio_Desc1").style.display= "none";
    document.getElementById("portfolio_Desc1").style.top = "100px";
    document.getElementById("lC_Link").style.display= "none";
    document.getElementById("homebase_Link").style.display= "none";     
    document.getElementById("invite_Link").style.display= "none";  
    document.getElementById("portfolio_Link").style.display= "flex";  
    document.getElementById("rwb_Link").style.display= "none";    
    document.getElementById("foxmithLink").style.display= "none";    
        break;
    case 4:
    document.getElementById("portfolio_Display_Title1").innerHTML= "First attempt at cloning a website (front end)";
    document.getElementById("portfolio_Desc1").style.display= "none";
    document.getElementById("homebase_Link").style.display= "none";     
    document.getElementById("invite_Link").style.display= "none";  
    document.getElementById("lC_Link").style.display= "flex";
    document.getElementById("portfolio_Link").style.display= "none";     
    document.getElementById("rwb_Link").style.display= "none";  
    document.getElementById("foxmithLink").style.display= "none";
        break;    
    case 5:
    document.getElementById("portfolio_Display_Title1").innerHTML= "Animation practice on personal music site";
    document.getElementById("portfolio_Desc1").style.display= "none";
    document.getElementById("homebase_Link").style.display= "flex";    
    document.getElementById("invite_Link").style.display= "none";  
    document.getElementById("lC_Link").style.display= "none";
    document.getElementById("portfolio_Link").style.display= "none";     
    document.getElementById("rwb_Link").style.display= "none";  
    document.getElementById("foxmithLink").style.display= "none";
        break;
    case 6:
    document.getElementById("portfolio_Display_Title1").innerHTML= "Practice with forms and animation";
    document.getElementById("portfolio_Desc1").style.display= "none";
    document.getElementById("homebase_Link").style.display= "none";  
    document.getElementById("invite_Link").style.display= "flex";  
    document.getElementById("lC_Link").style.display= "none";
    document.getElementById("portfolio_Link").style.display= "none";     
    document.getElementById("rwb_Link").style.display= "none";  
    document.getElementById("foxmithLink").style.display= "none";
    }
}


const returnFromPortfolioItem = () => {
    document.getElementById("portfolio_display_1").style.display= "none";
    document.getElementById('showButton1').innerHTML = 'display results'
    document.getElementById("foxmithLink").style.display= "none";
    document.getElementById("lC_Link").style.display= "none";
    document.getElementById("homebase_Link").style.display= "none";    
    document.getElementById("invite_Link").style.display= "none";  
    document.getElementById("portfolio_Link").style.display= "none";     
    document.getElementById("rwb_Link").style.display= "none";  
   
}


