
const colors = ["green", "#f15025", "red", "rgba(133,122,220)"];

const btn = document.getElementById("changeBackground");
const colorElement = document.querySelector(".color");

btn.addEventListener("click", function () {
    
    let randomNumber = getRandomElement();

    document.body.style.backgroundColor = colors[randomNumber];
    colorElement.textContent = colors[randomNumber];

    function getRandomElement()
    {
       return Math.floor(Math.random() * colors.length);
    }
});
