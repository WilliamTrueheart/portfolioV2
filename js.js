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
    document.getElementById('showButton1').innerHTML = 'display results'
    document.getElementById("portfolio_display_1").style.display= "none";
    document.getElementById("lC_Link").style.display= "none";
    document.getElementById("foxmithLink").style.display= "none";
    document.getElementById("homebase_Link").style.display= "none";   
    document.getElementById("invite_Link").style.display= "none";   
    document.getElementById("portfolio_Link").style.display= "none";        
    certContainer.style.backgroundImage = "none";
    certContainer.innerText = 'click name to retrieve certificate' ;

}


const portfolio_Selection = (num) => {
    document.getElementById("portfolio_display_1").style.display= "flex";

    switch (num) {
    case 1:
    document.getElementById("portfolio_Display_Title1").innerHTML= "'FizzBuzz'<br>Eloquent Javascript";
    document.getElementById("portfolio_Desc1").innerHTML= 'Write a program to print all the numbers from 1 to 100. <br><br> For numbers divisible by 3, print "Fizz", and for numbers divisible by 5 (and not 3), print "Buzz".<br><br> Print "FizzBuzz" for numbers that are divisible by both 3 and 5.';
    document.getElementById("showButton1").style.display= "flex";
    document.getElementById("portfolio_Desc1").style.top = "50px";
    document.getElementById("portfolio_Desc1").style.display= "flex";
    document.getElementById("portfolio_Link").style.display= "none";     
        break;
    case 2:
    document.getElementById("portfolio_Display_Title1").innerHTML= "Below is the link to my <br> first front end project <br> on AWS Amplify";
    document.getElementById("portfolio_Desc1").style.display= "none";
    document.getElementById("portfolio_Desc1").style.top = "100px";
    document.getElementById("showButton1").style.display= "none";
    document.getElementById("foxmithLink").style.display= "flex";
    document.getElementById("homebase_Link").style.display= "none";     
    document.getElementById("invite_Link").style.display= "none";    
    document.getElementById("lC_Link").style.display= "none";
    document.getElementById("portfolio_Link").style.display= "none";     
        break;
    case 3:
    document.getElementById("portfolio_Display_Title1").innerHTML= "Hosted on AWS Amplify";
    document.getElementById("portfolio_Desc1").style.display= "none";
    document.getElementById("portfolio_Desc1").style.top = "100px";
    document.getElementById("showButton1").style.display= "none";
    document.getElementById("lC_Link").style.display= "none";
    document.getElementById("homebase_Link").style.display= "none";     
    document.getElementById("invite_Link").style.display= "none";  
    document.getElementById("portfolio_Link").style.display= "flex";        
        break;
    case 4:
    document.getElementById("portfolio_Display_Title1").innerHTML= "First attempt at cloning a website (front end)";
    document.getElementById("portfolio_Desc1").style.display= "none";
    document.getElementById("showButton1").style.display= "none";
    document.getElementById("homebase_Link").style.display= "none";     
    document.getElementById("invite_Link").style.display= "none";  
    document.getElementById("lC_Link").style.display= "flex";
    document.getElementById("portfolio_Link").style.display= "none";     
        break;    
    case 5:
    document.getElementById("portfolio_Display_Title1").innerHTML= "Animation practice on personal music site";
    document.getElementById("portfolio_Desc1").style.display= "none";
    document.getElementById("showButton1").style.display= "none";
    document.getElementById("homebase_Link").style.display= "flex";    
    document.getElementById("invite_Link").style.display= "none";  
    document.getElementById("lC_Link").style.display= "none";
    document.getElementById("portfolio_Link").style.display= "none";     
        break;
    case 6:
    document.getElementById("portfolio_Display_Title1").innerHTML= "Practice with forms and animation";
    document.getElementById("portfolio_Desc1").style.display= "none";
    document.getElementById("showButton1").style.display= "none";
    document.getElementById("homebase_Link").style.display= "none";  
    document.getElementById("invite_Link").style.display= "flex";  
    document.getElementById("lC_Link").style.display= "none";
    document.getElementById("portfolio_Link").style.display= "none";     

    }
}


const returnFromPortfolioItem = () => {
    document.getElementById("portfolio_display_1").style.display= "none";
    document.getElementById('showButton1').innerHTML = 'display results'
    document.getElementById("foxmithLink").style.display= "none";
    document.getElementById("lC_Link").style.display= "none";
    document.getElementById("showButton1").style.display= "none";
    document.getElementById("homebase_Link").style.display= "none";    
    document.getElementById("invite_Link").style.display= "none";  
    document.getElementById("portfolio_Link").style.display= "none";     

   
}

const fizzBuzz = () => {
    let fizzBuzz = [];

    for (i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            fizzBuzz.push('FizzBuzz')
        }
        else if (i % 3 == 0) {
            fizzBuzz.push('Fizz')
        }
        else if (i % 5 == 0) {
            fizzBuzz.push('Buzz')
        }
        else {
            fizzBuzz.push(i)
        }
    }

    document.getElementById('showButton1').innerHTML = fizzBuzz.join(', ')
}


const selectCert = (num) => {
    const certContainer = document.getElementById('certContainer');

    if (num == 1) {
        certContainer.innerText = '' ;
        certContainer.style.backgroundImage = "url('htmlCert.png')";
    }
    if (num == 2) {
        certContainer.innerText = '' ;
        certContainer.style.backgroundImage = "url('jsCert.png')";
    }
    if (num == 3) {
        certContainer.innerText = '' ;
        certContainer.style.backgroundImage = "url('sqlCert.png')";
    }
    if (num == 4) {
        certContainer.innerText = 'upon request' ;
        certContainer.style.backgroundImage = "none";
        }
}