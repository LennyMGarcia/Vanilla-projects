let count = 0;

let value = document.querySelector("#value");
let buttons = document.querySelectorAll(".btn");

buttons.forEach( function (btn){
    btn.addEventListener("click", function(ev){
       const styles = ev.currentTarget.classList;

       if(styles.contains("decrease"))
       {
        count--;
       }

       else if(styles.contains("increase"))
       {
        count++;
       }

       else 
       {
        count = 0;
       }

       if(count < 0){
        value.style.color = "red";
       }

       else if(count === 0){
        value.style.color = "#000";
       }

       else if (count > 0){
        value.style.color = "green";
       }

       

       value.textContent = count;
    })

})