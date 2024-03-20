//Funcion del slider
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})

//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skillsall = document.getElementById("skillsall");
    var distancia_skillsall = window.innerHeight - skillsall.getBoundingClientRect().top;
    if(distancia_skillsall >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("git");
        habilidades[3].classList.add("react");
        habilidades[4].classList.add("trabajoenequipo");
        habilidades[5].classList.add("trabajoenequipo");
        habilidades[6].classList.add("resiliencia");
        habilidades[7].classList.add("responsabilidad");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 