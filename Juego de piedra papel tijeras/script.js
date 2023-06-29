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

         userElection.src = "../Juego de piedra papel tijeras/imgs/" + arrayOfUserChoice[1] + ".jpg";
         botElection.src = "../Juego de piedra papel tijeras/imgs/" + botChoiceResult + ".jpg";

        switch (arrayOfUserChoice[1] + "-VS-" + botChoiceResult) {
            case "piedra-VS-tijeras":
            case "papel-VS-piedra":
            case "tijeras-VS-papel":
                win();
                break;

            case "papel-VS-tijeras":
            case "tijeras-VS-piedra":
            case "piedra-VS-papel":
                lose();
                break;

            case "papel-VS-papel":
            case "tijeras-VS-tijeras":
            case "piedra-VS-piedra":
                draw()
                break;
            default:
                draw();
        }
    })
})

function win() {
    userScore++;
    userScoreSpan.textContent = userScore;
    resultText.textContent = "You win yeeeesssssss";
    resultText.style.color = "#ccac76";
}

function lose() {
    botScore++;
    botScoreSpan.textContent = botScore;
    resultText.textContent = "Eres un jugador de lol que lamentable";
    resultText.style.color = "red";
}

function draw() {
    resultText.textContent = "Empateeeeeeeeeeeeeeeeeeee";
    resultText.style.color = "white";
}

