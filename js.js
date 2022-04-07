const selectAboutMe = () => {
    document.getElementById("tileBoardWrapper").style.display= "none";
    document.getElementById("display_AboutMe").style.display= "flex";
    document.getElementById("returnToTileBoard_BTN").style.display= "flex";
}

const selectExperience = () => {
    document.getElementById("tileBoardWrapper").style.display= "none";
    document.getElementById("display_Experience").style.display= "flex";
    document.getElementById("returnToTileBoard_BTN_2").style.display= "flex";
}
const selectPortfolio = () => {
    document.getElementById("tileBoardWrapper").style.display= "none";
    document.getElementById("display_Portfolio").style.display= "flex";
    document.getElementById("returnToTileBoard_BTN_3").style.display= "flex";
}
const selectSkills = () => {
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

const portfolio_Selection = (num) => {
    document.getElementById("portfolio_display_1").style.display= "flex";

    switch (num) {
    case 1:
    document.getElementById("portfolio_Display_Title1").innerHTML= "'FizzBuzz'<br>Eloquent Javascript";
    document.getElementById("portfolio_Desc1").innerHTML= 'Write a program to print all the numbers from 1 to 100. <br> For numbers divisible by 3, print "Fizz", and for numbers divisible by 5 (and not 3), print "Buzz". Print "FizzBuzz" for numbers that are divisible by both 3 and 5';
        break;
    case 2:
    document.getElementById("portfolio_Display_Title1").innerHTML= "item 2";
    document.getElementById("portfolio_Desc1").innerHTML= "item 2";
        break;
    case 3:
    document.getElementById("portfolio_Display_Title1").innerHTML= "item 3";
    document.getElementById("portfolio_Desc1").innerHTML= "item 2";
        break;
    case 4:
    document.getElementById("portfolio_Display_Title1").innerHTML= "item 4";
    document.getElementById("portfolio_Desc1").innerHTML= "item 2";        
        break;    
    case 5:
    document.getElementById("porfolio_Display_Title1").innerHTML= "item 5";
    document.getElementById("porfolio_Desc1").innerHTML= "item 2";
        break;
    case 6:
    document.getElementById("portfolio_Display_Title1").innerHTML= "item 6";
    document.getElementById("portfolio_Desc1").innerHTML= "item 2";
    }
}

const returnFromPortfolioItem = () => {
    document.getElementById("portfolio_display_1").style.display= "none";
    document.getElementById('showButton1').innerHTML = 'display results'
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