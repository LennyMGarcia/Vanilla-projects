let userScore = 0;
let botScore = 0;
const userScoreSpan = document.getElementById("userScore");
const botScoreSpan = document.getElementById("botScore");
const choicesOfPPT = document.querySelectorAll(".choice");
const resultText = document.getElementById("resultText");
const userElection = document.getElementById("userElection");
const botElection = document.getElementById("botElection");

function botChoice() {
    const choice = ["piedra", "papel", "tijeras"];
    const randomNumber = Math.floor(Math.random() * 3)
    return choice[randomNumber];
};

choicesOfPPT.forEach(function (ppt) {
    ppt.addEventListener("click", function (token) {
        const UserChoice = token.currentTarget.classList;
        const arrayOfUserChoice = Array.from(UserChoice);
        const botChoiceResult = botChoice()
        userQuickChange();
        botQuickChange();

        setTimeout(function() {

       
        
         userElection.src = "../Juego de piedra papel tijeras/imgs/" + arrayOfUserChoice[1] + ".jpg";
         botElection.src = "../Juego de piedra papel tijeras/imgs/" + botChoiceResult + ".jpg";

        switch (arrayOfUserChoice[1] + "-VS-" + botChoiceResult) {
            case "piedra-VS-tijeras":
            case "papel-VS-piedra":
            case "tijeras-VS-papel":
                win(arrayOfUserChoice[1], botChoiceResult);
                break;

            case "papel-VS-tijeras":
            case "tijeras-VS-piedra":
            case "piedra-VS-papel":
                lose(arrayOfUserChoice[1], botChoiceResult);
                break;

            case "papel-VS-papel":
            case "tijeras-VS-tijeras":
            case "piedra-VS-piedra":
                draw(arrayOfUserChoice[1], botChoiceResult)
                break;
            default:
                draw(arrayOfUserChoice[1], botChoiceResult);
        }}, 2000)
    })
})
function win(u_Result, b_Result) {
    userScore++;
    userScoreSpan.textContent = userScore;
    resultText.textContent = "Tu: "+ u_Result +", bot: " + b_Result + ", Ganaste ^^";
    resultText.style.color = "#ccac76";
}

function lose(u_Result, b_Result) {
    botScore++;
    botScoreSpan.textContent = botScore;
    resultText.textContent = "Tu: "+ u_Result +", bot: " +b_Result + ", Perdiste :/";
    resultText.style.color = "red";
}

function draw(u_Result, b_Result) {
    resultText.textContent = "Tu: "+ u_Result +", bot: " +b_Result + ", Es un empate :O";
    resultText.style.color = "white";
}



async function userQuickChange(){
    let arrayOfImgs = ["../Juego de piedra papel tijeras/imgs/piedra.jpg",
                       "../Juego de piedra papel tijeras/imgs/papel.jpg",
                       "../Juego de piedra papel tijeras/imgs/tijeras.jpg"];
    let  n = 0;
    while(n < 5)
    {
        for(const images of arrayOfImgs){
            userElection.src = images
            await delay(100)
        }
        n++;
    } 
}

async function botQuickChange(){
    let arrayOfImgs = ["../Juego de piedra papel tijeras/imgs/piedra.jpg",
                       "../Juego de piedra papel tijeras/imgs/papel.jpg",
                       "../Juego de piedra papel tijeras/imgs/tijeras.jpg"];
    let  n = 0;
    while(n < 5)
    {
        for(const images of arrayOfImgs){
            botElection.src = images
            await delay(100)
        }
        n++;
    } 
}


function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

