
const image = document.getElementById("photos");
const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function(ev){

    let id = ev.target.dataset.id;

    if(id){
        btns.forEach(function(btn){
            btn.classList.remove("active");
        });
        ev.target.classList.add("active");

        articles.forEach(function(article){
            article.classList.remove("active");
        })

        const element = document.getElementById(id);
        element.classList.add("active")

        if(id == "history"){
            image.src = '../Pestañas que muestren contenido diferente/img/photo1.jpeg';
        }

       else if(id == "vision"){
            image.src = "../Pestañas que muestren contenido diferente/img/photo2.jpeg";
        }

        else if(id == "goals"){
            image.src = '../Pestañas que muestren contenido diferente/img/photo3.jpeg';
        }
    }
})